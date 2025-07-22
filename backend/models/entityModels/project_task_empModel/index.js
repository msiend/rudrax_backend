const pool = require('@/config/dbConfig');

class ProjectEmployeeModel {
   static async findAll() {
      const query = 'SELECT * FROM project_task_emp';
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

   static async findOne(ptemp_id) {
      const query = 'SELECT * FROM project_task_emp WHERE ptemp_id = ?';
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(query, [ptemp_id]);
         return rows[0];
      } catch (error) {
         console.error(`Error fetching project employee by ID ${ptemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async create(data) {
      const query = `
         INSERT INTO project_task_emp 
         (ptemp_pt_id, ptemp_user_id, ptemp_assigned_by, ptemp_status) 
         VALUES (?, ?, ?, ?)`;
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.ptemp_pt_id,
            data.ptemp_user_id,
            data.ptemp_assigned_by,
            data.ptemp_status,
         ]);
         if (result.affectedRows > 0) {
            return {
               status: result.affectedRows > 0,
               data: {
                  ptemp_id: result.insertId,
                  ptemp_pt_id: data.ptemp_pt_id,
                  ptemp_user_id: data.ptemp_user_id,
                  ptemp_assigned_by: data.ptemp_assigned_by,
                  ptemp_status: data.ptemp_status,
               },
            };
         } else {
            return { status: result.affectedRows > 0 };
         }
      } catch (error) {
         console.error('Error creating project employee:', error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async update(ptemp_id, data) {
      const query = `
         UPDATE project_task_emp 
         SET ptemp_pt_id = ?, ptemp_user_id = ?, ptemp_assigned_date = ?, ptemp_assigned_by = ?, ptemp_status = ?
         WHERE ptemp_id = ?`;
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.ptemp_pt_id,
            data.ptemp_user_id,
            data.ptemp_assigned_date,
            data.ptemp_assigned_by,
            data.ptemp_status,
            ptemp_id,
         ]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0 ? 'Project employee updated.' : 'Update failed.',
         };
      } catch (error) {
         console.error(`Error updating project employee with ID ${ptemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }

   static async remove(ptemp_id) {
      const query = 'DELETE FROM project_task_emp WHERE ptemp_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [ptemp_id]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0 ? 'Deleted successfully.' : 'No record deleted.',
         };
      } catch (error) {
         console.error(`Error deleting project employee with ID ${ptemp_id}:`, error);
         throw error;
      } finally {
         conn.release();
      }
   }
}

module.exports = ProjectEmployeeModel;
