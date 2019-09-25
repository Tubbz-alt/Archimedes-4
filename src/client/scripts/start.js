/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
  throw error;
});

// Ensure environment variables are read.
require('../config/env');


const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const {
  checkBrowsers,
} = require('react-dev-utils/browsersHelper');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpack-dev-server.config');

const isInteractive = process.stdout.isTTY;
const errorExitCode = 1;
// this was added in `react-dev-utils` 8.0
// disabling for now, but we may want to enable it later
const useTypeScript = false;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(errorExitCode);
}

// Tools like Cloud9 rely on this.
const fallbackPort = 5000;
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || fallbackPort;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST),
      )}`,
    ),
  );
  console.log(
    'If this was unintentional, check that you haven\'t mistakenly set it in your shell.',
  );
  console.log(
    `Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`,
  );
  console.log();
}

// We require that you explicitly set browsers and do not fall back to
// browserslist defaults.

checkBrowsers(paths.appPath, isInteractive)
  .then(() => (
    // We attempt to use the default port but if it is busy, we offer the user to
    // run on a different port. `choosePort()` Promise resolves to the next free port.
    choosePort(HOST, DEFAULT_PORT)
  ))
  .then((port) => {
    if (port == null) {
      // We have not found a port.
      return;
    }
    const config = configFactory('development');
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler({
      appName,
      config,
      urls,
      useTypeScript,
      webpack,
    });
    // Load proxy config
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
    // Serve webpack assets generated by the compiler over a web server.
    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig,
    );
    const developmentServer = new WebpackDevServer(compiler, serverConfig);
    // Launch WebpackDevServer.
    developmentServer.listen(port, HOST, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log(chalk.cyan('Starting the development server...\n'));
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        developmentServer.close();
        process.exit();
      });
    });
  })
  .catch((error) => {
    if (error && error.message) {
      console.log(error.message);
    }
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(errorExitCode);
  });
