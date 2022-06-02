import { AfterViewInit, Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../Interfaces/player';
import { DataService } from '../shared/data-service';
@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.page.html',
  styleUrls: ['./detail-player.page.scss'],
})
export class DetailPlayerPage implements OnInit  {

  constructor(public dataService:DataService, private router:Router) { }
  deviceSize:number;
  ngOnInit() {
    this.deviceSize=(window.innerWidth)/2;
  }

  goMatchDetail(match){
    this.dataService.selectedMatch=match;
      this.router.navigate(['/tabs/tabs/match-detail']);
  }
}
