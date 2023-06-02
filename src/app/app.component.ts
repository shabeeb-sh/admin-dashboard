import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  sidebar:boolean = true

  sidebarToggle(){
    //define how to toggle the value of sidebar
    this.sidebar = !this.sidebar

  }
}
