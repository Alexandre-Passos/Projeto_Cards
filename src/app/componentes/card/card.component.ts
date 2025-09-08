import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input({required: true}) plano: string = '';

  @Input({required: true, alias: "preco"}) precoPlano: number = 0;

  @Input({required: true}) estilo: 'laranja' | 'roxo' = 'laranja'

  @Output('clicado') botaoClicado = new EventEmitter<void>();

  botaoClick(){
    console.log("Esse botão...")
    this.botaoClicado.emit();
  }
}
