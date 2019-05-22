function assignStylesByFieldType(field, styles) {
  const stylesByType = {
    'radiobutton': {
      'flexGrow': '0',
    },
    'checkbox': {
      'flexGrow': '0',
    },
    'button': {
      'flexBasis': '100%',
      'textAlign': 'right',
    },
    'line-break': {
      'flexBasis': '100%',
      'margin': '0',
    },
  };

  const type = field['type'] || 'text';
  Object.assign(styles, stylesByType[type] || {});
}

function assignStylesByFieldValidations(field, styles) {
  const validations = field.validations
      ? field.validations.reduce((acc, value) => {
        acc[value.name] = value;
        return acc;
      }, {})
      : {};

  if (validations['max']) {
    const maxLength = Math.max(4,
        Math.ceil(validations['max']['validationParams'] / 10));
    styles['maxWidth'] = `${maxLength}em`;
  }

  if (validations['maxLength']) {
    const maxLength = Math.min(4, validations['maxLength']['validationParams']);
    styles['maxWidth'] = `${maxLength}em`;
  }
}

function assignStylesByFieldGridOptions(field, styles) {
  const stylesOverrides = field['grid'] && field['grid']['style'] || {};
  Object.assign(styles, stylesOverrides);
}

export const gridStyleGenerator = field => {
  const styles = {
    'flexGrow': '12',
    'alignSelf': 'center',
  };

  const {
    type = true,
    validations = true,
  } = field['grid'] || {};

  if (type) {
    assignStylesByFieldType(field, styles);
  }

  if (validations) {
    assignStylesByFieldValidations(field, styles);
  }

  assignStylesByFieldGridOptions(field, styles);

  return styles;
};
