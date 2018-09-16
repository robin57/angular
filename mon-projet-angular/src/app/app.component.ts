import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilOne = 'TOTO';
  appareilTwo = 'TAT';
  appareilThree = 'TITI';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('HOP HIOP HOP', this.appareilThree);
  }

}
