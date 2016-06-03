'use strict';

System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'services/proxy-component.js', 'contacts/contacts.js', 'home/home.js'], function (_export, _context) {
  "use strict";

  var bootstrap, Component, enableProdMode, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, componentProxyFactory, Contacts, Home, _dec, _dec2, _class, FirstApp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular2PlatformBrowser) {
      bootstrap = _angular2PlatformBrowser.bootstrap;
    }, function (_angular2Core) {
      Component = _angular2Core.Component;
      enableProdMode = _angular2Core.enableProdMode;
    }, function (_angular2Router) {
      ROUTER_PROVIDERS = _angular2Router.ROUTER_PROVIDERS;
      ROUTER_DIRECTIVES = _angular2Router.ROUTER_DIRECTIVES;
      RouteConfig = _angular2Router.RouteConfig;
    }, function (_servicesProxyComponentJs) {
      componentProxyFactory = _servicesProxyComponentJs.componentProxyFactory;
    }, function (_contactsContactsJs) {
      Contacts = _contactsContactsJs.Contacts;
    }, function (_homeHomeJs) {
      Home = _homeHomeJs.Home;
    }],
    execute: function () {
      FirstApp = (_dec = Component({
        selector: 'ng2-app',
        templateUrl: 'app/main.html',
        styleUrls: ['app/main.css'],
        directives: [ROUTER_DIRECTIVES]
      }), _dec2 = RouteConfig([{ path: '/', name: 'Home', component: Home, useAsDefault: true }, { path: '/contacts', name: 'Contacts', component: Contacts },
      // { path: '/about', name: 'About', component: About }
      {
        path: '/about',
        // name: 'About' ^ as: 'About'
        component: componentProxyFactory({
          path: 'about/about.js',
          provide: function provide(m) {
            return m.About;
          }
        }),
        as: 'About'
      }]), _dec(_class = _dec2(_class = function FirstApp() {
        _classCallCheck(this, FirstApp);
      }) || _class) || _class);


      enableProdMode();
      bootstrap(FirstApp, [ROUTER_PROVIDERS]);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFxcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUyxlLDRCQUFBLFM7O0FBQ0EsZSxpQkFBQSxTO0FBQVcsb0IsaUJBQUEsYzs7QUFDWCxzQixtQkFBQSxnQjtBQUFrQix1QixtQkFBQSxpQjtBQUFtQixpQixtQkFBQSxXOztBQUNyQywyQiw2QkFBQSxxQjs7QUFDQSxjLHVCQUFBLFE7O0FBQ0EsVSxlQUFBLEk7OztBQXlCSCxjLFdBdEJMLFVBQVU7QUFDVCxrQkFBVSxTQUREO0FBRVQscUJBQWEsZUFGSjtBQUdULG1CQUFXLENBQUMsY0FBRCxDQUhGO0FBSVQsb0JBQVksQ0FBQyxpQkFBRDtBQUpILE9BQVYsQyxVQU9BLFlBQVksQ0FDWCxFQUFFLE1BQU0sR0FBUixFQUFhLE1BQU0sTUFBbkIsRUFBMkIsV0FBVyxJQUF0QyxFQUE0QyxjQUFjLElBQTFELEVBRFcsRUFFWCxFQUFFLE1BQU0sV0FBUixFQUFxQixNQUFNLFVBQTNCLEVBQXVDLFdBQVcsUUFBbEQsRUFGVzs7QUFJWDtBQUNFLGNBQU0sUUFEUjs7QUFHRSxtQkFBVyxzQkFBc0I7QUFDL0IsZ0JBQU0sZ0JBRHlCO0FBRS9CLG1CQUFTO0FBQUEsbUJBQUssRUFBRSxLQUFQO0FBQUE7QUFGc0IsU0FBdEIsQ0FIYjtBQU9FLFlBQUk7QUFQTixPQUpXLENBQVosQzs7Ozs7QUFpQkQ7QUFDQSxnQkFBVSxRQUFWLEVBQW9CLENBQUMsZ0JBQUQsQ0FBcEIiLCJmaWxlIjoiYXBwXFxtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgY29tcG9uZW50UHJveHlGYWN0b3J5IH0gZnJvbSAnc2VydmljZXMvcHJveHktY29tcG9uZW50LmpzJztcclxuaW1wb3J0IHsgQ29udGFjdHMgfSBmcm9tICdjb250YWN0cy9jb250YWN0cy5qcyc7XHJcbmltcG9ydCB7IEhvbWUgfSBmcm9tICdob21lL2hvbWUuanMnO1xyXG4vLyBpbXBvcnQgeyBBYm91dCB9IGZyb20gJ2Fib3V0L2Fib3V0LmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwL21haW4uY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICB7IHBhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gIHsgcGF0aDogJy9jb250YWN0cycsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdHMgfSxcclxuICAvLyB7IHBhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0IH1cclxuICB7XHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIC8vIG5hbWU6ICdBYm91dCcgXiBhczogJ0Fib3V0J1xyXG4gICAgY29tcG9uZW50OiBjb21wb25lbnRQcm94eUZhY3Rvcnkoe1xyXG4gICAgICBwYXRoOiAnYWJvdXQvYWJvdXQuanMnLFxyXG4gICAgICBwcm92aWRlOiBtID0+IG0uQWJvdXRcclxuICAgIH0pLFxyXG4gICAgYXM6ICdBYm91dCdcclxuICB9XHJcbl0pXHJcblxyXG5jbGFzcyBGaXJzdEFwcCB7IH1cclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmJvb3RzdHJhcChGaXJzdEFwcCwgW1JPVVRFUl9QUk9WSURFUlNdKTsiXX0=