(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = {
    context: global.document,
    persuade: 'checked',
    tag: 'input',
    path: 'dataset.value'
  };

  nx.activeValue = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var elements = options.context.querySelectorAll(options.tag + ':' + options.persuade);
    var els = nx.slice(elements);
    return els.map(function (el) {
      return nx.get(el, options.path);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.activeValue;
  }
})();
