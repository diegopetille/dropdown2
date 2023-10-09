import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})
export class ItemDropdownComponent implements OnInit {  
  select1: any ={};
  select2 ="Selecione";
  modelo: string = "";
  modelos: any =[]; 
  album: any=[]; 
  albuns = [
    {
      id:0,
      nome:"Selecione",
      modelos:["Selecione"],
    },
    {
      id:1,
      nome:"Drama - Maria Bethânia",
      modelos:["Disco duplo - reprensagem 2022", "Original 1972 - usado em ótimas condições.", "Disco comum reprensagem 2002"],
    },
    {
      id:2,
      nome:"Amme - Alzira Espíndola",
      modelos:["Original 1993 - usado em ótimas condições", "Reprensagem disco colorido 2022 - importado"],
    },
    {
      id:3,
      nome:"Índia - Gal costa",
      modelos:["Reprensagem MR. Bongo 2018 - importado", "Original 1973 - ótimas condições"],
    },
    {
      id:4,
      nome:"Homogenic -  Björk",
      modelos:["Original importado 1997 - encarte e poster em ótimas condições", "Original 1997 Icelandic version importado disco colorido.", "Reprensagem 2017 - 20 years"],
    },
  ];


  
  constructor(){}

  ngOnInit() {
    this.select1 = 0;
    this.modelos = this.albuns.filter((x)=> x.id == this.select1)[0].modelos;
  }

  onChange(){
    this.select2 = "";
    this.modelos = this.albuns.filter((x)=> x.id == this.select1)[0].modelos;
  }

  clickButton(){
    this.album = this.albuns.find((x)=> x.id == this.select1)?.nome;
    this.modelo = this.select2;
  }


}


