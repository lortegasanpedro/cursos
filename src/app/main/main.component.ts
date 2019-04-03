import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public frmAlumnos: FormGroup;
  public frmCursos: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  addAlumno() {
    if (this.frmAlumnos.valid) {
      console.log ('Add Alumno');
    }
  }

  addCurso() {
    if (this.frmCursos.valid) {
      console.log ('Add Curso');
    }
  }

  private buildForm(){
    //Alumnos
    this.frmAlumnos = this.formBuilder.group({
      nombreAlumno: ['', Validators.required],
      apellidosAlumno: ['', Validators.required],
      telefonoAlumno: [null, Validators.required],
      emailAlumno: [null, Validators.required]
    });
    //Cursos
    this.frmCursos = this.formBuilder.group({
      nombreCurso: ['', Validators.required],
      horasCurso: ['', Validators.required]
    });
  }
}
