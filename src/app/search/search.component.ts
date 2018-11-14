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

  constructor(private service: SearchService) { }

  results;
  answers;
  id;
  number;
  anotherOne;

  dataTwo;
  open;

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
      this.number = Math.floor(Math.random() * 4);
      // this.id = this.answers[this.number].id
    })
  }

}
