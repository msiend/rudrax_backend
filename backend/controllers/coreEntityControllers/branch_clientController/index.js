//Hello, this is a Controller for branchClients!
const BranchClientsModel = require('@/models/entityModels/branchClientsModel');
const pool = require('@/config/dbConfig');

class BranchClientsController {
   // Get all branch clients
    static async getBranchLastRef(req, res) {
      try {
         const [data] = await BranchClientsModel.getLastBranchRef();
         let lastNum = parseInt(data['b_client_id'].slice(-4));
         let newRef = data['b_client_id'].replace(lastNum, lastNum + 1);
         return res.status(200).send({
            status: true,
            msg: 'Clients Ref retrieved successfully',
            data: { lastRefNo: data['b_client_id'], newRefNo: newRef },
         });
      } catch (error) {
         console.error('Error fetching clients:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
   static async approveClientAndCreateProject(req, res) {
      const { client_id, b_client_id, admin_approval } = req.body;

      if (!admin_approval || !b_client_id) {
         return res.status(400).json({
            status: false,
            message: 'Missing admin_approval or b_client_id.',
            data: null,
         });
      }

      const conn = await pool.getConnection();
      try {
         await conn.beginTransaction();

         //  Fetch branch client data
         const [branchClientRows] = await conn.query(`SELECT * FROM branch_clients WHERE b_client_id = ?`, [
            b_client_id,
         ]);

         if (branchClientRows.length === 0) {
            await conn.release();
            return res.status(404).json({
               status: false,
               message: 'Branch client not found.',
               data: null,
            });
         }

         const clientData = branchClientRows[0];

         //  Check if already approved
         if (clientData.approved_at) {
            conn.release();
            return res.status(409).json({
               status: false,
               message: 'Client has already been approved.',
               data: { approved_at: clientData.approved_at },
            });
         }

         //  Insert into clients if client_id is not provided
         let finalClientId = client_id;
         if (!client_id) {
            const [clientInsert] = await conn.query(
               `INSERT INTO clients (client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email)
           VALUES (?, ?, ?, ?, ?, ?)`,
               [
                  clientData.b_client_name,
                  clientData.b_client_ref_no,
                  clientData.b_client_contact,
                  clientData.b_client_alt_contact,
                  clientData.b_client_address,
                  clientData.b_client_email,
               ]
            );
            finalClientId = clientInsert.insertId;
         }

         //  Insert into projects
         await conn.query(
            `INSERT INTO projects (pro_client_r_id, pro_name, pro_ref_no, pro_housetype, pro_rcctype, pro_sitedesc, pro_duration, pro_totalcost, pro_advancepayment, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [
               finalClientId,
               clientData.b_client_name,
               clientData.b_client_ref_no,
               clientData.b_client_housetype,
               clientData.b_client_rcctype,
               clientData.b_client_sitedesc,
               clientData.b_client_duration,
               clientData.b_client_totalcost,
               clientData.b_client_advancepayment,
            ]
         );

         //  Update approval time
         await conn.query(`UPDATE branch_clients SET approved_at = NOW(), b_admin_approval=1 WHERE b_client_id = ?`, [b_client_id]);

         await conn.commit();
         conn.release();

         return res.status(200).json({
            status: true,
            message: 'Client/project approved and created successfully.',
            data: { client_id: finalClientId },
         });
      } catch (err) {
         await conn.rollback();
         conn.release();
         console.error('Approval failed:', err.message);
         return res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: err.message,
         });
      }
   }
}
module.exports = BranchClientsController;
