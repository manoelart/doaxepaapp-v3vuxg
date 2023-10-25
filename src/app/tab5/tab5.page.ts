import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {
  constructor() {}
  option = {
    slidesPerView: 2.0,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
}
