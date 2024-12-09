import config from "../utils/config";
if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined");
}
const apiKey = process.env.API_KEY || config.apiKey;
function secure(req, res, next) {
    if (req.headers["x-api-key"] !== apiKey) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    next();
}
export default secure;
//# sourceMappingURL=secure.js.map