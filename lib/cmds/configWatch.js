"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.parseArgv = exports.subCmds = exports.fqn = exports.name = void 0;
var minimist_1 = __importDefault(require("minimist"));
var minimist_options_1 = __importDefault(require("minimist-options"));
var configWatchStartCmd = __importStar(require("./configWatchStart"));
exports.name = 'watch';
exports.fqn = 'adhoc.config.watch';
exports.subCmds = [configWatchStartCmd];
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
