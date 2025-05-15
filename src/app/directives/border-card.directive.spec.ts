import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef(document.createElement('div'));
    const directive = new BorderCardDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
