const superAdminModel = require('@/models/authModels/superadmin')


exports.create = async (req, res)=> {
    const result = await superAdminModel.create()
    return res.status(200).json(result)
}