#!/usr/bin/env node
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
var chalk_1 = __importDefault(require("chalk"));
var argv_cmd_lib_1 = require("argv-cmd-lib");
var adhocCmd = __importStar(require("./cmds/adhoc"));
var configCmd = __importStar(require("./cmds/config"));
var configWatchCmd = __importStar(require("./cmds/configWatch"));
var configWatchStartCmd = __importStar(require("./cmds/configWatchStart"));
var serverCmd = __importStar(require("./cmds/server"));
var serverStartCmd = __importStar(require("./cmds/serverStart"));
var serverStopCmd = __importStar(require("./cmds/serverStop"));
var main = function () {
    var parsedCmd = argv_cmd_lib_1.parseCmdOrThrow(adhocCmd, process.argv.slice(2));
    var fullyQualifiedCmdNameToRun = argv_cmd_lib_1.getParsedCmdNames(parsedCmd).join('.');
    var namedArgvs = argv_cmd_lib_1.getNamedArgvs(parsedCmd);
    var namedParsedArgvs = namedArgvs.map(function (_a) {
        var fqn = _a[0], argv = _a[1];
        return fqn === adhocCmd.fqn
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
                                        [fqn, argv];
    });
    var parsedArgvLookup = Object.fromEntries(namedParsedArgvs);
    console.log(chalk_1.default.blue('fullyQualifiedCmdNameToRun:'), fullyQualifiedCmdNameToRun);
    console.log(chalk_1.default.blue('parsedArgvLookup:'), JSON.stringify(parsedArgvLookup, null, 2));
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
            throw new Error("Failed to implement command with fully qualified name of: " + fullyQualifiedCmdNameToRun);
        }
    }
};
main();
