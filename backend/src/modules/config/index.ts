import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  directory: path.resolve(__dirname, "..", "..", "..", "uploads"),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "..", "uploads"));
    },
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString("hex");
      let imageFilename = file.originalname.replace(/[\n\r\s\t]+/g, "-");
      const fileName = `${hash}-${imageFilename}`;

      callback(null, fileName);
    },
  }),
  limits: {
    fileSize: 1000 * 1024 * 1024,
  },
  fileFilter: (request: any, file: any, callback: any) => {
    const mimetypes = [
      "image/jpeg",
      "jtif",
      "image/png",
      "image/gif, image/webp",
    ];
    if (!mimetypes.includes(file.mimetypes)) {
      callback(null, true);
    } else {
      callback(new Error("This format is invalid"));
    }
  },
};
