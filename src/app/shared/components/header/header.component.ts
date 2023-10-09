import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSidenavOpen:any;
  @Input() isAuth:boolean=false
  @Output() sidenavToogleButtonChangeEvent = new EventEmitter<boolean>();


  public urlHome: string = '/';
  public urlLogo: string = 'static/images/ignis-logo.svg';
  constructor() { }

  ngOnInit(): void {
  }
  public toogleSidenav() {

    this.isSidenavOpen = !this.isSidenavOpen;
    this.sidenavToogleButtonChangeEvent.emit(this.isSidenavOpen);

}

}
