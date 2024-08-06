import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public logo: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722528919/xxugmpsqn4lx8bduc1dx.svg'
  public phoneIcon: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722502535/a4tu7g2evi4glcvlivaj.svg'
  public image_one: string =  'https://img.freepik.com/free-photo/neoclassical-style-interior-design-with-decor-furnishings_23-2151199399.jpg?t=st=1722932303~exp=1722935903~hmac=3a45450114e3afcb2a811a34088a10f6486b582f0a5d29196f5f3ee6d012b86e&w=1380'
  public image_two: string = 'https://img.freepik.com/free-photo/small-juvenile-bedroom-arrangement_23-2151113860.jpg?t=st=1722934358~exp=1722937958~hmac=3d16c791a3612caf68cd0051262f8341da321cb1a30edd6c5bf49f1035e2c536&w=1380'
  public image_three: string = 'https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199301.jpg?t=st=1722934404~exp=1722938004~hmac=ed2c4e735c981074f8e8d43e5cd174061d7d102813a42e7d650d4186dd1698f0&w=1380'
  public image_four: string = 'https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199346.jpg?t=st=1722934466~exp=1722938066~hmac=f58758618af5dd08e9643544f6aa922050580a9332cc0a8a3b7df4273cc60757&w=1380'
  public right_arrow: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722937536/cwprycg1fcsdwudixhtv.svg'
  public menuIcon: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722942001/k7hfkhhwfsjy2jpn18qi.svg'
}