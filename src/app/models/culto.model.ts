import { Musica } from "./musica";

export interface Culto {
    id: number;
    ano: number;
    nome: string;
    descricao: string;
    localEvento: string;
    periodoEvento: string;
    mesReferencia: string;
    musicas?: Musica[]


}
