import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './pages/chile/chile.component';
import { PeruComponent } from './pages/peru/peru.component';
import { UruguayComponent } from './pages/uruguay/uruguay.component';

const routes: Routes = [
  {path:'', component:PeruComponent},
  {path:'peru', component:PeruComponent},
  {path:'chile', component:ChileComponent},
  {path:'uruguay', component:UruguayComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
