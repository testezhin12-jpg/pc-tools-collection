import fs from 'fs';
import path from 'path';

interface Config {
    host: string;
    port: number;
    useHttps: boolean;
}

const defaultConfig: Config = {
    host: 'localhost',
    port: 3000,
    useHttps: false,
};

function loadConfig(filePath: string): Config {
    const configPath = path.resolve(filePath);
    if (fs.existsSync(configPath)) {
        const fileConfig: Partial<Config> = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        return { ...defaultConfig, ...fileConfig };
    }
    return defaultConfig;
}

export { loadConfig, Config };