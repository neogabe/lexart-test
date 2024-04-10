import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const createUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  return User.create({
    username,
    email,
    password: hashedPassword,
  });
};

export const findUserByEmail = async (email) => {
  return User.findOne({ where: { email: email } });
};
