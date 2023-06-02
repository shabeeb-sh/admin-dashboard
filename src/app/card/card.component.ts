import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // create properties which able to hold parent data
  @Input() bg:string=''
  @Input() icon:string=''
  @Input() content:string=''
  @Input() total:string=''

}
