import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Application configuration interface
interface AppConfig {
    port: number;
    dbURI: string;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
}

// Configuration object
const appConfig: AppConfig = {
    port: Number(process.env.PORT) || 3000,
    dbURI: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
    logLevel: (process.env.LOG_LEVEL as 'debug' | 'info' | 'warn' | 'error') || 'info',
};

// Export the configuration for use in the application
export default appConfig;
