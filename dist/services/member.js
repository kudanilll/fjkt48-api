// import MemberModel from "@/models/member";
import clientPromise from "../lib/mongodb";
export default class MemberService {
    static async getAllMembers() {
        const client = await clientPromise;
        const data = await client
            .db("profile")
            .collection("member")
            .find({})
            .sort({ _id: 1 })
            .toArray();
        if (!data || data.length === 0)
            return null;
        return data;
    }
}
//# sourceMappingURL=member.js.map