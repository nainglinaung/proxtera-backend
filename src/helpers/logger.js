const { createLogger, format, transports,addColors } = require('winston');
const { combine, timestamp, label, printf,errors } = format;


const myFormat = printf(({ level, message, timestamp }) => {
  return `{"timestamp":${timestamp}, "message":${message}, "level":${level} }`;
});

export default createLogger({
  format: combine(
    format.colorize(),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});