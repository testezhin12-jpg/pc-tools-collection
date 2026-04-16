# pc-tools-collection

A curated collection of TypeScript utilities designed to streamline common tasks in both development and operations. This project provides a modular suite of tools that can enhance productivity in various environments.

## Features

- **Type-Safe Util Functions**: A set of reusable utilities enabling type-safe operations, including string manipulation, array handling, and file I/O.
- **Configurable Logging**: An advanced logging utility that allows customizable log levels and output formats to suit different environments and needs.
- **Environment Config Management**: Simplifies the management of environment configurations by providing a structured approach to handling environment variables.
- **CLI Tool Integration**: Seamless integration with Command Line Interface tools for invoking utilities directly from the terminal, improving the developer experience.

## Installation

To install the `pc-tools-collection`, you will need Node.js and npm installed on your system. Then, you can install the package using:

```bash
npm install pc-tools-collection
```

Alternatively, you can clone the repository directly:

```bash
git clone https://github.com/YourUsername/pc-tools-collection.git
cd pc-tools-collection
npm install
```

## Basic Usage Example

After installation, you can start using the utilities as shown below:

```typescript
import { Logger, ConfigManager } from 'pc-tools-collection';

// Initialize the logger
const logger = new Logger({ level: 'info' });
logger.log('This is an info message.');

// Load environment configurations
const config = new ConfigManager();
const apiEndpoint = config.get('API_ENDPOINT');
console.log(`Using API endpoint: ${apiEndpoint}`);
```

## License
![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

This project is licensed under the MIT License. See the LICENSE file for details.