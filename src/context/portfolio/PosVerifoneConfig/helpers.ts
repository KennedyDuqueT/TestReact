import { PosProvider, PosVerifone, PosVerifoneMapped } from '@/models/portfolio';

export const mapPosVerifoneItems = (items: PosVerifone[], providers: PosProvider[]): PosVerifoneMapped[] =>
  items.map((posVerifoneItem) => {
    const posProvider = providers.find((provider) => provider.id === posVerifoneItem.provider);

    return {
      ...posVerifoneItem,
      provider: posProvider?.name,
      commission: posProvider?.commission,
    };
  }) as PosVerifoneMapped[];
