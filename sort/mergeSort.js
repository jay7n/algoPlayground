const log = console.log;

const mergeSort = (() => {
  function _swap(list, a, b) {
    const tmp = list[a];
    list[a] = list[b];
    list[b] = tmp;
  }
  function _compare(list, a, b) {
    return list[a] > list[b];
  }
  function _merge(list, start, half, end) {
    const copyList = list.slice(start, end + 1);
    const relHalf = half - start, relEnd = end - start;
    let p = 0, q = half + 1 - start, i = start;

    while(i <= end) {
      if (p > relHalf) {
        list[i] = copyList[q++];
      } else if (q > relEnd) {
        list[i] = copyList[p++];
      }else if (_compare(copyList, p, q)) {
        list[i] = copyList[p++];
      } else {
        list[i] = copyList[q++];
      }
      i++;
    }
  }
  function _partition(list, start, end) {
    if (start == end) {
      return;
    }

    const half = start + parseInt((end - start) * .5);
    _partition(list, start, half);
    _partition(list, half + 1, end);

    _merge(list, start, half, end);
  }

  return function(list) {
    _partition(list, 0, list.length-1);
    return list;
  }
})();


function main() {
  const a = [1, 9, 8, 5, 0, 2, 6];
  log('before sort:', a);
  mergeSort(a);
  log('after sort:', a);
}

main();