import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
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
      nombre:new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
      tipo:new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      estado:new FormControl(),
      habilidad:new FormControl('',[Validators.required]),
      administradoresId:new FormControl()
  })

  get nombrev(){
    return this.planetForm.get('nombre')
  }
  get tipov(){
    return this.planetForm.get('tipo')
  }
  get descripcionv(){
    return this.planetForm.get('descripcion')
  }
  get habilidadv(){
    return this.planetForm.get('habilidad')
  }

  nombre = ""
  tipo = ""
  descripcion = "Esto es un planeta"
  habilidad = ""
  estado = true

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