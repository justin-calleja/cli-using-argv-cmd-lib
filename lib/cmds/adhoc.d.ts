import minimist, { ParsedArgs } from 'minimist';
import * as configCmd from './config';
import * as serverCmd from './server';
export declare const name = "adhoc";
export declare const fqn = "adhoc";
export declare const subCmds: (typeof configCmd | typeof serverCmd)[];
export declare const parseArgv: (argv: string[]) => minimist.ParsedArgs;
export declare const run: (parsedArgvLookup: {
    [fqn: string]: minimist.ParsedArgs;
}) => void;
