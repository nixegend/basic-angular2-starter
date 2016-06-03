import { bootstrap } from 'angular2/platform/browser';
import { Component, enableProdMode } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { componentProxyFactory } from 'services/proxy-component.js';
import { Contacts } from 'contacts/contacts.js';
import { Home } from 'home/home.js';
// import { About } from 'about/about.js';

@Component({
  selector: 'ng2-app',
  templateUrl: 'app/main.html',
  styleUrls: ['app/main.css'],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/contacts', name: 'Contacts', component: Contacts },
  // { path: '/about', name: 'About', component: About }
  {
    path: '/about',
    // name: 'About' ^ as: 'About'
    component: componentProxyFactory({
      path: 'about/about.js',
      provide: m => m.About
    }),
    as: 'About'
  }
])

class FirstApp { }

enableProdMode();
bootstrap(FirstApp, [ROUTER_PROVIDERS]);