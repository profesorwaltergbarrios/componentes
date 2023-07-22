import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp-inline-style',
  templateUrl: './cmp-inline-style.component.html',
  styles: [
    `
    p { font-size: xx-large ; background-color: yellow; }
    h2 { color: blue; }

    `
  ]
})
export class CmpInlineStyleComponent {

}
