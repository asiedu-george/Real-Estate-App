import { Component, input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  public images = input<string[]>([])
  public currentSlideIndex: number = 0

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide()
    }, 3000)
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images().length
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images().length) % this.images().length
  }
}