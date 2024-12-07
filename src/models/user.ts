import { ObjectId } from "mongodb";

type UserModel = {
  _id?: ObjectId;
  email: string;
  password: string;
  name: string;
  image?: string;
  createdAt: Date;
};

export default UserModel;
