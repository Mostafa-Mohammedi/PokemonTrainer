import { Pokemon } from 'src/app/models/pokemon.models';

export interface Trainer {
    id: number;
    username: string;
    pokemon: Pokemon[];
}