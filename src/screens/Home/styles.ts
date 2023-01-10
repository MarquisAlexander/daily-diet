import styled, { css } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from 'react-native-gesture-handler';

import AppLogo from "../../assets/Logo.png";

export const Container = styled(SafeAreaView)`
    padding: 0 24px;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 24px;
`;

export const Body = styled.View`
    padding: 24px 0;
`;

export const Logo = styled.Image.attrs({
    source: AppLogo
})`
    width: 82px;
    height: 37px;
`;

export const UserImage = styled.Image`
    width: 37px;
    height: 37px;
    border-width: 2px;
    border-color: #333638;
    border-radius: 20px;
`;

export const CardDetails = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
    height: 102px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`;

export const Open = styled.Text`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Percent = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.G}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const PercentDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const TitleFoods = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XS}px;
        padding-bottom: 8px;
    `}
`;

export const FlatListMeals = styled.FlatList`` as unknown as typeof FlatList;

export const DateMeals = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.S}px;
        padding: 32px 0 12px 0;
    `}
`;

export const CardMeal = styled.View`
    ${({ theme }) => css`
        border-color: ${theme.COLORS.GRAY_500};
        border-width: 1px;
        border-radius: 6px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 14px;
    `}
`;

export const DetailsMeal = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TitleFood = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.S}px;
        max-width: 77%;
    `}
`;

export const TimerFood = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXS}px;
    `}
`;

export const DietIcon = styled.View`
    ${({ theme }) => css`
        height: 14px;
        width: 14px;
        background-color: red;
        border-radius: 7px;
    `}
`;

export const Divider = styled.View`
    ${({ theme }) => css`
        height: 14px;
        width: 1px;
        background-color: ${theme.COLORS.GRAY_400};
        margin-horizontal: 12px;
    `}
`;