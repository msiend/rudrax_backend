// Hello, this is a Controller for client!

const { client } = require('@/models/entityModels/')

exports.create = async (req, res) => {
    try {
        const {
            clientName,
            clientRef,
            clientContact,
            clientAltContact,
            clientAddress,
            clientEmail
        } = req.body

        // const { error } = schema.validate({ clientName, clientRef, clientContact, clientAltContact, clientAddress, clientEmail });
        // if (error) {
        //     return res.status(400).json({
        //         err: error,
        //         status: false,
        //         msg: error.message
        //     })
        // }

        const result = await client.create(
            clientName,
            clientRef,
            clientContact,
            clientAltContact,
            clientAddress,
            clientEmail
        )

        if (!result.status) {
            return res.status(500).json({
                status: false,
                msg: 'Something Went Wrong!',
                errMsg: result?.errMsg
            })
        }

        return res.status(200).json({ status: true, msg: "Inserted Successfully!" })
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
        const { data, status } = await client.findAll()

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
