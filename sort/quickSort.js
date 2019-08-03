const quickSort = (() => {
  function _swap(list, a, b) {
    if (a == b) {
      return;
    }
    const tmp = list[a];
    list[a] = list[b];
    list[b] = tmp;
  }
  function _doSort(list, lo, hi) {
    if (lo >= hi) {
      return;
    }
    let i = lo, j = hi;
    const pivot = list[lo];

    while(i != j) {
      while(j > i && list[j] >= pivot) {
        j--;
      }
      while(i < j && list[i] < pivot) {
        i++;
      }
      if (i < j) {
        _swap(list, i, j);
      } else {
        _doSort(list, lo, i);
        _doSort(list, i+1, hi);
      }
    }
  }
  return function(list) {
    return _doSort(list, 0, list.length -1);
  };
})();

function main() {
  const a = [1, 9, 8, 5, 0, 2, 6];
  console.log('before sort:', a);
  quickSort(a);
  console.log('after sort:', a);
}

main();