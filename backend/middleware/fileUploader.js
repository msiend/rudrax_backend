const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const createError = require('http-errors');

const ALLOWED_FILE_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; //(5mb)

function createFileUploadMiddleware(options = {}) {
  const {
    fieldName = 'file',
    maxCount = 1,
    uploadPath = 'uploads',
    allowedMimeTypes = Object.keys(ALLOWED_FILE_TYPES),
  } = options;

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const ext = ALLOWED_FILE_TYPES[file.mimetype] || path.extname(file.originalname).slice(1);
      const uniqueSuffix = `${uuidv4()}-${Date.now()}`;
      cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
    },
  });
  const fileFilter = (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      const error = new createError.BadRequest(
        `Invalid file type. Only ${allowedMimeTypes.join(', ')} are allowed.`
      );
      return cb(error, false);
    }
    cb(null, true);
  };
  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: MAX_FILE_SIZE,
      files: maxCount,
    },
  });

  const middleware = maxCount > 1
    ? upload.array(fieldName, maxCount)
    : upload.single(fieldName);
  return (req, res, next) => {
    middleware(req, res, (err) => {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return next(new createError.PayloadTooLarge(`File size exceeds the limit of ${MAX_FILE_SIZE / 1024 / 1024}MB`));
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return next(new createError.BadRequest(`Maximum ${maxCount} file(s) allowed`));
        }
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          return next(new createError.BadRequest(`Unexpected field: ${err.field}`));
        }
        return next(err);
      }
      if (req.file) {
        req.file.url = `${req.protocol}://${req.get('host')}/${uploadPath}/${req.file.filename}`;
      }
      if (req.files) {
        req.files.forEach(file => {
          file.url = `${req.protocol}://${req.get('host')}/${uploadPath}/${file.filename}`;
        });
      }

      next();
    });
  };
}


// const uploadSingleImage = createFileUploadMiddleware({
//   fieldName: 'image',
//   allowedMimeTypes: ['image/jpeg', 'image/png'],
//   uploadPath: 'public/images'
// });

module.exports = createFileUploadMiddleware;