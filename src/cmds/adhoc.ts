import chalk from 'chalk';
import minimist, { ParsedArgs } from 'minimist';
import buildOptions from 'minimist-options';
import * as configCmd from './config';
import * as serverCmd from './server';

export const name = 'adhoc';

export const fqn = name;

export const subCmds = [configCmd, serverCmd];

export const parseArgv = (argv: string[]) =>
  minimist(
    argv,
    buildOptions({
      debug: {
        type: 'boolean',
        alias: 'd',
        default: false,
      },
      help: {
        type: 'boolean',
        alias: 'h',
        default: false,
      },
      version: {
        type: 'boolean',
        alias: 'v',
        default: false,
      },
    }),
  );

export const run = (parsedArgvLookup: { [fqn: string]: ParsedArgs }) => {
  console.log(`Running ${fqn}...`);
};
