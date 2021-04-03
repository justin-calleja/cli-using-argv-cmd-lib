import minimist, { ParsedArgs } from 'minimist';
export declare const name = "start";
export declare const fqn = "adhoc.config.watch.start";
export declare const subCmds: never[];
export declare const parseArgv: (argv: string[]) => minimist.ParsedArgs;
export declare const run: (parsedArgvLookup: {
    [fqn: string]: minimist.ParsedArgs;
}) => void;
