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
    SELECT 
      pc.pro_id,
      pc.pro_con_id,
      pc.con_id,
      pc.pro_phase AS contractor_phase,
      pc.pro_sub_phase AS contractor_subphase,

      pp.pro_phase_id,
      pp.pro_phase_status,
      pp.pro_phase_deadline,
      pp.created_at AS phase_created_at,

      ps.pro_subphase_id,
      ps.pro_phase AS subphase_phase_id,
      ps.pro_subphase,
      ps.deadline,
      ps.created_at AS subphase_created_at

    FROM project_contractor pc
    LEFT JOIN project_phase pp ON pc.pro_id = pp.pro_id
    LEFT JOIN project_subphase ps ON pc.pro_id = ps.pro_id
    ORDER BY pc.pro_id, pp.pro_phase_id, ps.pro_subphase_id
  `;

      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query,[]);
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
