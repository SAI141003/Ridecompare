export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface RidePrice {
  service: string;
  estimate: number;
  currency: string;
  duration: number;
  distance: number;
}

export interface RideComparisonState {
  pickup: Location | null;
  dropoff: Location | null;
  prices: RidePrice[];
  loading: boolean;
  error: string | null;
}