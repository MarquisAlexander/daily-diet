import React from "react";

import {
	Body,
	CardDetails,
	Container,
	Header,
	Logo,
	Open,
	Percent,
	PercentDescription,
	UserImage,
} from "./styles";

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
		</Container>
	);
}
