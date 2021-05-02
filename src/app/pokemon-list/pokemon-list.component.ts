import { Component } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {



  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      name: 'Bulbasaur',
      number: 1,
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      name: 'Ivysaur',
      number: 2,
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      name: 'Venosaur',
      number: 3,
      types: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      name: 'Charmandar',
      number: 4,
      types: [
        Type.Fire,
      ]
    },
    
    
    
    

  ];

}


