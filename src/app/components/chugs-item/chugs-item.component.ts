import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Chug } from 'src/app/models/chug';

@Component({
  selector: 'app-chugs-item',
  templateUrl: './chugs-item.component.html',
  styleUrls: ['./chugs-item.component.scss']
})
export class ChugsItemComponent implements OnInit {
  @Input() chug: Chug;

  public duration = 0;
  public symbol = '';
  public color = '';
  public username = '';

  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.duration = this.chug.card.chug_duration_ms;
    this.symbol = this.cardsService.getSymbol(this.chug.card);
    this.color = this.cardsService.getColor(this.chug.card);
    this.username = this.chug.user.username;
  }
}
