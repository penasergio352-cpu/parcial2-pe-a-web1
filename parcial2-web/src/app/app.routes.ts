import { Routes } from '@angular/router';
import { Aprendizaje } from './pages/aprendizaje/aprendizaje';
import { Contacto } from './pages/contacto/contacto';
import { Experiencia } from './pages/experiencia/experiencia';
import { Hojavida } from './pages/hojavida/hojavida';
import { InfoPersonal } from './pages/info-personal/info-personal';

export const routes: Routes = [
  { path: '', component: Hojavida },
  { path: 'hojavida', component: Hojavida },
  { path: 'info-personal', component: InfoPersonal },
  { path: 'experiencia', component: Experiencia },
  { path: 'contacto', component: Contacto },
  { path: 'aprendizaje', component: Aprendizaje },
  { path: '**', redirectTo: '' }
]; 