import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
