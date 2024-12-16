//Hello, this is a Controller for materialReq!


const { materialReq } = require('@/models/featureModels/')

 exports.create = async (req, res) => {
    try {
        const {
            projectId,
            superViserId
        } = req.body

        // const { error } = schema.validate({ clientName, clientRef, clientContact, clientAltContact, clientAddress, clientEmail });
        // if (error) {
        //     return res.status(400).json({
        //         err: error,
        //         status: false,
        //         msg: error.message
        //     })
        // }

        const result = await materialReq.create(
            "material_requests",
            ['mr_project_r_id', 'mr_sup_r_id'],
            [projectId, superViserId]
        )

        if (!result.status) {
            return res.status(500).json({
                status: false,
                msg: 'Something Went Wrong!',
                errMsg: result?.errMsg
            })
        }

        return res.status(200).json({ status: true, msg: "Request created Successfully!" })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            errMsg: error.message,
            error: error,
            msg: 'Something Went Wrong!'
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        const {from, to} =  req.query
        const { data, status } = await project.findAll(from, to)

        if (status) {
            return res.status(200).json({
                status: true,
                msg: 'Sucessfully retrived data!',
                data: data
            })
        }

        return res.status(500).json({
            status: false,
            errMsg: error.message,
            error: error,
            msg: 'Error in fetching data!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            errMsg: error.message,
            error: error,
            msg: 'Error in fetching data!'
        })
    }
}


