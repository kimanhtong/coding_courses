const isSameObj = (obj1, obj2) => {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  let check = true;
  if (arr1.length !== arr2.length) {
    check = false;
  } else {
    arr1.forEach((val, index) => {
      if ((arr2[index] !== val) || (obj1[val] !== obj2[val])) {
        return check = false;
      }
    });
  }
  return check;
};
export default isSameObj;