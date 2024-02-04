import connectToMongo from "./mongodb/dbConnect.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
};

export default connectToDb;
