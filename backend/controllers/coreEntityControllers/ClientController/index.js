const ClientsModel = require('@/models/coreEntityModels/clientModel');

class ClientsCoreController {

  // Get Last +1 Controller clients
  static async getClientsLastRef(req, res) {
    try {
        // let pref= 'JGCOO'
      const [data] = await ClientsModel.getLastClientRef();
      let lastNum =parseInt(data['client_ref_no'].slice(-4))
      let newRef = data['client_ref_no'].replace(lastNum,lastNum+1 )
      return res.status(200).send({ status:true, msg: 'Clients Ref retrieved successfully', 
        data:{lastRefNo: data['client_ref_no'],newRefNo:newRef} });
    } catch (error) {
      console.error('Error fetching clients:', error);
      return res.status(500).send({ status:false, msg: 'Internal Server Error' });
    }
  }

}

module.exports = ClientsCoreController;
