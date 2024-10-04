export interface Restaurant {
  id: number;
  name: string;
  adresse: string;
  note: number;
  avis: Avis[];
}

export interface Avis {
  user: string;
  date: Date;
  com: string;
  note: number;
}
