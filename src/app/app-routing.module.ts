import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {SpareTimeComponent} from './spare-time/spare-time.component';
import {EducationComponent} from './education/education.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'spare-time', component: SpareTimeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
