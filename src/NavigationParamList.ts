import { Location } from './types/RideTypes';

export type MainStackParamList = {
  Home: undefined;
  Comparison: {
    pickup: Location;
    dropoff: Location;
  };
};