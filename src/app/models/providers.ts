/** Provider Interface */
export interface Provider {
  name: string;
  specialty: string;
}

/** Provider Response */
export interface ProviderResults {
  results: Provider[];
}
