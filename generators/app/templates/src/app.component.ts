import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<h1>{{title}}</h1>',
  styles: [
      'h1 { color: red; }'
  ]
})
export class AppComponent {
  title = 'Ng2 demo app';
}
