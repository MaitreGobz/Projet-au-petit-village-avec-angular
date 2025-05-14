import { Component } from '@angular/core';
import { AboutService } from '../about.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
infos : any[] = []
  constructor(private  aboutService : AboutService) {}

  ngOnInit(): void {
    
      this.infos = this.aboutService.infos
  }
}

