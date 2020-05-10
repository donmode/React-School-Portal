const formatObjectsToArray = (obj, id_name, value_name) => {
  let output = [];
  Object.values(obj).forEach((obj_item) => {
    const tmp = {};
    tmp[obj_item[id_name]] = obj_item[value_name];
    output.push(tmp);
  });
  return output;
};

export { formatObjectsToArray };
