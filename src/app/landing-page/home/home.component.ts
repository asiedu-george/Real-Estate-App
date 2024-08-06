import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public logo: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722528919/xxugmpsqn4lx8bduc1dx.svg'
  public phoneIcon: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722502535/a4tu7g2evi4glcvlivaj.svg'
  public image_one: string =  'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722945415/deudrbxsagzn18nh3cek.jpg'
  public image_two: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722945415/nsre2grvqbdwuwekbhzi.jpg'
  public image_three: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722945415/ux1cof1rj0xg9dicakak.jpg'
  public image_four: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722945766/sunzboeyfbzlqqqrnnav.jpg'
  public right_arrow: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722937536/cwprycg1fcsdwudixhtv.svg'
  public menuIcon: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722942001/k7hfkhhwfsjy2jpn18qi.svg'
}