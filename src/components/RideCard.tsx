import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RidePrice } from "../types/RideTypes";

interface RideCardProps {
  ride: RidePrice;
  onSelect: () => void;
}

export function RideCard({ ride, onSelect }: RideCardProps) {
  return (
    <flexboxLayout style={styles.container} onTap={onSelect}>
      <flexboxLayout style={styles.mainInfo}>
        <stackLayout style={styles.leftContent}>
          <label style={styles.service}>{ride.service}</label>
          <flexboxLayout style={styles.details}>
            <label style={styles.detail}>{ride.duration} min</label>
            <label style={styles.dot}>•</label>
            <label style={styles.detail}>{ride.distance} km</label>
          </flexboxLayout>
        </stackLayout>
        
        <label style={styles.price}>{ride.currency}{ride.estimate}</label>
      </flexboxLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e2e2"
  },
  mainInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftContent: {
    flexDirection: "column"
  },
  service: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  details: {
    flexDirection: "row",
    alignItems: "center"
  },
  detail: {
    fontSize: 14,
    color: "#6b6b6b"
  },
  dot: {
    fontSize: 14,
    color: "#6b6b6b",
    marginHorizontal: 4
  }
});