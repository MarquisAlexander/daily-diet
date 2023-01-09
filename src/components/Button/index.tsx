import { Container, Icon, Title } from "./styles";

interface IButton {
	title: string;
}

export function Button({ title = "not found title" }: IButton) {
	return (
		<Container>
			<Icon />
			<Title>{title}</Title>
		</Container>
	);
}
