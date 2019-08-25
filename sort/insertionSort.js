const log = console.log;

const insertionSort = (() => {
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
      for (let j = i; j > 0; j--) {
        if (_compare(list, j, j-1)) {
          _swap(list, j, j-1);
        }
      }
    }
  }
})();


function main() {
  const a = [1, 9, 8, 5, 0, 1 ,0, 9, 2, 0, 1, 6, 1, 2, 0, 6];
  log('before sort:', a);
  insertionSort(a);
  log('after sort:', a);
}

main();