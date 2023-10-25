import { ViewChild, Component, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor() {}

  option = {
    slidesPerView: 2.0,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
}


/* const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__input');
const pictureImageTxt = 'Escolha a Imagem';
//pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function (e) {
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = readerTarget.result;
      img.classList.add('picture__img');

      pictureImage.innerHTML = '';

      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
}); */
