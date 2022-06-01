import { AfterViewInit, Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Player } from '../Interfaces/player';
import { DataService } from '../shared/data-service';
@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.page.html',
  styleUrls: ['./detail-player.page.scss'],
})
export class DetailPlayerPage implements OnInit  {

  constructor(public dataService:DataService) { }
  deviceSize:number;
  ngOnInit() {
    this.deviceSize=(window.innerWidth)/2;
  }
}
