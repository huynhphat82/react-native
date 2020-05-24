
const Helper = {};

Helper.isArray = value => Array.isArray(value);

Helper.notEmpty = value => (
  (value && Array.isArray(value) && value.length > 0) ||
  (value && typeof value === 'object' && Object.keys(value).length > 0)
);

export default Helper;
