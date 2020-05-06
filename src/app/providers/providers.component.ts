import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { ProviderResults, Provider } from '../models/providers';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * Providers Component
 */
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit, OnDestroy {
  /** List of Providers */
  providers: Provider[];
  /** Form Group */
  form: FormGroup;
  /** Used for filtering the providers list */
  search: string;
  /** Loading boolean */
  loading = true;
  /** Form value changes subscription */
  private formSubscription: Subscription;

  /**
   * Creates an instance of ProvidersComponent
   *
   * @param fb FormBuilder
   * @param providersService ProvidersService
   */
  constructor(
    private fb: FormBuilder,
    private providersService: ProvidersService
  ) { }

  /**
   * On Init
   * Sets the form-group, watches for changes and gets the provders list
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    });
    this.formSubscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(s => this.search = s.search);

    this.getProviders();
  }

  /**
   * Unsubscribes from the form subscription
   */
  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  /**
   * Get the list of providers
   */
  getProviders() {
    this.providersService.getProviders().subscribe((res: ProviderResults) => {
      if (res) {
        this.providers = res.results;
      }
      this.loading = false;
    },
    error => {
      console.error('getProviders error', error);
    });
  }

}
