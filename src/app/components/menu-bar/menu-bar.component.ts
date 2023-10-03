import { Component, OnInit } from '@angular/core';
import { MenuBarFooterLink } from 'src/types';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  links: MenuBarFooterLink[] = [];

  constructor() {
    this.links = [
      { href: "#", label: "Novidades" },
      { href: "#", label: "Coleções" },
      { href: "#", label: "Ofertas" },
      { href: "#", label: "PS5" },
      { href: "#", label: "Assinaturas" },
      { href: "#", label: "Navegar" },
    ];
  }

  ngOnInit(): void {
  }

}