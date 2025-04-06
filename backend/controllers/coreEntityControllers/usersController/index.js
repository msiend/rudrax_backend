const _UserModel = require('@/models/_UserModel');

class _UserController  {
  static async create(req, res) {
    const { role, r_id, email, password } = req.body;
    try {
      const result = await _UserModel.create(role, { r_id, email, password });
      res.status(201).send({ status: true, msg: 'User created successfully', data: result });
    } catch (error) {
      console.error('Create Error:', error);
      res.status(500).send({ status: false, msg: 'Failed to create user', data: null });
    }
  }

  static async findAll(req, res) {
    const { role } = req.query;
    try {
      const data = await _UserModel.findAll(role);
      res.status(200).send({ status: true, msg: 'All users fetched', data });
    } catch (error) {
      console.error('FindAll Error:', error);
      res.status(500).send({ status: false, msg: 'Error fetching users', data: null });
    }
  }

  static async findOne(req, res) {
    const { role, id } = req.params;
    try {
      const data = await _UserModel.findOne(role, id);
      res.status(200).send({ status: true, msg: 'User fetched', data });
    } catch (error) {
      console.error('FindOne Error:', error);
      res.status(500).send({ status: false, msg: 'Error fetching user', data: null });
    }
  }

  static async update(req, res) {
    const { role, id } = req.params;
    const { email } = req.body;
    try {
      const success = await _UserModel.update(role, id, { email });
      res.status(200).send({
        status: success,
        msg: success ? 'User updated successfully' : 'User not found or not updated',
        data: null,
      });
    } catch (error) {
      console.error('Update Error:', error);
      res.status(500).send({ status: false, msg: 'Error updating user', data: null });
    }
  }

  static async updatePassword(req, res) {
    const { role, id } = req.params;
    const { password } = req.body;
    try {
      const success = await _UserModel.updatePassword(role, id, password);
      res.status(200).send({
        status: success,
        msg: success ? 'Password updated' : 'Failed to update password',
        data: null,
      });
    } catch (error) {
      console.error('Password Update Error:', error);
      res.status(500).send({ status: false, msg: 'Error updating password', data: null });
    }
  }

  static async toggleStatus(req, res) {
    const { role, id } = req.params;
    const { status } = req.body; // pass 0 or 1
    try {
      const success = await _UserModel.toggleStatus(role, id, status);
      res.status(200).send({
        status: success,
        msg: success ? `User ${status ? 'activated' : 'deactivated'}` : 'Failed to update status',
        data: null,
      });
    } catch (error) {
      console.error('Toggle Status Error:', error);
      res.status(500).send({ status: false, msg: 'Error updating user status', data: null });
    }
  }

  static async remove(req, res) {
    const { role, id } = req.params;
    try {
      const success = await _UserModel.remove(role, id);
      res.status(200).send({
        status: success,
        msg: success ? 'User deleted successfully' : 'User not found',
        data: null,
      });
    } catch (error) {
      console.error('Remove Error:', error);
      res.status(500).send({ status: false, msg: 'Error deleting user', data: null });
    }
  }
};

module.exports = _UserController;
