import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  model = 'projects';
  constructor(private httpClient: HttpClient) { }

  getURL() {
    return `${BASE_URL}${this.model}`;
  }

  getURLForId(id) {
    return `${this.getURL()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getURL());
  }

  create(project) {
    return this.httpClient.post(this.getURL(), project);
  }
  update(project) {
    return this.httpClient.patch(this.getURLForId(project.id), project);
  }
  delete(projectId) {
    return this.httpClient.delete(this.getURLForId(projectId));
  }

}
