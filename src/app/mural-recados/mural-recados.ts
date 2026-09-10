import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural-recados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css'
})
export class MuralRecados {
  recados: string[] = [
    'recado 1',
    'recado 2',
    'recado 3',
    'recado 4'
  ];

  recadoSelecionado: string = '';


  novoRecado: string = '';


  recadoLido: boolean = false;

  
  curtidas: number = 0;

  selecionarRecado(recado: string): void {
    this.recadoSelecionado = recado;
    this.recadoLido = false;
  }

  publicarRecado(): void {
    if (this.novoRecado.trim() !== '') {
      this.recados.push(this.novoRecado.trim());
      this.novoRecado = '';
    }
  }

  alternarLido(): void {
    this.recadoLido = !this.recadoLido;
  }

  curtir(): void {
    this.curtidas++;
  }
}