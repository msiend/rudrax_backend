const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(__dirname, 'logs', 'req_logs.log'),
      dirname: 'logs',
    }),
  ],
});
const requestLogger = (req, res, next) => {
  const { method, url, headers, body } = req;
  logger.info({
    message: 'Incoming request',
    method,
    url,
    timestamp: new Date().toISOString(),
    body,
    headers,
  });

  next();
};

module.exports = requestLogger;
