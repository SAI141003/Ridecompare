import { Location, RidePrice } from '../types/RideTypes';

// Mock service for demo purposes
export async function getRidePrices(pickup: Location, dropoff: Location): Promise<RidePrice[]> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock response data
  return [
    {
      service: 'Uber X',
      estimate: 25.50,
      currency: '$',
      duration: 15,
      distance: 5.2
    },
    {
      service: 'Uber Black',
      estimate: 45.00,
      currency: '$',
      duration: 15,
      distance: 5.2
    },
    {
      service: 'Lyft',
      estimate: 23.50,
      currency: '$',
      duration: 16,
      distance: 5.2
    },
    {
      service: 'Lyft Plus',
      estimate: 35.50,
      currency: '$',
      duration: 16,
      distance: 5.2
    }
  ];
}