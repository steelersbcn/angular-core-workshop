import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
