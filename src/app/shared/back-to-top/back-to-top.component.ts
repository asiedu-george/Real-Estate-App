import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollButton = document.querySelector('.top-icon') as HTMLElement
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.style.display = 'flex'
    } else {
      scrollButton.style.display = 'none'
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}