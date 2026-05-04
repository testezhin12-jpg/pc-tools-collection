import { createLogger, format, transports } from 'winston';
import { RotationStream } from 'rotating-file-stream';

const logDirectory = 'log';  // Ensure this directory exists

const rotatingStream = RotationStream('log-%DATE%.log', {
    date_format: 'YYYY-MM-DD',
    frequency: 'daily',
    verbose: false,
    path: logDirectory,
});

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.Stream({ stream: rotatingStream })
    ],
});

export const logInfo = (message: string) => {
    logger.info(message);
};

export const logError = (message: string) => {
    logger.error(message);
};

export const logDebug = (message: string) => {
    logger.debug(message);
};
