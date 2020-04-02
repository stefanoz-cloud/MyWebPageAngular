import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit() {
  }
  getUrl() {
    return 'url(\'http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg\')';
  }
  next() {
    this.router.navigate(['education']);
  }

}
