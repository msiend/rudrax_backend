const pool = require('@/config/dbConfig');

class ProjectModel {
   constructor(
      pro_client_r_id,
      pro_name,
      pro_ref_no,
      pro_sitedesc,
      pro_type,
      pro_worktype,
      pro_category,
      pro_sitelocation,
      pro_sitearea,
      pro_sitedirection,
      pro_duration,
      pro_recs_space,
      pro_recs_smention,
      pro_totalcost,
      pro_advancepayment
   ) {
      this.pro_client_r_id = pro_client_r_id;
      this.pro_name = pro_name;
      this.pro_ref_no = pro_ref_no;
      this.pro_sitedesc = pro_sitedesc;
      this.pro_type = pro_type;
      this.pro_worktype = pro_worktype;
      this.pro_category = pro_category;
      this.pro_sitelocation = pro_sitelocation;
      this.pro_sitearea = pro_sitearea;
      this.pro_sitedirection = pro_sitedirection;
      this.pro_duration = pro_duration;
      this.pro_recs_space = pro_recs_space;
      this.pro_recs_smention = pro_recs_smention;
      this.pro_totalcost = pro_totalcost;
      this.pro_advancepayment = pro_advancepayment;
   }

   static async create(
      pro_client_r_id,
      pro_name,
      pro_ref_no,
      pro_sitedesc,
      pro_type,
      pro_worktype,
      pro_category,
      pro_sitelocation,
      pro_sitearea,
      pro_sitedirection,
      pro_duration,
      pro_recs_space,
      pro_recs_smention,
      pro_totalcost,
      pro_advancepayment
   ) {
      const connPool = await pool.getConnection();
      const insertSQL = `
      INSERT INTO projects (
        pro_client_r_id,
        pro_name,
        pro_ref_no,
        pro_sitedesc,
        pro_type,
        pro_worktype,
        pro_category,
        pro_sitelocation,
        pro_sitearea,
        pro_sitedirection,
        pro_duration,
        pro_recs_space,
        pro_recs_smention,
        pro_totalcost,
        pro_advancepayment
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
      try {
         const [result] = await connPool.query(insertSQL, [
            pro_client_r_id,
            pro_name,
            pro_ref_no,
            pro_sitedesc,
            pro_type,
            pro_worktype,
            pro_category,
            pro_sitelocation,
            pro_sitearea,
            pro_sitedirection,
            pro_duration,
            pro_recs_space,
            pro_recs_smention,
            pro_totalcost,
            pro_advancepayment,
         ]);
         return { status: true, insertId: result.insertId, msg: 'Project created successfully' };
      } catch (error) {
         console.error('Error creating project:', error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async findAll() {
      const connPool = await pool.getConnection();
      const selectSQL = `SELECT * FROM projects;`;
      try {
         const [rows] = await connPool.query(selectSQL);
         return rows;
      } catch (error) {
         console.error('Error fetching all projects:', error);
         return [];
      } finally {
         connPool.release();
      }
   }

   static async findById(pro_id) {
      const connPool = await pool.getConnection();
      const selectSQL = `SELECT * FROM projects WHERE pro_id = ? LIMIT 1;`;
      try {
         const [rows] = await connPool.query(selectSQL, [pro_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error fetching project with id ${pro_id}:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }

   static async update(
      pro_id,
      pro_client_r_id,
      pro_name,
      pro_sitedesc,
      pro_type,
      pro_worktype,
      pro_category,
      pro_sitelocation,
      pro_sitearea,
      pro_sitedirection,
      pro_duration,
      pro_recs_space,
      pro_recs_smention,
      pro_totalcost,
      pro_advancepayment
   ) {
      const connPool = await pool.getConnection();
      const updateSQL = `
      UPDATE projects
      SET
        pro_client_r_id = ?,
        pro_name = ?,
        pro_sitedesc = ?,
        pro_type = ?,
        pro_worktype = ?,
        pro_category = ?,
        pro_sitelocation = ?,
        pro_sitearea = ?,
        pro_sitedirection = ?,
        pro_duration = ?,
        pro_recs_space = ?,
        pro_recs_smention = ?,
        pro_totalcost = ?,
        pro_advancepayment = ?
      WHERE pro_id = ?
    `;
      try {
         const [result] = await connPool.query(updateSQL, [
            pro_client_r_id,
            pro_name,
            pro_sitedesc,
            pro_type,
            pro_worktype,
            pro_category,
            pro_sitelocation,
            pro_sitearea,
            pro_sitedirection,
            pro_duration,
            pro_recs_space,
            pro_recs_smention,
            pro_totalcost,
            pro_advancepayment,
            pro_id,
         ]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Project updated successfully!' };
         }
         return { status: false, msg: 'No record updated.' };
      } catch (error) {
         console.error(`Error updating project with id ${pro_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async remove(pro_id) {
      const connPool = await pool.getConnection();
      const deleteSQL = `DELETE FROM projects WHERE pro_id = ?;`;
      try {
         const [result] = await connPool.query(deleteSQL, [pro_id]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Project deleted successfully.' };
         }
         return { status: false, msg: 'No record deleted.' };
      } catch (error) {
         console.error(`Error deleting project with id ${pro_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }
}

module.exports = ProjectModel;
