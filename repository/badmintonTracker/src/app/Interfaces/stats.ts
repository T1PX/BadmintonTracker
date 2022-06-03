export class Stats {
  constructor(
    public oppNonForcedError: number,
    public smash: number,
    public netPlay: number,
    public drop: number,
    public feint: number,
    public longCourt: number,
    public perStats?: PerStats
  ){}
}

export interface PerStats{
    perOppNonForcedError: number;
    perSmash: number;
    perNetPlay: number;
    perDrop: number;
    perFeint: number;
    perLongCourt: number;
}