const pool = require('@/config/dbConfig');

class ProjectSiteQueryModel {
   constructor(q_title, q_desc, q_type, q_category, q_raised_by, q_status) {
      this.q_title = q_title;
      this.q_desc = q_desc;
      this.q_type = q_type;
      this.q_category = q_category;
      this.q_raised_by = q_raised_by;
      this.q_status = q_status;
   }

   static async create( q_title, q_desc, q_type, q_category,q_raised_by, q_status, approved_by, approved_date,q_remarks ) {
      const connPool = await pool.getConnection();
      const insertSQL = `
      INSERT INTO project_queries 
      (q_title, q_desc, q_type, q_category, q_raised_by, q_status,q_remarks)
      VALUES (?, ?, ?, ?, ?, ?,?);
    `;

      try {
         const [result] = await connPool.query(insertSQL, [q_title, q_desc, q_type, q_category, q_raised_by, q_status,q_remarks]);
         return { status: true, insertId: result.insertId, msg: 'Query created successfully!' };
      } catch (error) {
         console.error('Error creating project site query:', error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async update(q_id, q_title, q_desc, q_type, q_category, q_status, approved_by, approved_date, q_remarks) {
      const connPool = await pool.getConnection();
      const updateSQL = `
      UPDATE project_queries
      SET q_title = ?, q_desc = ?, q_type = ?, q_category = ?, 
          q_status = ?, approved_by = ?, approved_date = ?, q_remarks = ?
      WHERE q_id = ?;
    `;

      try {
         const [result] = await connPool.query(updateSQL, [
            q_title,
            q_desc,
            q_type,
            q_category,
            q_status,
            approved_by,
            approved_date,
            q_remarks,
            q_id,
         ]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Query updated successfully!' };
         }
         return { status: false, msg: 'No record updated.' };
      } catch (error) {
         console.error(`Error updating query with id ${q_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async findById(q_id) {
      const connPool = await pool.getConnection();
      const selectSQL = `
      SELECT * FROM project_queries WHERE q_id = ? LIMIT 0,1;
    `;

      try {
         const [rows] = await connPool.query(selectSQL, [q_id]);
         if (rows.length > 0) {
            return rows[0];
         }
         return null;
      } catch (error) {
         console.error(`Error fetching query with id ${q_id}:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }

   static async findAll() {
      const connPool = await pool.getConnection();
      const selectSQL = `SELECT * FROM project_queries;`;

      try {
         const [rows] = await connPool.query(selectSQL);
         return rows;
      } catch (error) {
         console.error('Error fetching all project site queries:', error);
         return [];
      } finally {
         connPool.release();
      }
   }

   static async remove(q_id) {
      const connPool = await pool.getConnection();
      const deleteSQL = `DELETE FROM project_queries WHERE q_id = ?;`;

      try {
         const [result] = await connPool.query(deleteSQL, [q_id]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Query deleted successfully.' };
         }
         return { status: false, msg: 'No record deleted.' };
      } catch (error) {
         console.error(`Error deleting query with id ${q_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }
}

module.exports = ProjectSiteQueryModel;
