import { Musica } from "./musica";

export interface Ensaio {
    ano: number;
    nome: string;
    descricao: string;
    localEvento: string;
    periodoEvento: string;
    mesReferencia: string;
    musicas?: Musica[]


}
