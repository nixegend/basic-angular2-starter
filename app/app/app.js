import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS/*, AsyncRoute*/} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Home} from 'home/home';
import {componentProxyFactory} from '../proxy-component';

@Component({
  selector: 'example-app',
})

// @RouteConfig([
//   { path: '/', component: Home, as: 'home' },
//   new AsyncRoute({
//     path: '/about',
//     loader: () => System.import('./about/about').then(m => m.About),
//     as: 'about'
//   })
// ])

@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  {
    path: '/about',
    component: componentProxyFactory({
      path: 'about/about',
      provide: m => m.About
    }),
    as: 'about'
  }
])

@View({
  templateUrl: 'app/app.html',
  // styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})

class App { }

bootstrap(App, [ROUTER_BINDINGS]);
