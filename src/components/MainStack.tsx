import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { ComparisonScreen } from "./screens/ComparisonScreen";

const StackNavigator = stackNavigatorFactory();

export function MainStack() {
    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#ffffff"
                    },
                    headerTintColor: "#000000"
                }}
            >
                <StackNavigator.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "RideCompare"
                    }}
                />
                <StackNavigator.Screen
                    name="Comparison"
                    component={ComparisonScreen}
                    options={{
                        title: "Available Rides"
                    }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
}