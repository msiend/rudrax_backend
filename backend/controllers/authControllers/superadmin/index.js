const Joi = require('joi');
const bcrypt = require('bcryptjs');
const superAdminModel = require('@/models/authModels/superadmin');

exports.create = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    contact: Joi.string().min(10).max(13).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    cpassword: Joi.string().valid(Joi.ref('password')).required().messages({
      'any.only': 'Confirm Password must match Password!',
      'any.required': 'Confirm Password is required!',
    }),
  });

  try {
    const { name, email, contact, password, cpassword } = req.body;
    const { error } = schema.validate({ name, email, contact, password, cpassword });
    if (error) {
      return res.status(400).json({
        err: error,
        status: false,
        msg: error.message,
      });
    }
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    const result = await superAdminModel.create(name, email, contact, hash);

    if (!result.status) {
      return res.status(500).json({
        status: false,
        msg: 'Something Went Wrong!',
      });
    }

    return res.status(200).json({ status: true, msg: 'Inserted Successfully!' });
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      status: false,
      errMsg: err.message,
      error: error,
      msg: 'Something Went Wrong!',
    });
  }
};
