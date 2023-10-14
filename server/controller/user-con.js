import User from "../schema/user-schema.js";
export const addUser = async (req, res) => {
  const user = req.body;
  const newuser = new User(user);

  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    res.status(409).json(error);
  }

}

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);

  } catch (error) {
    res.status(404).json(error);

  }
}

export const getUser = async (req, res) => {
  try {
    // const user=await User.find({_id:req.params.id});
    const user = await User.findById(req.params.id);
    res.status(200).json(user);

  } catch (error) {
    res.status(404).json(error);

  }
}

export const editUser = async (request, response) => {
  let user = request.body;

  const editUser = new User(user);
  try {
    await User.updateOne({
      _id: request.params.id
    }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({
      message: error.message
    });
  }
}

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({
      _id: request.params.id
    });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({
      message: error.message
    });
  }
}