type Config = { [key: string]: any };

const defaultConfig: Config = {
    host: 'localhost',
    port: 3000,
    useHttps: false,
    timeout: 5000
};

function loadConfig(customConfig: Config): Config {
    return { ...defaultConfig, ...customConfig };
}

export { loadConfig, defaultConfig, Config };