import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-planeta',
  templateUrl: './crear-planeta.component.html',
  styleUrls: ['./crear-planeta.component.css']
})
export class CrearPlanetaComponent implements OnInit {

  constructor() { }

  imageUrl = ""

  ngOnInit(): void {
  }

    planetForm=new FormGroup({
    idplaneta:new FormControl(),
    nombre:new FormControl(),
    descripcion:new FormControl(),
    tipo:new FormControl(),
    habilidad:new FormControl(),
    disponibilidad:new FormControl(),
  })

  nombre = "Mustafar"
  habilidad = ""
  tipo = "tipo 1"
  descripcion = ""
  disponibilidad = false

    onselectImage(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
      }
    }
  }



  submit(form:any){
    console.log(this.planetForm.value)
    //this.service.addPlaneta(this.planetForm.value).subscribe()
  }

}
