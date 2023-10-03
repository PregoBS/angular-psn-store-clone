import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: GameData[] = [];

  constructor() {
    this.games = [
      {
        cover: "assets/fifa24.webp",
        label: "DIGITAL",
        type: "DIGITAL | PS4",
        price: "R$ 229,99",
      },
      {
        cover: "assets/cod.jpg",
        label: "EXCLUSIVE",
        type: "DISC | PS5",
        price: "R$ 269,99",
      },
      {
        cover: "assets/fortnite.webp",
        label: "BEST OF YEAR",
        type: "DIGITAL | PS5",
        price: "R$ 369,99",
      },
      {
        cover: "assets/cyberpunk2077.webp",
        label: "NEW",
        type: "DIGITAL | PS3 PS4 PS5",
        price: "R$ 369,99",
      },
      {
        cover: "assets/mk1.webp",
        label: "NEW",
        type: "DIGITAL | PS3 PS4 PS5",
        price: "R$ 369,99",
      },
      {
        cover: "assets/baldursgate.webp",
        label: "NEW",
        type: "DIGITAL | PS3 PS4 PS5",
        price: "R$ 369,99",
      },
    ];
  }

  ngOnInit(): void {
  }

}