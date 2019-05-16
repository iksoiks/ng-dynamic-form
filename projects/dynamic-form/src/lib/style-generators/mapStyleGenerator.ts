import {FieldConfig} from '../field.interface';

export default (stylesMap) => (field: FieldConfig) => {
    return stylesMap[field.name];
};
