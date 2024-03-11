import React from "react";
import { View, Text } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className="overflow-auto">
			<ScrollView>
				<View className="p-10">
					<Text className="font-bold text-3xl self-center">
						Expense
					</Text>
				</View>

				{/* Chart */}
				<View className="w-[400px] h-[300px] bg-blue-200 rounded-[20px]"></View>
				<View className="mt-[20px] w-200 h-[500px] bg-blue-200 rounded-[20px] divide-y divide-gray-500">
					<Text className="p-[20px] text-lg font-bold">
						Transactions
					</Text>
					<Text>Hello</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
