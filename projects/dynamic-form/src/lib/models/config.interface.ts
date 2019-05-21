import {Type} from '@angular/core';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {BaseFieldComponent} from '../base.field.component';
import {FieldConfig} from './field.interface';

export interface CustomComponents {
    [key: string]: Type<BaseFieldComponent>;
}

export interface CustomValidators {
    [key: string]: ValidatorFn | AsyncValidatorFn;
}

export interface Config {
    customComponents?: CustomComponents;
    customValidators?: CustomValidators;
    styleGenerators?: StyleGenerator;
}

export type StyleGenerator = (field: FieldConfig) => any;
