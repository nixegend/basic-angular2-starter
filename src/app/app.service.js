'use strict';

System.register(['angular2/core'], function (_export, _context) {
  "use strict";

  var Injectable, _createClass, _dec, _class, lazyTitle, AppService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Injectable = _angular2Core.Injectable;
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

      lazyTitle = new Promise(function (resolve) {
        setTimeout(function () {
          resolve('Angular 2 with ES6(Babel) and Gulp + = + .');
        }, 1000);
      });

      _export('AppService', AppService = (_dec = Injectable(), _dec(_class = function () {
        function AppService() {
          _classCallCheck(this, AppService);
        }

        _createClass(AppService, [{
          key: 'getTitle',
          value: function getTitle() {
            return lazyTitle;
          }
        }]);

        return AppService;
      }()) || _class));

      _export('AppService', AppService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFxcYXBwLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVMsZ0IsaUJBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsZSxHQUFZLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFhO0FBQ3pDLG1CQUFXLFlBQU07QUFDZixrQkFBUSw0Q0FBUjtBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0QsT0FKaUIsQzs7NEJBT0wsVSxXQURaLFk7Ozs7Ozs7cUNBRVk7QUFDVCxtQkFBTyxTQUFQO0FBQ0QiLCJmaWxlIjoiYXBwXFxhcHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmNvbnN0IGxhenlUaXRsZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICByZXNvbHZlKCdBbmd1bGFyIDIgd2l0aCBFUzYoQmFiZWwpIGFuZCBHdWxwICsgPSArIC4nKTtcclxuICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiBsYXp5VGl0bGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==