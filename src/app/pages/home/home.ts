import { Component, OnInit } from '@angular/core';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";
import { MenuBar } from "../../components/menu-bar/menu-bar";
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuTitle, BigCard, SmallCard, MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  smallCardItems: any[] = [];
  bigCard: any;

  ngOnInit(): void {
    // copia + ordena uma única vez (para não mutar o array original)
    const sorted = [...dataFake].sort((a, b) => b.id - a.id);

    // 1º mais recente para o BigCard
    this.bigCard = sorted[0];

    // próximos 3 para os SmallCards
    this.smallCardItems = sorted.slice(1, 4);
  }

  trackById(_i: number, item: any) {
    return item.id;
  }
}
