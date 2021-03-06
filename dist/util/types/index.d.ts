/// <reference types="node" />
import { WAChatUpdate } from '@adiwajshing/baileys';
import { EventEmitter } from 'events';
import { Command, SharkModule } from '../..';
export interface SharkModuleOptions {
    category?: string;
}
export interface SharkHandlerOptions {
    automateCategories?: boolean;
    classToHandle?: typeof SharkModule;
    directory: string;
    extensions?: string[] | Set<string>;
    loadFilter?: LoadPredicate;
}
export interface ListenerOptions extends SharkModuleOptions {
    emitter: string | EventEmitter;
    event: string;
    type?: string;
}
export interface InhibitorOptions extends SharkModuleOptions {
    reason?: string;
    type?: InhibitorTypes;
    priority?: number;
}
export interface CommandOptions extends SharkModuleOptions {
    alias: string[];
    cooldown?: number;
    ratelimit?: number;
    prefix?: string | string[];
    description?: {
        [x: string]: any;
    };
    filters?: {
        botOwner?: boolean;
        allowDM?: boolean;
        allowGroups?: boolean;
        ignoreCooldown?: string | string[] | IgnoreCheckPredicate;
        groupAdmin?: boolean;
        groupOwner?: boolean;
    };
}
export interface SharkClientOptions {
    ownerID?: string | string[];
    sessionPath: string;
}
export interface CommandHandlerOptions extends SharkHandlerOptions {
    blockClient?: boolean;
    storeMessages?: boolean;
    defaultCooldown?: number;
    ignoreCooldown?: string | string[] | IgnoreCooldownFuntion;
    prefix: string | string[] | Prefix;
    aliasReplacement?: string | RegExp;
}
export interface ParsedComponentData {
    afterPrefix?: string;
    alias?: string;
    command?: Command;
    content?: string;
    prefix?: string;
}
export interface CooldownData {
    end: number;
    timer: NodeJS.Timer;
    uses: number;
}
export declare enum CommandHandlerListeners {
    COMMAND_ERROR = "commandError",
    COMMAND_COOLDOWN = "commandCooldown",
    COMMAND_STARTED = "commandStarted",
    COMMAND_FINISHED = "commandFinished",
    COMMAND_BLOCKED = "commandBlocked",
    MESSAGE_BLOCKED = "messageBlocked"
}
export declare enum SharkHandlerListeners {
    LOAD = "load",
    REMOVE = "remove"
}
export declare type IgnoreCheckPredicate = (message: WAChatUpdate, command: Command) => boolean;
export declare type Prefix = (message: WAChatUpdate) => string | string[];
export declare type IgnoreCooldownFuntion = (message: WAChatUpdate) => string | string[];
export declare type LoadPredicate = (filepath?: string) => boolean;
export declare type InhibitorTypes = 'pre' | 'post' | 'all';
