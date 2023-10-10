import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { valores, valoresPost } from './Model/respostaModel';

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent {
constructor(public servico:ServerService){
}

val:valores[]=[];
client: valoresPost={} as valoresPost;
clientResult: valoresPost={} as valoresPost;
vItemNome: string = "";
vItemJob: string = "";

chamadaBack(){
  this.val=[];
  this.clientResult={}as valoresPost;
  //serviço chama o ServerService e assina o serviço e ja
  this.servico.getTodosUsuarios().subscribe(
    (resposta : any)=>
    {
      console.log(resposta.data);
      this.val = (resposta.data);
      console.log(this.val);
    }
  )
}

chamadaBackPost(){
  this.val=[];
  this.clientResult={}as valoresPost;    
  this.client = {name:this.vItemNome, job:this.vItemJob}
  this.servico.postUsuario(this.client).subscribe(
    (resp : any)=>
  {
    this.clientResult = (resp);
    console.log(this.clientResult);
  })    
}


}
