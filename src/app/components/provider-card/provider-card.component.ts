import { Component, OnInit, Input } from '@angular/core';
import { Provider } from 'src/app/models/providers';

/**
 * Provider card component
 */
@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {

  /** Single Provider */
  @Input() provider: Provider;

  constructor() { }

  ngOnInit(): void {
  }

}
