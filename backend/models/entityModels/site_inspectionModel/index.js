const pool = require('@/config/dbConfig');

class SiteInspectionModel {
   constructor(project_id, si_asign_id, si_date, si_location, si_type, status) {
      this.project_id = project_id;
      this.si_asign_id = si_asign_id;
      this.si_date = si_date;
      this.si_location = si_location;
      this.si_type = si_type;
      this.status = status;
   }

     static async findOne(si_id) {
      const connPool = await pool.getConnection();
      const selectSQL = `
      SELECT * FROM site_inspections WHERE si_id = ? LIMIT 0,1;
    `;

      try {
         const [rows] = await connPool.query(selectSQL, [si_id]);
         if (rows.length > 0) {
            return rows[0];
         }
         return null;
      } catch (error) {
         console.error(`Error fetching site inspection with id ${si_id}:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }

   static async findAll() {
      const connPool = await pool.getConnection();
      const selectSQL = `SELECT * FROM site_inspections;`;
      try {
         const [rows] = await connPool.query(selectSQL);
         return rows;
      } catch (error) {
         console.error('Error fetching all site inspections:', error);
         return [];
      } finally {
         connPool.release();
      }
   }
   static async create(project_id, si_asign_id,si_asign_by, si_date, si_location, si_type,si_feedback, status ) {
      const connPool = await pool.getConnection();
      const insertSQL = `
      INSERT INTO site_inspections 
        (project_id, si_asign_id,si_asign_by, si_date, si_location, si_type,si_feedback, status) 
      VALUES (?, ?, ?, ?, ?, ?,?,?);
    `;

      try {
         const [result] = await connPool.query(insertSQL, [
            project_id,
            si_asign_id,
            si_asign_by,
            si_date,
            si_location,
            si_type,
            si_feedback,
            status,
         ]);

         return {
            status: true,
            id: result.insertId,
            msg: 'Site inspection record created successfully!',
         };
      } catch (error) {
         console.error('Error creating site inspection:', error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async update(si_id, project_id, si_asign_id,si_asign_by, si_date, si_location, si_type,si_feedback, status) {
      const connPool = await pool.getConnection();
      const updateSQL = `UPDATE site_inspections SET project_id = ?,si_asign_id = ?,si_asign_by=?, si_date = ?, si_location = ?, si_type = ?,si_feedback=?, status = ? WHERE si_id = ?;
    `;
      try {
         const [result] = await connPool.query(updateSQL, [
            project_id,
            si_asign_id,
            si_asign_by,
            si_date,
            si_location,
            si_type,
            si_feedback,
            status,
            si_id,
         ]);

         if (result.affectedRows > 0) {
            return { status: true, msg: 'Site inspection updated successfully!' };
         }
         return { status: false, msg: 'No record updated.' };
      } catch (error) {
         console.error(`Error updating site inspection with id ${si_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

 
   static async remove(si_id) {
      const connPool = await pool.getConnection();
      const deleteSQL = `
      DELETE FROM site_inspections WHERE si_id = ?;
    `;

      try {
         const [result] = await connPool.query(deleteSQL, [si_id]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Site inspection deleted successfully.' };
         }
         return { status: false, msg: 'No record deleted.' };
      } catch (error) {
         console.error(`Error deleting site inspection with id ${si_id}:`, error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }
}

module.exports = SiteInspectionModel;
