import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	TouchableHighlight,
	Pressable,
} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from "react-native-heroicons/solid";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

const categories = [
	"All",
	"Dining",
	"Groceries",
	"Entertainment",
	"Bill",
	"Misc",
];

const transactions = [
	{
		id: 1,
		transactionType: "expense",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
	{
		id: 2,
		transactionType: "expense",
		name: "movie",
		date: "12 Mar 2024",
		category: "Entertainment",
		amount: "20.00",
	},
	{
		id: 3,
		transactionType: "income",
		name: "misc",
		date: "12 Mar 2024",
		category: "Misc",
		amount: "20.00",
	},
	{
		id: 4,
		transactionType: "income",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
	{
		id: 5,
		transactionType: "expense",
		name: "Bill",
		date: "12 Mar 2024",
		category: "Bill",
		amount: "20.00",
	},
	{
		id: 5,
		transactionType: "expense",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
	{
		id: 5,
		transactionType: "expense",
		name: "Grocs",
		date: "12 Mar 2024",
		category: "Groceries",
		amount: "20.00",
	},
	{
		id: 5,
		transactionType: "expense",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
	{
		id: 5,
		transactionType: "expense",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
];

const HomeScreen = () => {
	const navigation = useNavigation();
	const [activeCategory, setActiveCategory] = useState("All");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<ScrollView>
				<View>
					<Text style={styles.title}>Expense</Text>
				</View>

				{/* Chart */}
				<View style={styles.chartContainer}>
					<Text style={styles.dateTitle}>Date</Text>

					{/* Chart Component */}
					<View style={styles.chartRow}>
						<ChevronLeftIcon
							size={20}
							color="black"
							style={{ marginRight: 10 }}
						/>
						<View style={styles.chart}></View>
						<ChevronRightIcon
							size={20}
							color="black"
							style={{ marginLeft: 10 }}
						/>
					</View>

					{/* Buttons */}
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							height: 100,
						}}
					>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.categoryButtonRow}
						>
							{categories.map((cat) => {
								if (cat == activeCategory) {
									// show gradient category
									return (
										<Pressable
											style={[styles.categoryButton]}
										>
											<Text>{cat}</Text>
										</Pressable>
									);
								} else {
									// show normal category
									return (
										<Pressable
											onPress={() =>
												setActiveCategory(cat)
											}
											key={cat}
											style={
												styles.selectedCategoryButton
											}
										>
											<Text>{cat}</Text>
										</Pressable>
									);
								}
							})}
						</ScrollView>
					</View>
				</View>
				<View style={styles.transactionContainer}>
					<Text style={styles.transactionTitle}>Transactions</Text>

					{transactions.map((transaction) => {
						switch (transaction.category) {
							case "Dining":
								icon = "lunch-dining";
								color = "#ed9b20";
								break;
							case "Groceries":
								icon = "local-grocery-store";
								color = "#71797E";
								break;
							case "Entertainment":
								icon = "nightlife";
								color = "#000000";
								break;
							case "Bill":
								icon = "payments";
								color = "#7b9a6d";
								break;
							case "Misc":
								icon = "notes";
								color = "rgb(128, 128, 128)";
								break;
						}
						return (
							<View style={styles.transactionRow}>
								<Icon name={icon} size={30} color={color} />
								<View style={styles.transactionSecondaryRow}>
									<View
									// style={{
									// 	marginLeft: 15,
									// }}
									>
										<Text
											style={
												styles.transactionDescription
											}
										>
											{transaction.name}
										</Text>
										<Text style={styles.transactionDate}>
											{transaction.date}
										</Text>
									</View>
									{transaction.transactionType ===
									"expense" ? (
										<Text style={styles.expenseText}>
											-{transaction.amount}
										</Text>
									) : (
										<Text style={styles.incomeText}>
											+{transaction.amount}
										</Text>
									)}
								</View>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	title: {
		padding: 10,
		alignSelf: "center",
		fontSize: 32,
		fontWeight: "bold",
	},
	chartContainer: {
		marginTop: 10,
		marginHorizontal: 10,
		width: "95%",
		height: 300,
		alignSelf: "center",
		borderRadius: 20,
		backgroundColor: "lightblue",
	},
	dateTitle: {
		fontSize: 24,
		fontWeight: "400",
		marginTop: 10,
		textAlign: "center",
	},
	chartRow: {
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
	},
	chart: {
		borderWidth: 1,
		marginTop: 10,
		height: 160,
		width: "60%",
		borderRadius: 20,
	},
	categoryButtonRow: {
		justifyContent: "flex-end",
		// marginTop: 30,
		borderColor: "black",
		borderWidth: 1,
	},
	categoryButton: {
		marginLeft: 15,
		paddingHorizontal: 10,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		borderColor: "black",
		borderWidth: 1,
		color: "white",
		backgroundColor: "dodgerblue",
	},
	selectedCategoryButton: {
		marginLeft: 15,
		height: 30,
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		borderColor: "black",
		borderWidth: 1,
		color: "white",
		backgroundColor: null,
	},
	transactionContainer: {
		marginTop: 20,
		marginHorizontal: 15,
		width: "95%",
		alignSelf: "center",
		borderRadius: 20,
		backgroundColor: "lightblue",
	},

	transactionTitle: {
		marginTop: 15,
		marginHorizontal: 15,
		fontSize: 24,
		// paddingBottom: 20,
		fontWeight: "bold",
		borderBottomColor: "black",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	transactionRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 15,
		// justifyContent: "space-between",
		paddingVertical: 20,

		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	transactionSecondaryRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",

		width: "87.5%",
		marginLeft: 15,
		justifyContent: "space-between",
	},
	transactionDescription: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
	transactionDate: {
		fontSize: 12,
		fontWeight: "400",
	},
	expenseText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "red",
	},
	incomeText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "green",
	},
});

export default HomeScreen;
