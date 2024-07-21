import { Musica } from "./musica";

export interface Culto {
    id: number;
    ativo: boolean;
    ano: number;
    nome: string;
    descricao: string;
    localEvento: string;
    periodoEvento: string;
    mesReferencia: string;
    datasEvento: string;
    musicas?: Musica[];
    observacoes?: string;
    linkFormulario?: string;


}
