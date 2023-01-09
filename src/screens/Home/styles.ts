import styled, { css } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";

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
    background-color: ${({theme}) => theme.COLORS.GREEN_MID};
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
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.G}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const PercentDescription = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const TitleFoods = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XS}px;
        padding-bottom: 8px;
    `}
`;