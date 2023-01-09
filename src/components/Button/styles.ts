import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_200};
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border-radius: 6px;
        padding-vertical: 16px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.XS}px;
    `}
`;

export const Icon = styled.Text``;
