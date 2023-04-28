const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "user not authenticated or token expired,Re-login"
        })
    }
    jwt.verify(token, "secretKey", (err, user) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "user not authenticated or token expired,Re-login"
            })
        }
        req.user = user
        next();
    })
}


const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "user not allowed for this action"
            })
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "user not allowed for this action"
            })
        }
    })
}

module.exports = { verifyToken, verifyUser,verifyAdmin };