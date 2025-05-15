import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
  ];

  abouts = [
    {
      title: 'Notre histoire',
      text: `Fondée en 2021 par deux passionnés de bande dessinée, Au Petit Village est née de l’envie de partager 
            l’univers coloré et humoristique d’Astérix et Obélix avec un public toujours plus large. Installés au 
            cœur d’une petite commune provençale, nous avons commencé par animer des ateliers de création de figurines 
            artisanales, façonnées à la main à partir de résine écologique.

            Très vite, la communauté de collectionneurs s’est agrandie grâce à notre engagement pour la qualité et l’authenticité : 
            chaque pièce est peinte minutieusement, dans le respect de l’esprit graphique d’Uderzo et Goscinny, sans jamais tomber 
            dans la copie, pour vous offrir une véritable ode à l’imaginaire gaulois. En 2023, nous avons lancé notre boutique en ligne, 
            permettant aux fans du monde entier de commander des figurines exclusives, des éditions limitées et des pièces titrées numériquement.`,
      mission: `Notre mission ? Faire vivre la convivialité légendaire des banquets gaulois dans votre salon ! Qu’il s’agisse d’un cadeau 
                pour un proche ou d’un ajout précieux à votre collection, chaque figurine est accompagnée d’une fiche détaillée retraçant 
                son histoire, son caractère et les anecdotes croustillantes tirées de la BD.`,
      img: 'assets/images/Banquet.jpg',
      alt: 'Image du banquet gaulois',
    }
  ]
  constructor() { }
}
