import chalk from 'chalk';
import minimist, { ParsedArgs } from 'minimist';
import buildOptions from 'minimist-options';

export const name = 'start';

export const fqn = 'adhoc.server.start';

export const subCmds = [];

export const parseArgv = (argv: string[]) =>
  minimist(
    argv,
    buildOptions({
      help: {
        type: 'boolean',
        alias: 'h',
        default: false,
      },
      restart: {
        type: 'boolean',
        alias: 'r',
        default: false,
      },
      port: {
        type: 'number',
        alias: 'p',
        default: 9000,
      },
    }),
  );

export const run = (parsedArgvLookup: { [fqn: string]: ParsedArgs }) => {
  console.log(`Running ${fqn}...`);
};
