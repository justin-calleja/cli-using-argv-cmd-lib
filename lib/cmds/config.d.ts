import minimist, { ParsedArgs } from 'minimist';
import * as configWatchCmd from './configWatch';
export declare const name = "config";
export declare const fqn = "adhoc.config";
export declare const subCmds: (typeof configWatchCmd)[];
export declare const parseArgv: (argv: string[]) => minimist.ParsedArgs;
export declare const run: (parsedArgvLookup: {
    [fqn: string]: minimist.ParsedArgs;
}) => void;
