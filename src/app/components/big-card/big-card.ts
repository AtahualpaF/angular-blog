import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() cardLink: string = '';
  @Input() Id: number = 0;

}


