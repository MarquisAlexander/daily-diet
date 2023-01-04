import styled from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";

import AppLogo from "../../assets/Logo.png";

export const Container = styled(SafeAreaView)`
    padding: 0 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 24px
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