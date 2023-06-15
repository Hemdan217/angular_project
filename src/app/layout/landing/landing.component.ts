import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  ngOnInit() {
    AOS.init({ disable: 'mobile' }); //AOS - 2
    AOS.refresh();
  }
}
