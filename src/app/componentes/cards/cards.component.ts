import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input({ required: true, alias: "plano" }) plano: string = '';

  @Input({ required: true, alias: "estilo" }) estilo: 'branco' | 'roxo'  = 'branco';
}
