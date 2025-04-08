const { createLogger, transports, format } = require('winston');
const path = require('path');
const { inspect } = require('util');
// const DailyRotateFile = require('winston-daily-rotate-file');



const logDirectory = path.join(__dirname, '../src/logs/error_logs');
const err_logger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }), 
    format.splat(), 
    format.printf(({ timestamp, level, message, stack, ...metadata }) => {
      let msg = `${timestamp} [${level.toUpperCase()}] ${message}`;
      if (stack) {
        msg += `\n${stack}`;
      }
            if (Object.keys(metadata).length > 0) {
        msg += `\n${inspect(metadata, { depth: null, colors: false })}`;
      }
      return msg;
    })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, stack }) => {
          return `${timestamp} [${level}]: ${message}${stack ? `\n${stack}` : ''}`;
        })
      )
    }),
    new transports.File({ 
      filename: path.join(logDirectory, 'error.log'),
      maxsize: 5242880, // 5mB
      maxFiles: 5,
      tailable: true,
      zippedArchive: true
    }),
    // new DailyRotateFile({
    //   filename: path.join(logDirectory, 'error-%DATE%.log'),
    //   datePattern: 'YYYY-MM-DD',
    //   zippedArchive: true,
    //   maxSize: '20m',
    //   maxFiles: '30d'
    // }),
  ],
  exceptionHandlers: [
    new transports.File({ 
      filename: path.join(logDirectory, 'exceptions.log')
    })
  ],
  rejectionHandlers: [
    new transports.File({
      filename: path.join(logDirectory, 'rejections.log')
    })
  ]
});
process.on('unhandledRejection', (reason) => {
  throw reason; 
});

module.exports = err_logger;


// const { createLogger, transports, format } = require('winston');

// const err_logger = createLogger({
//   level: 'error',
//   format: format.combine(
//     format.timestamp(),
//     format.printf(({ timestamp, level, message, stack }) => {
//       return `${timestamp} [${level.toUpperCase()}]: ${message} - Stack: ${stack}`;
//     })
//   ),
//   transports: [new transports.Console(), new transports.File({ filename: '@/src/logs/error.log' })],
// });

// module.exports = err_logger;