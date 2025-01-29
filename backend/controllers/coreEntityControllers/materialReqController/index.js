//Hello, this is a Controller for materialReq!


const { materialReq } = require('@/models/coreEntityModels')

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
            {
              mr_project_r_id: projectId,
              mr_sup_r_id: superViserId  
            }
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
        const reqQuery = {
            orderBy: 'mr_id',
            limits: [parseInt(from), parseInt(to)]
        }

        const { data, status, error } = await materialReq.findAll(reqQuery);

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

exports.findOne = async (req, res) => {
    try {
        const reqQuery = {
            mh_approval: 0
        }

        const { data, status, error } = await materialReq.findOne(reqQuery);

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


exports.update = async (req, res) => {
    try {
        const setQuery = {
            mh_approval: 1
        }

        const conditionQuery = {
            mr_id: 2
        }

        const { data, status, error } = await materialReq.update(setQuery, conditionQuery);

        if (status) {
            return res.status(200).json({
                status: true,
                msg: 'status updated successfully!',
                data: data
            })
        }

        return res.status(500).json({
            status: false,
            errMsg: error.message,
            error: error,
            msg: 'Error in update data!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            errMsg: error.message,
            error: error,
            msg: 'Error in update data!'
        })
    }
}


