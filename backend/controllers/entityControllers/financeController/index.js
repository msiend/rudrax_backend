//Hello, this is a Controller for finance!

const {finance} = require('@/models/coreEntityModels/')

exports.create = async (req, res) => {
    try {  
        const {
            fdName,
            fdContact,
            fdAltContact,
            fdAddress,
            fdEmail
        } = req.body

        // const { error } = schema.validate({ financeName, clientRef, clientContact, clientAltContact, clientAddress, clientEmail });
        // if (error) {
        //     return res.status(400).json({
        //         err: error,
        //         status: false,
        //         msg: error.message
        //     })
        // }

        const result = await finance.create(
            fdName,
            fdContact,
            fdAltContact,
            fdAddress,
            fdEmail
        )

        if (!result.status) {
            return res.status(500).json({
                status: false,
                msg: 'Something Went Wrong!',
                errMsg: result?.errMsg
            })
        }

        return res.status(200).json({ status: true, msg: "New finance staff added Successfully!" })
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
