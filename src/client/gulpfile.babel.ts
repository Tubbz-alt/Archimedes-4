import { series } from 'gulp';
import terminalSpawn from 'terminal-spawn';

import './config/loadDotenv.ts';

import ClientCommands from './config/client-commands';

// Miscellaneous Helper Tasks

const generateGraphQlTypes = () =>
  terminalSpawn('npx babel-node scripts/generate-graph-ql-types.js').promise;

const schemaDownload = () =>
  terminalSpawn('npx babel-node scripts/download-schema.js').promise;

// Static Checking

const _checkTypes = () => terminalSpawn('npx tsc').promise;

const _esLint = () => terminalSpawn('npx eslint .').promise;

const lint = series(_esLint, _checkTypes);

const build = () => terminalSpawn('node scripts/build.js').promise;

// Building and Running

const startDevelopment = () => terminalSpawn('node scripts/start.js').promise;

// Storybook

const storybookBuild = () => terminalSpawn('npx build-storybook').promise;

const storybookStart = () =>
  terminalSpawn(ClientCommands.startStorybook).promise;

// Cypress

const _cypressRunStorybookCommands = (updateSnapshots?: boolean) => [
  `npx cypress run \
      --config "integrationFolder=cypress/integration/storybook" \
      --spec "cypress/integration/storybook/atoms/**/*" \
      ${updateSnapshots ? '--env "updateSnapshots=true"' : ''} \
     `,
  `npx cypress run \
      --config "integrationFolder=cypress/integration/storybook" \
      --spec "cypress/integration/storybook/molecules/**/*" \
      ${updateSnapshots ? '--env "updateSnapshots=true"' : ''} \
     `,
  `npx cypress run \
      --config "integrationFolder=cypress/integration/storybook" \
      --spec "cypress/integration/storybook/*" \
      ${updateSnapshots ? '--env "updateSnapshots=true"' : ''} \
     `,
];

const cypressStorybookOpen = () =>
  terminalSpawn(
    'npx cypress open --config "integrationFolder=cypress/integration/storybook"',
  ).promise;

const cypressStorybookRun = () =>
  terminalSpawn(_cypressRunStorybookCommands()).promise;

const cypressStorybookUpdateSnapshots = () =>
  terminalSpawn(_cypressRunStorybookCommands(true)).promise;

const cypressStorybookOpenUpdateSnapshots = () =>
  terminalSpawn(
    `npx cypress open \
      --config "integrationFolder=cypress/integration/storybook" \
      --env "updateSnapshots=true" \
     `,
  ).promise;

const cypressE2eOpen = () =>
  terminalSpawn(
    'npx cypress open --config "integrationFolder=cypress/integration/end-to-end"',
  ).promise;

const cypressE2eRun = () =>
  terminalSpawn(
    'npx cypress run --config "integrationFolder=cypress/integration/end-to-end"',
  ).promise;

// Testing

const test = () => terminalSpawn('node scripts/test.js').promise;

const testWatch = () => terminalSpawn('node scripts/test.js --watch').promise;

const preCommit = series(build, lint, test);

export {
  preCommit,
  test,
  testWatch,
  cypressE2eRun,
  cypressE2eOpen,
  cypressStorybookRun,
  cypressStorybookUpdateSnapshots,
  cypressStorybookOpenUpdateSnapshots,
  cypressStorybookOpen,
  storybookStart,
  startDevelopment,
  storybookBuild,
  lint,
  schemaDownload,
  generateGraphQlTypes,
  build,
};

export default startDevelopment;
