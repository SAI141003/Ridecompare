import * as React from "react";
import { EventData } from "@nativescript/core";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const onSearchTap = (args: EventData) => {
        navigation.navigate("Comparison", {
            pickup: {
                latitude: 37.7749,
                longitude: -122.4194,
                address: "San Francisco, CA"
            },
            dropoff: {
                latitude: 37.8044,
                longitude: -122.2711,
                address: "Oakland, CA"
            }
        });
    };

    return (
        <flexboxLayout className="p-4 flex-col justify-center items-center h-full bg-white">
            <label className="text-2xl font-bold mb-4 text-black">RideCompare</label>
            <textField 
                className="w-full p-4 mb-4 border rounded-lg text-black" 
                hint="Enter pickup location"
                returnKeyType="next"
            />
            <textField 
                className="w-full p-4 mb-6 border rounded-lg text-black" 
                hint="Enter destination"
                returnKeyType="done"
            />
            <button 
                className="bg-purple-600 text-white p-4 rounded-lg w-full"
                onTap={onSearchTap}
                text="Compare Rides"
            />
        </flexboxLayout>
    );
}