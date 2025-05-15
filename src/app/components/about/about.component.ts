import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  abouts: any[] = [];

  constructor (private aboutService : AboutService) {};

  ngOnInit(): void {
    this.abouts = this.aboutService.abouts
  }
}
