import fs from 'fs';
import path from 'path';

interface ConfigOptions {
    [key: string]: any;
}

const defaultConfig: ConfigOptions = {
    host: 'localhost',
    port: 3000,
    debug: false,
};

/**
 * Loads configuration from a JSON file or uses default configuration.
 * @param filePath - path to the configuration file
 * @returns Merged configuration object
 */
export function loadConfig(filePath: string): ConfigOptions {
    const fullPath = path.resolve(filePath);
    let fileConfig: ConfigOptions;
    
    try {
        const rawConfig = fs.readFileSync(fullPath, 'utf-8');
        fileConfig = JSON.parse(rawConfig);
    } catch (error) {
        console.warn('Could not load config file, using defaults.', error);
        fileConfig = {};
    }
    
    return { ...defaultConfig, ...fileConfig };
}