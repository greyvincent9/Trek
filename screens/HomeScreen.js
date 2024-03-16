import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	TouchableHighlight,
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
import { BreakfastDining, Rowing } from "@mui/icons-material";
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
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
		amount: "20.00",
	},
	{
		id: 3,
		transactionType: "income",
		name: "Breakfast",
		date: "12 Mar 2024",
		category: "Dining",
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
					<View style={{ display: "flex", flexDirection: "row" }}>
						<ScrollView
							horizontal
							contentContainerStyle={styles.categoryButtonRow}
						>
							{categories.map((cat) => {
								if (cat == activeCategory) {
									// show gradient category
									return (
										<TouchableOpacity
											key={cat}
											value={cat}
											style={styles.categoryButton}
										>
											<Text>{cat}</Text>
										</TouchableOpacity>
									);
								} else {
									// show normal category
									return (
										<TouchableOpacity
											onPress={() =>
												setActiveCategory(cat)
											}
											key={cat}
											style={
												styles.selectedCategoryButton
											}
										>
											<Text>{cat}</Text>
										</TouchableOpacity>
									);
								}
							})}
						</ScrollView>
					</View>
				</View>
				<View style={styles.transactionContainer}>
					<Text style={styles.transactionTitle}>Transactions</Text>

					{transactions.map((transaction) => {
						return (
							<View style={styles.transactionRow}>
								<Icon
									name="lunch-dining"
									size={30}
									color="#ed9b20"
								/>
								<View>
									<Text>{transaction.name}</Text>
									<Text>{transaction.date}</Text>
								</View>
								{transaction.transactionType === "expense" ? (
									<Text style={styles.expenseText}>
										-{transaction.amount}
									</Text>
								) : (
									<Text style={styles.incomeText}>
										+{transaction.amount}
									</Text>
								)}
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
		// justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "95%",
		borderColor: "black",
		borderWidth: 1,
	},
	categoryButton: {
		marginLeft: 15,
		marginTop: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 1,
		color: "white",
		backgroundColor: "#4F4CDE",
	},
	selectedCategoryButton: {
		marginLeft: 15,
		marginTop: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 1,
		color: "white",
		backgroundColor: null,
	},
	transactionContainer: {
		marginTop: 20,
		marginHorizontal: 10,
		width: "95%",
		// height: 300,
		alignSelf: "center",
		borderRadius: 20,
		backgroundColor: "lightblue",
	},
	transactionSecondaryContainer: {
		paddingLeft: 15,
		width: 310,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	transactionTitle: {
		margin: 15,
		fontSize: 24,
		paddingBottom: 20,
		fontWeight: "bold",
		borderBottomColor: "black",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	transactionRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
		fontSize: 24,
		paddingBottom: 20,
		fontWeight: "bold",
		borderBottomColor: "black",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	expenseText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "red",
	},
	incomeText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "green",
	},
});

export default HomeScreen;
