import { Pokemon } from "./pokemon.models";

export interface Trainer {
    id: number;
    username: string;
    pokemon: Pokemon[];
}