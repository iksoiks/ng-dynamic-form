import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Config } from './models';

export const ConfigToken = new InjectionToken<Config>('Config');
@Injectable()
export class ConfigOptions {

    private _config: any;
    constructor(@Inject(ConfigToken) config: Config) {
        this._config = config;
    }

    getConfig(): Config {
        return this._config;
    }

    mergeConfig(config: Config) {
        if (!this._config) {
            this._config = config;
        } else {
            if (config.customComponents) {
                if (!this._config.customComponents) {
                    this._config.customComponents = {};
                }
                for (const key in config.customComponents) {
                    if (config.customComponents.hasOwnProperty(key)) {
                        this._config.customComponents[key] = config.customComponents[key];
                    }
                }
            }
            if (config.customValidators) {
                if (!this._config.customValidators) {
                    this._config.customValidators = {};
                }
                for (const key in config.customValidators) {
                    if (config.customValidators.hasOwnProperty(key)) {
                        this._config.customValidators[key] = config.customValidators[key];
                    }
                }
            }
        }
    }
}
