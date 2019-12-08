export interface City {
  id?: number;
  name?: string;
}

export interface Hotel {
  id?: number;
  name?: string;
  address?: string;
  description?: string;
  city?: City;
  raiting?: number;
}

export interface SelectMenuItem {
  value?: number;
  text?: string;
}
