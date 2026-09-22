// export import

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

export const pi = 3.14;

export default add;
