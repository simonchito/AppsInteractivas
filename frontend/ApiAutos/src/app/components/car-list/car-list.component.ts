import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  constructor (private carService : CarService, private modalService :NgbModal){}
  public cars : Car[] = []

  inputPlate = ""
  plate = ""
  id : number
  inputId :number



  ngOnInit() : void{
    this.carService.getAll().subscribe(response => {
      this.cars = response 
    }, error => {alert ("No se pudieron obtener los autos")})
  }

  view (ver: any, car : Car){
    this.inputPlate = car.plate
    this.inputId = car.id

    this.modalService.open(ver).result.then(() => {
      let car = new Car()
      car.plate = this.inputPlate
      car.id = this.inputId
      this.carService.edit(car, car.id).subscribe(() => {
        location.reload()
        alert("Alta Exitosa")
        location.reload
      }, error =>{
        console.error(error)
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
    car.plate = this.plate
    this.carService.add(car).subscribe(() =>{
      location.reload()
      alert("Alta exitosa")
      location.reload
    }, error =>{
      console.error(error)
    })
  }


}
