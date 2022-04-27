
const useValidations = () => {
  const isRequired = (val) => {
    if (typeof(val) === 'number') {
      return val !== null && val.toString().length > 0;
    } else if (typeof(val) === 'string') {
      return val !== null && val.trim().length > 0;
    }
    else {
      return val !== null && val.name !== undefined; //object or array should have "name" key
    }
  };

  const isNotExisted = (vals, val) => {
    let pro = vals.filter(p => p.name === val.trim());
    return pro.length === 0 || (pro.length === 1 && pro[0].id);
  };

  const isLimited = (val) => {
    return parseInt(val) > 0 && parseInt(val) <= 4000;
  };

  return {isRequired, isNotExisted, isLimited};
}

export { useValidations };