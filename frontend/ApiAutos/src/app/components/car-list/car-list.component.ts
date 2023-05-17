import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import {NgbModal} from '@ng-bootstrap/ng'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  constructor (private carService : CarService){}
  public cars : Car[] = []

  inputPlate = ""
  plate = ""




  ngOnInit() : void{
    this.carService.getAll().subscribe(response => {
      this.cars = response 
    }, error => {alert ("No se pudieron obtener los autos")})
  }


  view (ver: any, car : Car){
    this.inputPlate = car.plate

    this.modalService.open(ver).result.then(() => {
      if (this.inputPlate.trim() !== '')

      let car = new Car()
      car.id = this.inputPlate
      this.carService.edit(car).suscribe( () => {
        location.reload()
      }, error => {
        console.error(error)
        alert ('Error: '+ error.error.message)
      })
    })
  }

  delete (id : number){
    this.carService.delete(id).subscribe (() =>{
      location.reload()
      alert ("Baja exitosa")
    }, error =>{
      console.error(error)
    })
  }

  add () {
    let car = new Car()
    

  }


}
