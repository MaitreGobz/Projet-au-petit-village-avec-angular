import { Component } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
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

