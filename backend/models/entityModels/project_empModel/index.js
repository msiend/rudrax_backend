const pool = require('@/config/dbConfig');

class ProjectEmployeeModel {
   static async findAll() {
      const query = 'SELECT * FROM project_employee';
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(query);
         return rows;
      } catch (error) {
         console.error('Error fetching all project employees:', error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async findOne(pemp_id) {
      const query = 'SELECT * FROM project_employee WHERE pemp_id = ?';
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(query, [pemp_id]);
         return rows[0];
      } catch (error) {
         console.error(`Error fetching project employee by ID ${pemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async create(data) {
      const query = `
         INSERT INTO project_employee 
         (pemp_project_id, pemp_user_id, pemp_assigned_date, pemp_assigned_by, pemp_status, created_at, updated_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.pemp_project_id,
            data.pemp_user_id,
            data.pemp_assigned_date,
            data.pemp_assigned_by,
            data.pemp_status,
            data.created_at,
            data.updated_at,
         ]);
         return { status: result.affectedRows > 0, insertId: result.insertId };
      } catch (error) {
         console.error('Error creating project employee:', error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async update(pemp_id, data) {
      const query = `
         UPDATE project_employee 
         SET pemp_project_id = ?, pemp_user_id = ?, pemp_assigned_date = ?, pemp_assigned_by = ?, pemp_status = ?, updated_at = ? 
         WHERE pemp_id = ?`;
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.pemp_project_id,
            data.pemp_user_id,
            data.pemp_assigned_date,
            data.pemp_assigned_by,
            data.pemp_status,
            data.updated_at,
            pemp_id,
         ]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0 ? 'Project employee updated.' : 'Update failed.',
         };
      } catch (error) {
         console.error(`Error updating project employee with ID ${pemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async remove(pemp_id) {
      const query = 'DELETE FROM project_employee WHERE pemp_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [pemp_id]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0 ? 'Deleted successfully.' : 'No record deleted.',
         };
      } catch (error) {
         console.error(`Error deleting project employee with ID ${pemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }
}

module.exports = ProjectEmployeeModel;
