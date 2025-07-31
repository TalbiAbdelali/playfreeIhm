export interface Party {
  id: number;
  date: string; // ISO format or 'YYYY-MM-DD'
  hour: string; // format 'HH:mm'
  duration: number; // duration in minutes
  location: string;
  field: string; // or Field if you have a Field model
  teamA: string; // or Team if you have a Team model
  teamB: string; // or Team if you have a Team model
  paid: boolean; // true = reserved, false = open
}
