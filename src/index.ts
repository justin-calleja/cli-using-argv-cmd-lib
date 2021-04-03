#!/usr/bin/env node

import chalk from 'chalk';
import {
  parseCmdOrThrow,
  getParsedCmdNames,
  getNamedArgvs,
} from 'argv-cmd-lib';
import * as adhocCmd from './cmds/adhoc';
import * as configCmd from './cmds/config';
import * as configWatchCmd from './cmds/configWatch';
import * as configWatchStartCmd from './cmds/configWatchStart';
import * as serverCmd from './cmds/server';
import * as serverStartCmd from './cmds/serverStart';
import * as serverStopCmd from './cmds/serverStop';

const main = () => {
  const parsedCmd = parseCmdOrThrow(adhocCmd, process.argv.slice(2));

  const fullyQualifiedCmdNameToRun = getParsedCmdNames(parsedCmd).join('.');
  const namedArgvs = getNamedArgvs(parsedCmd);
  const namedParsedArgvs = namedArgvs.map(([fqn, argv]) =>
    fqn === adhocCmd.fqn
      ? [fqn, adhocCmd.parseArgv(argv)]
      : fqn === serverCmd.fqn
      ? [fqn, serverCmd.parseArgv(argv)]
      : fqn === serverStartCmd.fqn
      ? [fqn, serverStartCmd.parseArgv(argv)]
      : fqn === serverStopCmd.fqn
      ? [fqn, serverStopCmd.parseArgv(argv)]
      : fqn === configCmd.fqn
      ? [fqn, configCmd.parseArgv(argv)]
      : fqn === configWatchCmd.fqn
      ? [fqn, configWatchCmd.parseArgv(argv)]
      : fqn === configWatchStartCmd.fqn
      ? [fqn, configWatchStartCmd.parseArgv(argv)]
      : // otherwise, don't parse argv:
        [fqn, argv],
  );

  const parsedArgvLookup = Object.fromEntries(namedParsedArgvs);

  console.log(
    chalk.blue('fullyQualifiedCmdNameToRun:'),
    fullyQualifiedCmdNameToRun,
  );
  console.log(
    chalk.blue('parsedArgvLookup:'),
    JSON.stringify(parsedArgvLookup, null, 2),
  );

  switch (fullyQualifiedCmdNameToRun) {
    case adhocCmd.fqn: {
      adhocCmd.run(parsedArgvLookup);
      break;
    }
    case serverCmd.fqn: {
      serverCmd.run(parsedArgvLookup);
      break;
    }
    case serverStartCmd.fqn: {
      serverStartCmd.run(parsedArgvLookup);
      break;
    }
    case serverStopCmd.fqn: {
      serverStopCmd.run(parsedArgvLookup);
      break;
    }
    case configCmd.fqn: {
      configCmd.run(parsedArgvLookup);
      break;
    }
    case configWatchCmd.fqn: {
      configWatchCmd.run(parsedArgvLookup);
      break;
    }
    case configWatchStartCmd.fqn: {
      configWatchStartCmd.run(parsedArgvLookup);
      break;
    }
    default: {
      throw new Error(
        `Failed to implement command with fully qualified name of: ${fullyQualifiedCmdNameToRun}`,
      );
    }
  }
};

main();
