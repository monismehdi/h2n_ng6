import { Component,Input, OnInit } from '@angular/core';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemId: number;
  item;

  constructor(private hachkerNAS : HackernewsApiService) { }

  ngOnInit() {
    this.hachkerNAS.fetchItem(this.itemId).subscribe(data => {
      this.item = data
    },
    error => console.log('Could not load item'+ this.itemId));
  }

}
