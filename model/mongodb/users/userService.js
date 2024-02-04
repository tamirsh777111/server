import User from "./User.js";

const createUser = (userData) => {
  //save user in mongoose
  let user = new User(userData);
  return user.save();
};

//read
const getAllUsers = () => {
  return User.find({});
};

//read
const getUserById = (id) => {
  return User.findById(id);
};

//update
const updateUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};

//delete
const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
