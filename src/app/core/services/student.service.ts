import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) { }

  save(student: Student) {
    return this.http.post<Student>(`${this.apiUrl}`, student);
  }

  update(id: number, student: Student) {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  findById(id: number) {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  findAll() {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
