'use strict';

System.register(['angular2/core'], function (_export, _context) {
  "use strict";

  var Component, DynamicComponentLoader, ViewContainerRef, _createClass;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
      DynamicComponentLoader = _angular2Core.DynamicComponentLoader;
      ViewContainerRef = _angular2Core.ViewContainerRef;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function componentProxyFactory(obj) {
        var _dec, _class;

        var VirtualComponent = (_dec = Component({
          selector: 'component-proxy',
          template: '<span></span>'
        }), _dec(_class = function () {
          function VirtualComponent(dynamicComponentLoader, viewContainerRef) {
            _classCallCheck(this, VirtualComponent);

            System.import(obj.path).then(function (m) {
              dynamicComponentLoader.loadNextToLocation(obj.provide(m), viewContainerRef);
            });
          }

          _createClass(VirtualComponent, null, [{
            key: 'parameters',
            get: function get() {
              return [[DynamicComponentLoader], [ViewContainerRef]];
            }
          }]);

          return VirtualComponent;
        }()) || _class);


        return VirtualComponent;
      }

      _export('componentProxyFactory', componentProxyFactory);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzXFxwcm94eS1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVMsZSxpQkFBQSxTO0FBQVcsNEIsaUJBQUEsc0I7QUFBd0Isc0IsaUJBQUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxlQUFTLHFCQUFULENBQStCLEdBQS9CLEVBQW9DO0FBQUE7O0FBQUEsWUFNbkMsZ0JBTm1DLFdBQ3hDLFVBQVU7QUFDVCxvQkFBVSxpQkFERDtBQUVUO0FBRlMsU0FBVixDQUR3QztBQU92QyxvQ0FBWSxzQkFBWixFQUFvQyxnQkFBcEMsRUFBc0Q7QUFBQTs7QUFDcEQsbUJBQU8sTUFBUCxDQUFjLElBQUksSUFBbEIsRUFBd0IsSUFBeEIsQ0FBNkIsYUFBSztBQUNoQyxxQ0FBdUIsa0JBQXZCLENBQTBDLElBQUksT0FBSixDQUFZLENBQVosQ0FBMUMsRUFBMEQsZ0JBQTFEO0FBQ0QsYUFGRDtBQUdEOztBQVhzQztBQUFBO0FBQUEsZ0NBYWY7QUFDdEIscUJBQU8sQ0FBQyxDQUFDLHNCQUFELENBQUQsRUFBMkIsQ0FBQyxnQkFBRCxDQUEzQixDQUFQO0FBQ0Q7QUFmc0M7O0FBQUE7QUFBQTs7O0FBa0J6QyxlQUFPLGdCQUFQO0FBQ0QiLCJmaWxlIjoic2VydmljZXNcXHByb3h5LWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFByb3h5RmFjdG9yeShvYmopIHtcclxuICBAQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LXByb3h5JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4+PC9zcGFuPmBcclxuICB9KVxyXG5cclxuICBjbGFzcyBWaXJ0dWFsQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGR5bmFtaWNDb21wb25lbnRMb2FkZXIsIHZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgU3lzdGVtLmltcG9ydChvYmoucGF0aCkudGhlbihtID0+IHtcclxuICAgICAgICBkeW5hbWljQ29tcG9uZW50TG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbihvYmoucHJvdmlkZShtKSwgdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpIHtcclxuICAgICAgcmV0dXJuIFtbRHluYW1pY0NvbXBvbmVudExvYWRlcl0sIFtWaWV3Q29udGFpbmVyUmVmXV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gVmlydHVhbENvbXBvbmVudDtcclxufSJdfQ==