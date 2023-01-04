import React from "react";

import { Container, Header, Logo, UserImage } from "./styles";

export function Home() {
	return (
		<Container>
			<Header>
				<Logo />
				<UserImage
					source={{ uri: "https://github.com/marquisalexander.png" }}
				/>
			</Header>
		</Container>
	);
}
