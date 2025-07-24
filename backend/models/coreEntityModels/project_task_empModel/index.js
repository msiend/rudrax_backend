const pool = require('@/config/dbConfig');

class ProjectTaskEmpModel {
   static async updateStatus(ptemp_id, ptemp_status) {
      const query = 'UPDATE project_task_emp SET ptemp_status = ? WHERE ptemp_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [ptemp_status, ptemp_id]);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }
   static async getAllByProjectId(project_id) {
      const query =
         'SELECT * FROM `project_task_emp` pte LEFT JOIN project_phase_task pt on pte.ptemp_pt_id=pt.pt_id WHERE pt.pro_id = ?;';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [project_id]);
         return result
      } finally {
         conn.release();
      }
   }
   static async getAllByPhaseId(phase_id) {
      const query =
         'SELECT * FROM `project_task_emp` pte LEFT JOIN project_phase_task pt on pte.ptemp_pt_id=pt.pt_id WHERE pt.pro_phase = ?;';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [phase_id]);
         return result
      } finally {
         conn.release();
      }
   }
      static async getAllByPhaseTaskId(phase_task_id) {
      const query =
         'SELECT pte.* , users.first_name FROM `project_task_emp` pte LEFT JOIN project_phase_task pt on pte.ptemp_pt_id=pt.pt_id JOIN users on users.u_id =pte.ptemp_user_id WHERE pt.pt_id = ?;';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [phase_task_id]);
         return result
      } finally {
         conn.release();
      }
   }
   static async getAllByUserId(user_id) {
      const query = 'SELECT * FROM `project_task_emp` WHERE ptemp_user_id =?;';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [user_id]);
         return result;
      } finally {
         conn.release();
      }
   }
}

module.exports = ProjectTaskEmpModel;
