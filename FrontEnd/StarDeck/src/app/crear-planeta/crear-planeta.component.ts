import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crear-planeta',
  templateUrl: './crear-planeta.component.html',
  styleUrls: ['./crear-planeta.component.css']
})
export class CrearPlanetaComponent implements OnInit {

  constructor(private api:ApiService) { }

  imageUrl = ""

  ngOnInit(): void {
  }

    planetForm=new FormGroup({
      id:new FormControl(),
      nombre:new FormControl(),
      tipo:new FormControl(),
      descripcion:new FormControl(),
      estado:new FormControl(),
      habilidad:new FormControl(),
      administradoresId:new FormControl()
  })

  nombre: string = "Mustafar"
  tipo = ""
  descripcion = "Esto es un planeta"
  habilidad = ""
  estado = 0

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
    form.id =  ("P-" + Math.floor(Math.random() * (900000000000 - 3 + 1) + 3)).toString(); //asignar un ID random
    //form.imagen = this.imageUrl
    form.administradoresId = "1";

    console.log(this.planetForm.value)

    this.api.addPlaneta(form).subscribe(data=>{
      //let dataResponse:StatusI = data;
      console.log(data)
    });

  }

}