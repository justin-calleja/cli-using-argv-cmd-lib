import minimist, { ParsedArgs } from 'minimist';
import * as configWatchStartCmd from './configWatchStart';
export declare const name = "watch";
export declare const fqn = "adhoc.config.watch";
export declare const subCmds: (typeof configWatchStartCmd)[];
export declare const parseArgv: (argv: string[]) => minimist.ParsedArgs;
export declare const run: (parsedArgvLookup: {
    [fqn: string]: minimist.ParsedArgs;
}) => void;
