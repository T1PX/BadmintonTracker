import{ Stats } from './stats';
export class Player {
    constructor(){}
    name: '';
    score: 0;
    category?:string;
    stats?: Stats;
    statsAgainst?: Stats;
    totalStats: Stats;
    totalStatsAgainst?: Stats;
    photo?: string;

    getName(){
        return this.name;
    }
    setName(newName){
        this.name=newName;
    }
    getScore(){
        return this.score;
    }
    setScore(newScore){
        this.score=newScore;
    }
    getCategory(){
        return this.category;
    }
    setCategory(newCategory){
        this.category=newCategory;
    }
    getStats(){
        return this.stats;
    }
    setStats(newStats){
        this.stats=newStats;
    }
    getStatsAgainst(){
        return this.statsAgainst;
    }
    setStatsAgainst(newStatsAgainst){
        this.statsAgainst=newStatsAgainst;
    }
    getPhoto(){
        return this.photo;
    }
    setPhoto(newPhoto){
        this.photo=newPhoto;
    }
     
  }