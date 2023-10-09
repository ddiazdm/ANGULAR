import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mode: MatDrawerMode = 'side';

  public isSidenavOpen: boolean = true;
  public isAuth: boolean = false

  public menuPath: string = 'static/data/sidenav-menu.json'

  constructor() { }

  ngOnInit(): void {

  }



  sidenavToogleButtonChangeEvent(isOpen: boolean) {

    this.isSidenavOpen = isOpen;

  }


}
