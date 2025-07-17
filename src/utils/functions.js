export const sanitizePerUnitValue = (value) => {
  if (typeof value === 'string') {
    if (value.endsWith('%')) {
      const num = parseFloat(value);
      if (num > 100) {
        return '100%';
      }
    }
  }
  return value;
}
