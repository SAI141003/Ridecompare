import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Location } from "../types/RideTypes";

interface LocationInputProps {
  placeholder: string;
  onLocationSelect: (location: Location) => void;
}

export function LocationInput({ placeholder, onLocationSelect }: LocationInputProps) {
  const [address, setAddress] = React.useState("");

  const handleSubmit = () => {
    // For demo purposes, using mock coordinates
    const mockLocation: Location = {
      latitude: 37.7749,
      longitude: -122.4194,
      address: address
    };
    onLocationSelect(mockLocation);
  };

  return (
    <flexboxLayout style={styles.container}>
      <textField
        style={styles.input}
        hint={placeholder}
        text={address}
        onTextChange={(args) => setAddress(args.value)}
        returnKeyType="done"
        onReturnPress={handleSubmit}
        color="black"
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f8f8f8",
    color: "#000000",
    fontSize: 16
  }
});