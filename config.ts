import fs from 'fs';

interface Config {
    host: string;
    port: number;
    useSSL: boolean;
}

const defaultConfig: Config = {
    host: 'localhost',
    port: 3000,
    useSSL: false,
};

function loadConfig(filePath: string): Config {
    try {
        const rawData = fs.readFileSync(filePath, 'utf8');
        const userConfig: Partial<Config> = JSON.parse(rawData);
        return { ...defaultConfig, ...userConfig };
    } catch (error) {
        console.error('Error loading configuration:', error);
        return defaultConfig;
    }
}

export { Config, loadConfig };