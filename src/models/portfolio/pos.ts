import { Catalog } from '../commons';

export interface PosProvider extends Catalog {
  commission: number;
}

export interface PosVerifone extends Catalog {
  provider: number;
  commission?: number;
}

export interface PosVerifoneMapped extends Catalog {
  provider: string;
  commission: number;
}
