import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormGroup, FormControl } from '@angular/forms'
import { StylesCompileDependency } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // lat: number = 51.678418;
  // lng: number = 7.809007;

  lat;
  lng;

  constructor(private service: SearchService) { }

  results;
  answers;
  id;
  number;
  anotherOne;

  dataTwo;
  open;

  i;

  ngOnInit() {
  }

  profileForm = new FormGroup({
    price: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('')
  })

   second() {
     return this.onSubmit()
   }

  onSubmit(){
    let datas = this.profileForm.value
    let prices = this.profileForm.value.price
    console.log(prices)
    let cities = datas.city
    let states = datas.state
    this.service.getData(cities, states, prices).subscribe(data => {
      this.results = data
      this.answers = this.results.businesses
      console.log(this.answers)
      for( this.i=0; this.i<this.answers.length; this.i++) {
      }
      console.log(this.i - 1)
      this.number = Math.floor(Math.random() * this.i - 1);
      // this.id = this.answers[this.number].id
      this.lat = this.answers[this.number].coordinates.latitude
      this.lng = this.answers[this.number].coordinates.longitude
      console.log(this.lat, this.lng)
    })
  }

}
