import { Component, DynamicComponentLoader, ViewContainerRef } from 'angular2/core';

export function componentProxyFactory(obj) {
  @Component({
    selector: 'component-proxy',
    template: `<span></span>`
  })

  class VirtualComponent {
    constructor(dynamicComponentLoader, viewContainerRef) {
      System.import(obj.path).then(m => {
        dynamicComponentLoader.loadNextToLocation(obj.provide(m), viewContainerRef);
      });
    }

    static get parameters() {
      return [[DynamicComponentLoader], [ViewContainerRef]];
    }
  }

  return VirtualComponent;
}