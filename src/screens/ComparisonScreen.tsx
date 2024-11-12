import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { RideCard } from "../components/RideCard";
import { getRidePrices } from "../services/rideService";
import { RidePrice } from "../types/RideTypes";
import { Utils } from "@nativescript/core";

type ComparisonScreenProps = {
  route: RouteProp<MainStackParamList, "Comparison">;
  navigation: FrameNavigationProp<MainStackParamList, "Comparison">;
};

export function ComparisonScreen({ route }: ComparisonScreenProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [prices, setPrices] = React.useState<RidePrice[]>([]);

  React.useEffect(() => {
    loadPrices();
  }, []);

  const loadPrices = async () => {
    try {
      setLoading(true);
      setError(null);
      const results = await getRidePrices(route.params.pickup, route.params.dropoff);
      setPrices(results);
    } catch (err) {
      setError("Failed to load ride prices. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRideSelect = (ride: RidePrice) => {
    Utils.openUrl(`https://${ride.service.toLowerCase()}.com`);
  };

  if (loading) {
    return (
      <flexboxLayout style={styles.centerContainer}>
        <activityIndicator busy={true} style={styles.loading} color="#000000" />
        <label style={styles.loadingText}>Finding your rides...</label>
      </flexboxLayout>
    );
  }

  if (error) {
    return (
      <flexboxLayout style={styles.centerContainer}>
        <label style={styles.error}>{error}</label>
        <button text="Try Again" onTap={loadPrices} style={styles.retryButton} />
      </flexboxLayout>
    );
  }

  return (
    <scrollView style={styles.container}>
      <flexboxLayout style={styles.header}>
        <stackLayout style={styles.locationInfo}>
          <label style={styles.locationLabel}>PICKUP</label>
          <label style={styles.locationText}>{route.params.pickup.address}</label>
          
          <label style={styles.locationLabel}>DROPOFF</label>
          <label style={styles.locationText}>{route.params.dropoff.address}</label>
        </stackLayout>
      </flexboxLayout>
      
      <stackLayout style={styles.rideList}>
        {prices.map((ride, index) => (
          <RideCard
            key={index}
            ride={ride}
            onSelect={() => handleRideSelect(ride)}
          />
        ))}
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff"
  },
  centerContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2"
  },
  locationInfo: {
    marginBottom: 16
  },
  locationLabel: {
    fontSize: 12,
    color: "#6b6b6b",
    marginBottom: 4,
    fontWeight: "bold"
  },
  locationText: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 16
  },
  rideList: {
    padding: 16
  },
  loading: {
    width: 32,
    height: 32,
    marginBottom: 16
  },
  loadingText: {
    fontSize: 16,
    color: "#6b6b6b"
  },
  error: {
    fontSize: 16,
    color: "#ff0000",
    textAlignment: "center",
    marginBottom: 16
  },
  retryButton: {
    fontSize: 16,
    color: "white",
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 8,
    width: 120
  }
});