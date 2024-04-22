import { Musica } from "./musica";

export interface Culto {
    ano: number;
    nome: string;
    descricao: string;
    localEvento: string;
    periodoEvento: string;
    mesReferencia: string;
    musicas?: Musica[]


}
