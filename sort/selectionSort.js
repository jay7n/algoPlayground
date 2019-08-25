const log = console.log;

const selectionSort = (() => {
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
      let maxIdx = i;
      for (let j = i; j < list.length; j++) {
        if (_compare(list, j, maxIdx)) {
          maxIdx = j;
        }
      }
      _swap(list, i, maxIdx);
    }
  }
})();


function main() {
  const a = [1, 9, 8, 5, 0, 1 ,0, 9, 2, 0, 1, 6, 1, 2, 0, 6];
  log('before sort:', a);
  selectionSort(a);
  log('after sort:', a);
}

main();