import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  infos = [
    {
      title: 'Au Petit Village',
      text: `Au Petit Village est une boutique en ligne spécialisée dans la vente de 
            figurines inspirées de l’univers d’Astérix. Que vous soyez collectionneur 
            ou simple amateur des aventures de nos célèbres Gaulois, vous y trouverez 
            une sélection de figurines de qualité représentant Astérix, Obélix, Idéfix, 
            Panoramix, et bien d’autres personnages emblématiques.`,
      img: 'assets/images/Logo2.jpg',
      alt: 'Logo au petit village'
      
    }
  ]
  constructor() { }
}
