import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-listings',
  templateUrl: './home-listings.component.html',
  styleUrl: './home-listings.component.scss'
})
export class HomeListingsComponent {
  public dropdowns: { [key in 'status' | 'price' | 'bedBath' | 'homeType']: boolean } = {
    status: false,
    price: false,
    bedBath: false,
    homeType: false
  };

  toggleDropdown(dropdown: keyof typeof this.dropdowns): void {
    Object.keys(this.dropdowns).forEach(key => {
      this.dropdowns[key as keyof typeof this.dropdowns] = (key === dropdown) 
      ? !this.dropdowns[key as keyof typeof this.dropdowns] : false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const header = document.getElementById('filter')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }
}