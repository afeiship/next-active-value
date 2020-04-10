(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { persuade: 'checked', path: 'dataset.value' };

  nx.activeValue = function (inElement, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    if (!inElement) return [];
    var elements = inElement.querySelectorAll('input:' + options.persuade);
    var els = nx.slice(elements);
    return els.map(function (el) {
      return nx.get(el, options.path);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.activeValue;
  }
})();
