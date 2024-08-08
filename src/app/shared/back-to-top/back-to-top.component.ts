import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  private scrollHeight: number = 200;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollButton = document.querySelector('.top-icon') as HTMLElement
    if (document.body.scrollTop > this.scrollHeight || document.documentElement.scrollTop > this.scrollHeight) {
      scrollButton.style.display = 'flex'
    } else {
      scrollButton.style.display = 'none'
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}