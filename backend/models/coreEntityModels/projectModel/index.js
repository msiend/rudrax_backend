const pool = require('@/config/dbConfig');

class projectModel {
   constructor() {}
   static async getLastClientRef() {
      const query = 'SELECT pro_ref_no FROM projects ORDER BY pro_id DESC LIMIT 1';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all clients:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async getProjectDetails(pro_id) {
      const query = `
      SELECT pc.*,c.con_name FROM project_contractor pc JOIN contractors c ON c.con_id =pc.con_id WHERE pro_id = ?;
      SELECT pp.pro_phase_id, pp.pro_id, pp.phase_id, pp.pro_phase_status, pp.pro_phase_deadline, pp.created_at AS pro_phase_created_at, ph.phase_name, ph.phase_alt_name, ppt.pt_id, ppt.pro_phase_task, ppt.deadline AS task_deadline, ppt.pt_status, ppt.created_at AS task_created_at, pt.phase_task_name, pt.phase_task_alt_name FROM project_phase AS pp LEFT JOIN phases AS ph ON pp.phase_id = ph.phase_id LEFT JOIN project_phase_task AS ppt ON ppt.pro_phase = pp.pro_phase_id LEFT JOIN phase_tasks AS pt ON ppt.pro_phase_task = pt.phase_task_id WHERE pp.pro_id = ?;
      SELECT pro_doc_id, pro_r_id, pro_doc_url,pro_doc_name,pro_doc_type FROM project_docs WHERE pro_r_id = ?;
      SELECT c.* FROM projects pc JOIN clients c ON c.client_id =pc.pro_client_r_id WHERE pc.pro_id= ?;
  `;
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [pro_id, pro_id, pro_id, pro_id]);
         console.log(rows);
         
         return rows;
      } catch (error) {
         console.error('Error fetching project details:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = projectModel;
