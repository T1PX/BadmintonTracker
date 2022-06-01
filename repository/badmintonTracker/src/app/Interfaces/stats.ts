export class Stats {
  constructor(
    public oppNonForcedError: number,
    public smash: number,
    public netPlay: number,
    public drop: number,
    public feint: number,
    public longCourt: number
  ){}
  perStats:PerStats;
  setPerStats(){
    let total = (this.drop+this.feint+this.longCourt+this.netPlay+this.oppNonForcedError+this.smash);
    this.perStats.perDrop = this.drop/total;
    this.perStats.perFeint = this.feint/total;
    this.perStats.perLongCourt = this.longCourt/total;
    this.perStats.perNetPlay = this.netPlay/total;
    this.perStats.perOppNonForcedError = this.oppNonForcedError/total;
    this.perStats.perSmash = this.smash/total;
  }
  getPerStats(){
    return this.perStats;
  }
    
}

export interface PerStats{
    perOppNonForcedError: number;
    perSmash: number;
    perNetPlay: number;
    perDrop: number;
    perFeint: number;
    perLongCourt: number;
}