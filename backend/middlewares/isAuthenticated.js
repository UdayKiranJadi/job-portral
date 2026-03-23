import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    console.log("AUTH HEADER:", req.headers.authorization);
    console.log("SECRET KEY EXISTS:", !!process.env.SECRET_KEY);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "User Not authenticated",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("TOKEN FROM HEADER:", token);

    if (!token) {
      return res.status(401).json({
        message: "User Not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("DECODE:", decode);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.log("Auth middleware error:", error);
    return res.status(401).json({
      message: "Unauthorized",
      success: false,
    });
  }
};

export default isAuthenticated;