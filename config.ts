import fs from 'fs';
import path from 'path';
import winston from 'winston';
import { format } from 'winston';

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const transport = new winston.transports.File({
    filename: path.join(logDirectory, 'app.log'),
    maxSize: '20m',
    maxFiles: '10',
});

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [transport],
});

export default logger;