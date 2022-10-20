//session router
const express = require('express')
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();


//POST /api/session
router.post(
    '/',
    async (req, res, next) => {
      const { credential, password } = req.body;
  
      const user = await User.login({ credential, password });
  
      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }
  );

// Log out
//DELETE /api/session ogout route will remove the token cookie from the response and return a JSON success message.
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );























module.exports = router;