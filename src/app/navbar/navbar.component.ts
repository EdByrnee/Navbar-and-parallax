import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser"
import { slideInTop } from "../animations/slideInTop";
import { trigger, state, style, transition, animate} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('false', style({
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('true => false', animate('400ms ease-in-out')),
      transition('false => true', animate('400ms ease-in-out'))
    ]),
    trigger("slideDown",[
        state("top", style({
          transform : "translate3d(0,0,0)",
          background: "transparent"
        })),
        state("top-hidden", style({
          transform: "translate3d(0,-100%,0)"
        })),
        state("bottom-hidden", style({
          transform: "translate3d(0,0,0)",
          background: " #e3e3e3"
        })),
        transition("top => bottom-hidden", animate("200ms ease-in-out")),
        transition("bottom-hidden => top", animate("200ms ease-in-out"))
      ])
  ]
})
export class NavbarComponent implements OnInit {

	_hide: boolean = false;
  _offset:number = 0;
  _pos: string = "top";



  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  scroll(){
    if (window.pageYOffset > this._offset) this._pos = "bottom-hidden"
    if (window.pageYOffset < this._offset) this._pos = "top"
    this._offset = window.pageYOffset;
  }

  hide(){
    console.log("Hiding...");
    this._hide = true;
   }

  show(){
    console.log("Showing...");
    this._hide = false;
  }

  get showNav(): string{
    return (!this._hide).toString();
  }

}
