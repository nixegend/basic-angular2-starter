import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {NameList} from 'services/NameList';

@Component({
  selector: 'about',
  bindings: [NameList]
})

@View({
  templateUrl: 'about/about.html',
  directives: [CORE_DIRECTIVES]
})

export class About {
  constructor() {
    this.name = 'Minko 222222222222';
    this.list = new NameList();
  }
  addName(newname) {
    this.list.add(newname.value);
    newname.value = '';
    return false;
  }
}
