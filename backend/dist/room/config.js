"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
exports.multerOptions = {
    limits: {
        fileSize: +process.env.ROOMS_MAX_FILE_SIZE,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            cb(null, true);
        }
        else {
            cb(new common_1.HttpException(`Unsupported file type ${path_1.extname(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: multer_1.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = process.env.ROOMS_UPLOAD_LOCATION;
            if (!fs_1.existsSync(uploadPath)) {
                fs_1.mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, `${uuid_1.v4()}${path_1.extname(file.originalname)}`);
        },
    }),
};
//# sourceMappingURL=config.js.map