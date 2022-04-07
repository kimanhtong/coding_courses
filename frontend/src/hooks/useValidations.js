
const useValidations = () => {
  const isRequired = (val) => {
    return val !== null && val.toString().trim().length > 0;
  };

  const isNotExisted = (vals, val) => {
    let pro = vals.filter(p => p.name === val.trim());
    return pro.length === 0 || (pro.length === 1 && pro[0].id);
  };

  const isGreaterThan0 = (val) => {
    return parseInt(val) > 0;
  };

  return {isRequired, isNotExisted, isGreaterThan0};
}

export { useValidations };