import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    console.log("AUTH HEADER:", req.headers.authorization);
    console.log("SECRET EXISTS:", !!process.env.SECRET_KEY);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "User Not authenticated",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("TOKEN:", token);

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("DECODE:", decode);

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