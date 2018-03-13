import { Component, OnInit } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {


  tours: Tour[] = [new Tour("Some title1", "Some description", "Some city", "src", 200), 
  new Tour("Some title2", "Some description", "Some city", "src", 200),
  new Tour("Some title3", "Some description", "Some city", "src", 200),
  new Tour("Some title4", "Some description", "Some city", "src", 200)];

  currentTour: Tour = new Tour("", "", "", "", "");

  isOpenDetails: boolean = false;
  constructor() { }


  ngOnInit() {
  }

  openTourDetails(tour) {
    this.currentTour = tour;
    this.isOpenDetails = true;
  }

}
