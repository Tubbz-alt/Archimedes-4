/* eslint-disable import/first */
process.env.BABEL_ENV = 'node';

import terminalSpawn from 'terminal-spawn';

(async () => {
  await terminalSpawn(`npx apollo codegen:generate \
  --localSchemaFile=schema.json --target=typescript \
  --includes=src/**/queries/*.ts --tagName=gql --addTypename \
  --globalTypesFile=src/config/types/graphql-global-types.ts \
  types`).promise
})();

// --includes=src/**/queries/*.ts --tagName=gql --addTypename \
