import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-conteudo',
  imports: [RouterLink],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.css'
})
export class Conteudo {

  @Input() photoCover!: string;
  @Input() conteudoTitle!: string;
  @Input() conteudoDescription!: string;
  private id!: number;

  constructor(
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.route.paramMap.subscribe(value => {this.id = Number(value.get('id')); this.setValuesToComponent(this.id);});
  }

  setValuesToComponent(id:number) {
    // Lógica para definir os valores do componente com base no ID
    // Por exemplo, buscar dados de um serviço usando o ID
    const result = dataFake.filter(article => article.id == id)[0];
    if (result) {
      this.photoCover = result.photoCover;
      this.conteudoTitle = result.conteudoTitle;
      this.conteudoDescription = result.conteudoDescription;
   }
  }
}
