import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@socialmedia.jjlg3jc.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
};
export default connection;
