'use strict';

System.register(['angular2/core', './app.service'], function (_export, _context) {
  "use strict";

  var Component, OnInit, AppService, _createClass, _dec, _class, AppComponent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2Core) {
      Component = _angular2Core.Component;
      OnInit = _angular2Core.OnInit;
    }, function (_appService) {
      AppService = _appService.AppService;
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

      _export('AppComponent', AppComponent = (_dec = Component({
        selector: 'my-app',
        template: '\n    <p>{{title}}</p>\n    ',
        providers: [AppService]
      }), _dec(_class = function () {
        // title;

        function AppComponent(appService) {
          _classCallCheck(this, AppComponent);

          this.appService = appService;
        }

        _createClass(AppComponent, [{
          key: 'ngOnInit',
          value: function ngOnInit() {
            var _this = this;

            this.title = 'Lazy loaded title will be displayed here.';
            this.appService.getTitle().then(function (lazyTitle) {
              _this.title = lazyTitle;
            });
          }
        }]);

        return AppComponent;
      }()) || _class));

      _export('AppComponent', AppComponent);

      Reflect.defineMetadata('design:paramtypes', [AppService], AppComponent);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFxcYXBwLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUyxlLGlCQUFBLFM7QUFBVyxZLGlCQUFBLE07O0FBRVgsZ0IsZUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBU0ksWSxXQVBaLFVBQVU7QUFDVCxrQkFBVSxRQUREO0FBRVQsZ0RBRlM7QUFLVCxtQkFBVyxDQUFDLFVBQUQ7QUFMRixPQUFWLEM7OztBQVVDLDhCQUFZLFVBQVosRUFBb0M7QUFBQTs7QUFDbEMsZUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0Q7Ozs7cUNBRVU7QUFBQTs7QUFDVCxpQkFBSyxLQUFMLEdBQWEsMkNBQWI7QUFDQSxpQkFBSyxVQUFMLENBQWdCLFFBQWhCLEdBQTJCLElBQTNCLENBQWdDLFVBQUMsU0FBRCxFQUFlO0FBQzdDLG9CQUFLLEtBQUwsR0FBYSxTQUFiO0FBQ0QsYUFGRDtBQUdEOzs7Ozs7OzttREFUdUIsVSxHQUhiLFkiLCJmaWxlIjoiYXBwXFxhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+e3t0aXRsZX19PC9wPlxyXG4gICAgYCxcclxuICBwcm92aWRlcnM6IFtBcHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyB0aXRsZTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwU2VydmljZTogQXBwU2VydmljZSkge1xyXG4gICAgdGhpcy5hcHBTZXJ2aWNlID0gYXBwU2VydmljZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9ICdMYXp5IGxvYWRlZCB0aXRsZSB3aWxsIGJlIGRpc3BsYXllZCBoZXJlLic7XHJcbiAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0VGl0bGUoKS50aGVuKChsYXp5VGl0bGUpID0+IHtcclxuICAgICAgdGhpcy50aXRsZSA9IGxhenlUaXRsZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=