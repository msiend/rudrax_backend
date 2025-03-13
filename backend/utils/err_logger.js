const { createLogger, transports, format } = require('winston');

const err_logger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message} - Stack: ${stack}`;
    })
  ),
  transports: [new transports.Console(), new transports.File({ filename: '@/src/error_logs/error.log' })],
});

module.exports = err_logger;
