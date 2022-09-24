import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';

  public apiTime = '';

  public requisicao:any;

  public ApiReturn = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(){

    

    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.apiService.getTime().pipe(
      catchError((err) => {
        this.apiTime = 'Falha na comunicação com o servidor 2.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiTime = response.time;
      }
    });

    this.requisicao = {};
    
   }
   enviar(frm: FormGroup){
    this.apiService.env(this.requisicao).pipe(
      catchError((err) => {
        this.requisicao = 'Falha na comunicação com o servidor';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
       
      this.ApiReturn = this.requisicao.nome

      }

   })
   }
  }