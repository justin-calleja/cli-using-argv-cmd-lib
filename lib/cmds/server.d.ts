import minimist, { ParsedArgs } from 'minimist';
import * as serverStartCmd from './serverStart';
import * as serverStopCmd from './serverStop';
export declare const name = "server";
export declare const fqn = "adhoc.server";
export declare const subCmds: (typeof serverStartCmd | typeof serverStopCmd)[];
export declare const parseArgv: (argv: string[]) => minimist.ParsedArgs;
export declare const run: (parsedArgvLookup: {
    [fqn: string]: minimist.ParsedArgs;
}) => void;
