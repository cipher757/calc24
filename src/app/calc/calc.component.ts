import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
   num1: number = 0;
   num2: number = 0;
   num3: number = 0;
   num4: number = 0;
   num5: number = 0;
   num6: number = 0;
   num7: number = 0;
   num8: number = 0;
   soma: number = 0;
   subtracao: number = 0;
   multiplicacao: number = 0;
   divisao: number = 0;

   calc(){
     this.soma = this.num1 + this.num2; 
   }

   calc2(){
    this.subtracao = this.num3 - this.num4;
   }

   calc3(){
    this.multiplicacao = this.num5 * this.num6;
   }

   calc4(){
    this.divisao = this.num7 / this.num8;
   }
}
