"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.parseArgv = exports.subCmds = exports.fqn = exports.name = void 0;
var minimist_1 = __importDefault(require("minimist"));
var minimist_options_1 = __importDefault(require("minimist-options"));
exports.name = 'start';
exports.fqn = 'adhoc.config.watch.start';
exports.subCmds = [];
var parseArgv = function (argv) {
    return minimist_1.default(argv, minimist_options_1.default({
        help: {
            type: 'boolean',
            alias: 'h',
            default: false,
        },
    }));
};
exports.parseArgv = parseArgv;
var run = function (parsedArgvLookup) {
    console.log("Running " + exports.fqn + "...");
};
exports.run = run;
