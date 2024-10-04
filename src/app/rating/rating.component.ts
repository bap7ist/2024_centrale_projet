import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent implements OnChanges {
  rating: boolean[] = [false, false, false, false, false];

  @Input() rate: number;

  public ngOnChanges(): void {
    this.updateRating();
  }

  private updateRating(): void {
    this.rating = Array(5)
      .fill(false)
      .map((_, index) => index < this.rate);
  }
}
