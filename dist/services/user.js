import clientPromise from "../lib/mongodb";
export default class UserService {
    static async getAllUsers() {
        const client = await clientPromise;
        const data = await client
            .db("auth")
            .collection("users")
            .find({})
            .sort({ _id: 1 })
            .toArray();
        if (!data || data.length === 0)
            return null;
        return data;
    }
}
