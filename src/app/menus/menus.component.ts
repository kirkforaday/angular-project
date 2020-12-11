import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Menu } from '../menu';
import { MENUS } from '../menu-list';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus = MENUS;
  
  selectedMenu?: Menu;
  
  constructor() { }

  ngOnInit(): void {
  }

onSelect(menu: Menu): void {
  this.selectedMenu = menu;
}

}
