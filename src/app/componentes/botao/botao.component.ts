import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input({ required: true, alias: "plano" }) plano: string = '';

  @Input({ required: true, alias: "estilo" }) estilo: 'branco' | 'roxo' = 'branco';

  @Input({ alias: "desabilitar" }) desabilitar: boolean = false

  @Output() emitindoEventoClick = new EventEmitter<void>();

  botaoClicado() {
    this.emitindoEventoClick.emit();
  }


}