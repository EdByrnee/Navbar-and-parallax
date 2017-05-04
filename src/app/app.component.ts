import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild("nav") navbar: NavbarComponent;

  title = 'app works!';

	onScroll(){
		console.log("You are scrolling...");
	}

}
