import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { TestComponent } from './test/test.component';
import { ItemDropdownCdComponent } from './item-dropdown-cd/item-dropdown-cd.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'itemdropdown', component: ItemDropdownComponent},
  {path: 'itemdropdowncd', component: ItemDropdownCdComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
