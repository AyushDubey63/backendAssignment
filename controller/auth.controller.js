import { User } from "../model/Auth.js";

export const registerUser = async (req, res) => {
  const data  = new User(req.body)
  try {
    await data.save();
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
  }
}

export const loginUser = async(req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({
    username
  })
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  if (user && user.password === password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }

}