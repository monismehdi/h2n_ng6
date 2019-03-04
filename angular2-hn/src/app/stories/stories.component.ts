import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HackernewsApiService } from '../hackernews-api.service';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items: number[];

  constructor(private hackerNewsApiService : HackernewsApiService) { 
    // this.items = Array(30)
  }

  ngOnInit() {
    this.hackerNewsApiService.fetchStories()
    .subscribe(
      items => this.items = items,
      error => console.log(error)
    )
  }

}
