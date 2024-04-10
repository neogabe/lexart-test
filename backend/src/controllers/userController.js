import * as userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await userService.findUserByEmail(email);

    if (userExists) {
      return res.status(409).send({ message: 'Email already used' });
    }

    const user = await userService.createUser({ username, email, password });
    return res
      .status(201)
      .send({ message: 'User registered successfully', userId: user.id });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'});

    return res.status(200).send({ message: 'Login successful.', token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}