import React from "react";
import { Button } from "@components/Button";
import { FlatList } from "react-native-gesture-handler";
import { format } from "date-fns";
import { MEALS } from "./mock";
import {
	Body,
	CardDetails,
	CardMeal,
	Container,
	DateMeals,
	DetailsMeal,
	DietIcon,
	Divider,
	FlatListMeals,
	Header,
	Logo,
	Open,
	Percent,
	PercentDescription,
	TimerFood,
	TitleFood,
	TitleFoods,
	UserImage,
} from "./styles";
import { Text, View } from "react-native";

interface IFood {
	isOffDiet: boolean;
	foodName: string;
	timer: string;
}

export function Home() {
	return (
		<Container>
			<Header>
				<Logo />
				<UserImage
					source={{ uri: "https://github.com/marquisalexander.png" }}
				/>
			</Header>
			<Body>
				<CardDetails>
					<Open>arrow-icon</Open>
					<Percent>90,86%</Percent>
					<PercentDescription>das refeições dentro da dieta</PercentDescription>
				</CardDetails>
			</Body>
			<TitleFoods>Refeições</TitleFoods>
			<Button title="Nova refeição" />
			<FlatListMeals
				data={MEALS}
				renderItem={({ item: { date, foods } }) => (
					<>
						<DateMeals>{`${format(date, "dd.MM.yy")}`}</DateMeals>
						<FlatListMeals
							data={foods}
							ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
							renderItem={({ item: { foodName, isOffDiet, timer } }) => (
								<CardMeal>
									<DetailsMeal>
										<TimerFood>{timer}</TimerFood>
										<Divider />
										<TitleFood numberOfLines={1}>{foodName}</TitleFood>
									</DetailsMeal>
									<DietIcon />
								</CardMeal>
							)}
						/>
					</>
				)}
			/>
		</Container>
	);
}
