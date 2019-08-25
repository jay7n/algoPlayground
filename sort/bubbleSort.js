const log = console.log;

const bubbleSort = (() => {
  function _swap(list, a, b) {
    const tmp = list[a];
    list[a] = list[b];
    list[b] = tmp;
  }
  function _compare(list, a, b) {
    return list[a] > list[b];
  }
  return function(list) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - i; j++) {
        if (_compare(list, j+1, j)) {
          _swap(list, j, j+1);
        }
      }
    }
  }
})();


function main() {
  const a = [1, 9, 8, 5, 0, 1 ,0, 9, 2, 0, 1, 6, 1, 2, 0, 6];
  log('before sort:', a);
  bubbleSort(a);
  log('after sort:', a);
}

main();