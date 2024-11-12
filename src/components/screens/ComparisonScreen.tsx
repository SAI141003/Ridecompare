import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { getRidePrices } from "../../services/rideService";

type ComparisonScreenProps = {
    route: RouteProp<MainStackParamList, "Comparison">,
    navigation: FrameNavigationProp<MainStackParamList, "Comparison">,
};

export function ComparisonScreen({ route, navigation }: ComparisonScreenProps) {
    const [prices, setPrices] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPrices = async () => {
            const result = await getRidePrices(route.params.pickup, route.params.dropoff);
            setPrices(result);
            setLoading(false);
        };
        fetchPrices();
    }, []);

    return (
        <flexboxLayout className="p-4 flex-col h-full bg-white">
            <label className="text-xl font-bold mb-4 text-black">Available Rides</label>
            {loading ? (
                <activityIndicator busy={true} className="m-4" />
            ) : (
                <scrollView>
                    <stackLayout className="space-y-4">
                        {prices.map((price, index) => (
                            <gridLayout 
                                key={index}
                                className="p-4 border rounded-lg"
                                rows="auto, auto"
                                columns="*, auto"
                            >
                                <label row={0} col={0} className="font-bold text-black">{price.service}</label>
                                <label row={0} col={1} className="text-black">{price.currency}{price.estimate}</label>
                                <label row={1} col={0} className="text-sm text-gray-500">{price.duration} mins</label>
                                <label row={1} col={1} className="text-sm text-gray-500">{price.distance} mi</label>
                            </gridLayout>
                        ))}
                    </stackLayout>
                </scrollView>
            )}
        </flexboxLayout>
    );
}