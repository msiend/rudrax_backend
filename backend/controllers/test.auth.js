const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const mysql = require('mysql2/promise');



const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ message: 'Username and password are required.' });

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [user]);
    if (rows.length === 0) return res.sendStatus(401); // Unauthorized

    const foundUser = rows[0];

    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
      const [roleRows] = await pool.execute('SELECT role FROM user_roles WHERE user_id = ?', [foundUser.id]);
      const roles = roleRows.map((row) => row.role);

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      );

      const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
      );

      await pool.execute('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, foundUser.id]);

      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, 
      });
      res.json({ accessToken });
    } else {
      res.sendStatus(401); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleLogin };
