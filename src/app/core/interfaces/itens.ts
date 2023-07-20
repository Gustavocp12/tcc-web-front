export interface Itens {
  ID: number;
  nome: string;
  foto: File;
  precoPadrao: number;
  precoPromocional: number;
  descricao: string;
  estoque: number;
  ID_categoria: number | null;
}
