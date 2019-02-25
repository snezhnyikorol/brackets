module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arr = new Array(bracketsConfig.length).fill(false);
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && !(arr[j])) {
        stack.push(str[i]);
        if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
          arr[j] = true;
        }
      } else {
      if (str[i] == bracketsConfig[j][1]) {
        let el = stack.pop();
        if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
          arr[j] = false;
        }
        if (el != bracketsConfig[j][0]) {
          return false;
        }
      }
      }
    }
  }
  if (stack.pop() != undefined) {
    return false;
  }
  return true;
}

