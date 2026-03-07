
import multer from "multer";

const storage = multer.memoryStorage();

export const singleUpload = multer({ storage}).single("file");
// or diskStorage if you want to save to disk

