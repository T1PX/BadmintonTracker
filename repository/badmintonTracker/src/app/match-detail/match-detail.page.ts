import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

}
