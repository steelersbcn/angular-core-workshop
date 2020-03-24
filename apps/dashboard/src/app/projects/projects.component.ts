import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  primaryColor = 'red';
  selectedProject: Project;


  constructor(private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.getProjects()
  }

  selectProject(project) {
    this.selectedProject = project;
  }

/*   getProjects() {
    this.projectsService.all()
      .subscribe((res: Project[])  => this.projects = res);
  } */
  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe((res: any) => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }
}
