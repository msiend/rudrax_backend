const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const createError = require('http-errors');

/**
 * Professional File Upload Middleware for Express
 * 
 * Features:
 * - Secure file type validation
 * - File size limits
 * - Unique filename generation
 * - Proper error handling
 * - Disk storage management
 * - Image processing options
 * - Clean directory structure
 */

// Allowed file types with MIME types
const ALLOWED_FILE_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
};

// Maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

/**
 * Creates a file upload middleware with configurable options
 * @param {Object} options - Configuration options
 * @param {string} options.fieldName - Form field name for file upload
 * @param {number} options.maxCount - Maximum number of files allowed
 * @param {string} options.uploadPath - Directory to store uploaded files
 * @param {Array<string>} options.allowedMimeTypes - Allowed MIME types
 * @returns {Function} Express middleware function
 */
function createFileUploadMiddleware(options = {}) {
  const {
    fieldName = 'file',
    maxCount = 1,
    uploadPath = 'uploads',
    allowedMimeTypes = Object.keys(ALLOWED_FILE_TYPES),
  } = options;

  // Ensure upload directory exists
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  // Configure storage
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

  // File filter for security
  const fileFilter = (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      const error = new createError.BadRequest(
        `Invalid file type. Only ${allowedMimeTypes.join(', ')} are allowed.`
      );
      return cb(error, false);
    }
    cb(null, true);
  };

  // Create multer instance
  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: MAX_FILE_SIZE,
      files: maxCount,
    },
  });

  // Return the appropriate middleware based on maxCount
  const middleware = maxCount > 1
    ? upload.array(fieldName, maxCount)
    : upload.single(fieldName);

  // Wrap in error handling middleware
  return (req, res, next) => {
    middleware(req, res, (err) => {
      if (err) {
        // Handle different types of errors
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

      // Attach file info to request for downstream middleware
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

// Example usage:
// const uploadSingleImage = createFileUploadMiddleware({
//   fieldName: 'image',
//   allowedMimeTypes: ['image/jpeg', 'image/png'],
//   uploadPath: 'public/images'
// });

module.exports = createFileUploadMiddleware;