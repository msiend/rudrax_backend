const db = require('@/config/dbConfig');
const { err_logger } = require('@/utils/err_logger');

class Notification {
   static async create({ title, message, type = 'info', expiresAt = null, metadata = null }) {
      const [result] = await db.query(
         'INSERT INTO notifications (title, message, type, expires_at, metadata) VALUES (?, ?, ?, ?, ?)',
         [title, message, type, expiresAt, metadata ? JSON.stringify(metadata) : null]
      );
      return result.insertId;
   }

   static async addRecipients(notificationId, recipients) {
      if (!recipients || recipients.length === 0) {
         throw new Error('At least one recipient is required');
      }
      const values = recipients.map((recipient) => [notificationId, recipient.userId || null, recipient.role || null]);
      await db.query('INSERT INTO notification_recipients (notification_id, user_id, role) VALUES ?', [values]);
   }

   static async getUserNotifications(userId, userRole, unreadOnly = false, limit = 20, offset = 0) {
      let query = `SELECT n.id, n.title, n.message, n.type, n.created_at,nr.is_read, nr.read_at,n.metadata FROM notifications n JOIN notification_recipients nr ON n.id = nr.notification_id
            WHERE (nr.user_id = ? OR nr.role = ?) AND (n.expires_at IS NULL OR n.expires_at > NOW())`;
      const params = [userId, userRole];
      if (unreadOnly) {
         query += ' AND nr.is_read = FALSE';
      }
      query += ' ORDER BY n.created_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);
      const [notifications] = await db.query(query, params);
      return notifications;
   }

   static async markAsRead(notificationId, userId) {
      await db.query(
         'UPDATE notification_recipients SET is_read = TRUE, read_at = NOW() WHERE notification_id = ? AND user_id = ?',
         [notificationId, userId]
      );
   }
   static async markAllAsRead(userId) {
      await db.query(
         'UPDATE notification_recipients SET is_read = TRUE, read_at = NOW() WHERE user_id = ? AND is_read = FALSE',
         [userId]
      );
   }
   static async getNotificationCount(userId, userRole, unreadOnly = false) {
      let query = `
            SELECT COUNT(*) as count
            FROM notification_recipients nr
            JOIN notifications n ON n.id = nr.notification_id
            WHERE 
                (nr.user_id = ? OR nr.role = ?) AND
                (n.expires_at IS NULL OR n.expires_at > NOW())
        `;
      const params = [userId, userRole];

      if (unreadOnly) {
         query += ' AND nr.is_read = FALSE';
      }

      const [result] = await db.query(query, params);
      return result[0].count;
   }
   static async notifyRoles(notificationData, roles) {
      const notificationId = await this.create(notificationData);
      const recipients = roles.map((role) => ({ role }));
      await this.addRecipients(notificationId, recipients);
      return notificationId;
   }

   static async notifyUsers(notificationData, userIds) {
      const notificationId = await this.create(notificationData);
      const recipients = userIds.map((userId) => ({ userId }));
      await this.addRecipients(notificationId, recipients);
      return notificationId;
   }
}

module.exports = Notification;
