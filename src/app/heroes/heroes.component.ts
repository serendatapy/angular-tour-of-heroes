import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

/*@Component is a decorator function
that specifies the Angular metadata
for the component. */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*Always export the component class
so you can import it elsewhere */
export class HeroesComponent implements OnInit {
  // all variables here are accessible from template
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  /*The ngOnInit() is a lifecycle hook.
  Angular calls ngOnInit() shortly after
  creating a component. It's a good place
  to put initialization logic. */
  ngOnInit(): void {
  }

}
