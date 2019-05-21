import {FieldConfig} from '../models/field.interface';

export default (stylesMap) => (field: FieldConfig) => {
    return stylesMap[field.name];
};
