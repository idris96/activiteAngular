import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Les Etats-Unis se retirent du Conseil des droits de l’Homme de l’ONU basé à Genève, a confirmé mardi l’ambassadrice' +
      ' américaine à l’ONU, Nikki Haley, concrétisant en décision formelle une menace de longue date.',
      loveIts: 10,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Les commentaires sont desormais classés par ordre de plébiscite. Autrement dit, plus vous recevez de votes positifs sur ' +
      'votre commentaire, plus celui-ci sera placé en tête des autres commentaires. Un conseil donc: soyez convainquants ' +
      'dans vos réactions !',
      loveIts: -10,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Veuillez ne pas poster plusieurs fois le même commentaire, car notre système de détection de spams risque de bloquer ' +
      'immédiatement vos messages. Aussi, vous êtes priés de patienter quelques minutes avant de voir apparaître votre message.' +
      ' Celui-ci peut nous ètre soumis pour validation.',
      loveIts: 0,
      created_at: new Date()
    }

  ];


}
