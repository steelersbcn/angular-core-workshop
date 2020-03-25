import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    MaterialModule,
  ],
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }