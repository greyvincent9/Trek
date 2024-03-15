import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from "react-native-heroicons/solid";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Rowing } from "@mui/icons-material";

const HomeScreen = () => {
	const navigation = useNavigation();
	const diningIcon = <Icon name="lunch-dining" size={16} color="#ed9b20" />;

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
					<View style={styles.categoryButtonRow}>
						<View>
							<View style={styles.categoryButton}>
								<Text
									style={{
										color: "white",
										fontWeight: "500",
									}}
								>
									All
								</Text>
							</View>
						</View>
						<View>
							<View style={styles.categoryButton}>
								<Text
									style={{
										color: "black",
									}}
								>
									Dining
								</Text>
							</View>
						</View>
						<View>
							<View style={styles.categoryButton}>
								<Text
									style={{
										color: "white",
									}}
								>
									Entertainment
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.transactionContainer}>
					<Text style={styles.transactionTitle}>Transactions</Text>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
					<View style={styles.transactionRow}>
						<Icon name="lunch-dining" size={30} color="#ed9b20" />
						<View style={styles.transactionSecondaryContainer}>
							<View>
								<Text style={styles.transactionDescription}>
									Breakfast
								</Text>
								<Text style={{ fontSize: 12, color: "gray" }}>
									12 Mar 2024
								</Text>
							</View>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "red",
								}}
							>
								$20.00
							</Text>
						</View>
					</View>
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
		width: 160,
		borderRadius: 100,
		backgroundColor: "#BC4545",
	},
	categoryButtonRow: {
		display: "flex",
		flexDirection: "row",
	},
	categoryButton: {
		marginLeft: 15,
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
		height: 26,
		width: 48,
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 1,
		backgroundColor: "#4F4CDE",
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
	transactionDescription: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default HomeScreen;
