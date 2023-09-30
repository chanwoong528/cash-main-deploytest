//@ts-nocheck


export function getKeyByValue(object, value) {
  console.log(object)
  return Object.keys(object).find(key => object[key] === value);
}