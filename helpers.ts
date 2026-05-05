import fs from 'fs';
import path from 'path';
import winston from 'winston';
import 'winston-daily-rotate-file';

const logDir = path.join(__dirname, 'logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Configure winston to use daily rotate file transport
const transport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, 'application-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

// Create a logger instance
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        transport,
        new winston.transports.Console() // Also log to console
    ]
});

export default logger;