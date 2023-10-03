import { Component, OnInit } from '@angular/core';
import { MenuBarFooterLink } from 'src/types';

type LinksColumn = {
  label: string;
  links: MenuBarFooterLink[]
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linksColumns: LinksColumn[] = [];

  constructor() {
    this.linksColumns.push({
      label: "column01",
      links: [
        { href: "#", label: "Suporte" },
        { href: "#", label: "Política de privacidade" },
        { href: "#", label: "Termos de uso do site" },
        { href: "#", label: "Mapa do site" },
        { href: "#", label: "Playstation Studios" },
        { href: "#", label: "Legal" },
        { href: "#", label: "Sobre a SIE" },
      ]
    });
    
    this.linksColumns.push({
      label: "column02",
      links: [
        { href: "#", label: "Termos de serviço da PSN" },
        { href: "#", label: "Política de cancelamento da PS Store" },
        { href: "#", label: "Avisos de saúde" },
        { href: "#", label: "Sobre as classificações" },
      ]
    });
    
    this.linksColumns.push({
      label: "column03",
      links: [
        { href: "#", label: "Facebook" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "YouTube" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Aplicativo para Android" },
        { href: "#", label: "Aplicativo para iOS" },
      ]
    });
  }

  ngOnInit(): void {
  }

}
