
const useValidations = () => {
  const isRequired = (val) => {
    console.log('isRequired?: ', val, val !== null && val.toString().trim().length > 0);
    return val !== null && val.toString().trim().length > 0;
  };

  const isNotExisted = (vals, val) => {
    let pro = vals.filter(p => p.name === val.trim());
    console.log('isNotExisted? ', vals, pro);
    return pro.length === 0;
  }

  const isGreaterThan0 = (val) => {
    console.log('isGreaterThan0: ', parseInt(val) > 0);
    return parseInt(val) > 0;
  }

  return {isRequired, isNotExisted, isGreaterThan0};
}

export { useValidations };