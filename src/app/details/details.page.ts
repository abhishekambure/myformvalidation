import { Component, OnInit } from '@angular/core';
import { ThirdpagePage } from '../thirdpage/thirdpage.page';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }
  showdata=ThirdpagePage.DataShow

  ngOnInit() {
  }

}
