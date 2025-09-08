import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BotaoComponent } from './botao/botao.component';



@NgModule({
  declarations: [
    CardComponent,
    BotaoComponent
  ],
  exports: [
    CardComponent,
    BotaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
