import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  title = 'simpleCRM';
  superPower = 'ironman';
  tax = 25;
  page_heading ="Welcome to ARC Tutorial";
  userObject= { "firstName": "Arc", "lastName": "Tutorial"}
  success_message = true;
  

  contacts = [
    {
      firstName: 'Athar',
      lastName: 'Kazmi',
      Id: 1424,
    },

    {
      firstName: 'Sania',
      lastName: 'Khan',
      Id: '1258',
    },

    {
      firstName: 'Manha',
      lastName: 'Kazmi',
      Id: '0117',
    },

    {
      firstName: 'Zimal',
      lastName: 'Kazmi',
      Id: '1130',
    },

    {
      firstName: 'Mohammad',
      lastName: 'Omer-Kazmi',
      Id: '0424',
    },
    // {
    //   'First Name': 'Athar',
    //   'Last Name': 'Kazmi',
    //   Id: 3642,
    // },
    // {
    //   'First Name': 'Sanis',
    //   'Last Name': 'Khan',
    //   Id: 2458,
    // },
    // {
    //   'First Name': 'Munha',
    //   'Last Name': 'Kazmi',
    //   Id: 9658,
    // },
    // {
    //   'First Name': 'Zimal',
    //   'Last Name': 'Kazmi',
    //   Id: 1130,
    // },
  ];
}
