import {Component, View, DynamicComponentLoader, Injector, bind, ElementRef} from 'angular2/angular2';

export class ComponentProvider {
  constructor(prov) {
    this.path = prov.path;
    this.provide = prov.provide;
  }
}

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function componentProxyFactory(provider) {

  @Component({
    selector: 'component-proxy',
    bindings: [bind(ComponentProvider).toValue(provider)]
  })

  @View({
    template: `<span #content/>`
  })

  class VirtualComponent {
    constructor(dynamicComponentLoader, elementRef) {
      System.import(provider.path).then(m => {
        dynamicComponentLoader.loadIntoLocation(provider.provide(m), elementRef, 'content');
      });
    }

    static get parameters() {
      return [[DynamicComponentLoader], [ElementRef]];
    }
  }

  return VirtualComponent;
}