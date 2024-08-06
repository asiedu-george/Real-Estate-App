import { NgIf } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
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