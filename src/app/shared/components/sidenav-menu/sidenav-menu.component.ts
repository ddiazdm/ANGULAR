import { Component, Input, OnInit } from '@angular/core';
import { SidenavMenuItem, SidenavSubMenuItem } from '../../models/sidenav-menu.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  @Input() menuPath: string = ""

  public menu: SidenavMenuItem[] = [];
  public submenu: SidenavSubMenuItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getMenu();

  }

  private getMenu() {

    const url = this.menuPath;

    return this.http.get<SidenavMenuItem[]>(url).subscribe({
      next: (response: SidenavMenuItem[]) => {
        this.menu = response;
      },
      error:(err=>{
        console.log(err);

      })
    });

  }
}
