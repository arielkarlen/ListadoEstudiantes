import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
listadoEstudiantes:any[]=[
  {nombre: "Ariel Karlen", estado:"Regular"},
  {nombre: "Joaquin Karlen", estado:"Promocionado"},
  {nombre: "Agustin Karlen", estado:"Regular"},
  {nombre: "Ignacio Karlen", estado:"Recursante"},
]

mostrar=true

mostrarNoMostrar() {
  this.mostrar=!this.mostrar
}

}
