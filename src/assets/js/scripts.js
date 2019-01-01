//receive calls from typescript code to update the layouts
var AdminLTE = (function() {
  return {
    init: function() {
      window.dispatchEvent(new Event ('resize'));
      // $.AdminLTE.layout.activate();
      // $.AdminLTE.layout.fix();
      // $.AdminLTE.layout.fixSidebar();
    }
  }
})(AdminLTE||{});

