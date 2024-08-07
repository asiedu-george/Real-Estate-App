import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const header = document.getElementById('header')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }
}