const log = console.log;

const heapSort = (() => {
  function _swap(list, a, b) {
    const tmp = list[a];
    list[a] = list[b];
    list[b] = tmp;
  }
  function _compare(list, a, b) {
    return list[a] > list[b];
  }
  function _swim(list, idx, start, end) {
    // _swim() is not necessary in this specific algorithm,
    // but is useful for implementing a heap-based PriorityQueue
    return list;
  }
  function _sink(list, idx, start, end) {
    // we can immediately find an element's two children
    // by x2 its idx in a complete binary heap
    const children = [idx * 2,  idx * 2 + 1];
    if (idx >= start && children[1] <= end) {
      const closer = _compare(list, children[0], children[1]) ? children[0] : children[1];
      if (_compare(list, closer, idx)) {
        _swap(list, closer, idx);
        _sink(list, closer, start, end);
      }
    }
  }
  function _construct(list) {
    // use bottom-up constructing strategy,
    // so begin with first non-leaf node by /2 the last elem idx
    const idx = parseInt(list.length / 2);
    for (let i = idx; i > 0; i--) {
      _sink(list, i, 1, list.length);
    }
  }
  function _sortdown(list) {
    for (let i = list.length-1; i > 0;) {
      _swap(list, 1, i--);
      _sink(list, 1, 1, i);
    }
  }
  return function(list) {
    list.splice(0, 0, null);
    _construct(list);
    _sortdown(list);
    list.splice(0, 1);
    return list;
  }
})();

function main() {
  const a = [1, 9, 8, 5, 0, 2, 6];
  log('before sort:', a);
  heapSort(a);
  log('after sort:', a);
}

main();