const _UserModel = require('@/models/coreEntityModels/usersModel');

class _UserController {
  // Create User (already provided)
  static async create(req, res) {
    const { role } = req.params;
    const { r_id, email, password, ...userInfo } = req.body;
    
    try {
      const result = await _UserModel.create(role, { r_id, email, password, ...userInfo });
      res.status(201).json({ 
        status: true, 
        message: 'User created successfully', 
        data: result 
      });
    } catch (error) {
      console.error('Create Error:', error);
      res.status(500).json({ 
        status: false, 
        message: 'Failed to create user',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get All Users (already provided)
  static async findAll(req, res) {
    const { role } = req.params;
    try {
      const data = await _UserModel.findAll(role);
      res.status(200).json({ 
        status: true, 
        message: 'Users fetched successfully', 
        data 
      });
    } catch (error) {
      console.error('FindAll Error:', error);
      res.status(500).json({ 
        status: false, 
        message: 'Error fetching users',
        error:  error.message 
      });
    }
  }

  // Get Single User
  static async findOne(req, res) {
    const { role, id } = req.params;
    try {
      const data = await _UserModel.findOne(role, id);
      if (!data) {
        return res.status(404).json({
          status: false,
          message: 'User not found',
          data: null
        });
      }
      res.status(200).json({
        status: true,
        message: 'User fetched successfully',
        data
      });
    } catch (error) {
      console.error('FindOne Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error fetching user',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Update User
  static async update(req, res) {
    const { role, id } = req.params;
    const updates = req.body;
    
    try {
      // Remove sensitive fields that shouldn't be updated here
      delete updates.password;
      delete updates.r_id;

      const success = await _UserModel.update(role, id, updates);
      res.status(200).json({
        status: success,
        message: success ? 'User updated successfully' : 'User not found or no changes made',
        data: null
      });
    } catch (error) {
      console.error('Update Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error updating user',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Update Password
  static async updatePassword(req, res) {
    const { role, id } = req.params;
    const { password } = req.body;
    
    try {
      const success = await _UserModel.updatePassword(role, id, password);
      res.status(200).json({
        status: success,
        message: success ? 'Password updated successfully' : 'Failed to update password',
        data: null
      });
    } catch (error) {
      console.error('Password Update Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error updating password',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Toggle User Status
  static async toggleStatus(req, res) {
    const { role, id } = req.params;
    const { status } = req.body;
    
    try {
      const success = await _UserModel.toggleStatus(role, id, status);
      res.status(200).json({
        status: success,
        message: success 
          ? `User ${status ? 'activated' : 'deactivated'} successfully`
          : 'Failed to update user status',
        data: null
      });
    } catch (error) {
      console.error('Toggle Status Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error updating user status',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Delete User
  static async remove(req, res) {
    const { role, id } = req.params;
    
    try {
      const success = await _UserModel.remove(role, id);
      res.status(200).json({
        status: success,
        message: success ? 'User deleted successfully' : 'User not found',
        data: null
      });
    } catch (error) {
      console.error('Remove Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error deleting user',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get User Profile (combines auth and info)
  static async getProfile(req, res) {
    const { role, id } = req.params;
    
    try {
      const data = await _UserModel.findOne(role, id);
      if (!data) {
        return res.status(404).json({
          status: false,
          message: 'User not found',
          data: null
        });
      }
      
      // Remove sensitive data before sending
      const { password, token, ...profileData } = data;
      res.status(200).json({
        status: true,
        message: 'Profile fetched successfully',
        data: profileData
      });
    } catch (error) {
      console.error('Profile Error:', error);
      res.status(500).json({
        status: false,
        message: 'Error fetching profile',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

module.exports = _UserController;

