require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {


    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];

        // kiểm tra token truyền lên có đúng ko
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET,)
            console.log("check token>>>>", decoded);
            next();
        } catch (error) {
            return res.status(401).json({
                message: "token het han/ko hop le"
            })
        }
    } else {
        return res.status(401).json({
            message: "ban chua truyen access_token"
        })
    }

}

module.exports = auth;