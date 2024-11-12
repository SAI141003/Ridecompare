import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Location, RideComparisonState } from "../types/RideTypes";
import { LocationInput } from "../components/LocationInput";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [state, setState] = React.useState<RideComparisonState>({
    pickup: null,
    dropoff: null,
    prices: [],
    loading: false,
    error: null
  });

  const handlePickupSelect = (location: Location) => {
    setState(prev => ({ ...prev, pickup: location }));
  };

  const handleDropoffSelect = (location: Location) => {
    setState(prev => ({ ...prev, dropoff: location }));
  };

  const handleCompare = () => {
    if (state.pickup && state.dropoff) {
      navigation.navigate("Comparison", {
        pickup: state.pickup,
        dropoff: state.dropoff
      });
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.greeting}>Hi there,</label>
      <label style={styles.title}>Where are you going?</label>
      
      <flexboxLayout style={styles.inputContainer}>
        <flexboxLayout style={styles.locationDots}>
          <label style={styles.dot}>●</label>
          <label style={styles.line}>|</label>
          <label style={styles.dot}>●</label>
        </flexboxLayout>
        
        <stackLayout style={styles.inputs}>
          <LocationInput
            placeholder="Current location"
            onLocationSelect={handlePickupSelect}
          />
          <LocationInput
            placeholder="Enter destination"
            onLocationSelect={handleDropoffSelect}
          />
        </stackLayout>
      </flexboxLayout>

      <button
        style={[styles.button, !state.pickup || !state.dropoff ? styles.buttonDisabled : null]}
        text="Compare Rides"
        isEnabled={!!(state.pickup && state.dropoff)}
        onTap={handleCompare}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#ffffff"
  },
  greeting: {
    fontSize: 16,
    color: "#6b6b6b",
    marginBottom: 8
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#000000"
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 32
  },
  locationDots: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
    marginTop: 22
  },
  dot: {
    fontSize: 12,
    color: "#000000",
    marginVertical: 4
  },
  line: {
    fontSize: 16,
    color: "#000000",
    marginVertical: 2
  },
  inputs: {
    flex: 1
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#000000",
    padding: 16,
    borderRadius: 8,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  buttonDisabled: {
    opacity: 0.5
  }
});