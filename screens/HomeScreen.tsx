import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
  justify-content: space-between;
  padding: 24px;
`;

const Content = styled.View`
  align-items: center;
  margin-top: 40%;
`;

const Logo = styled.Image`
  width: 130px;
  height: 75px;
  margin-bottom: 30px;
`;

const DescriptionImage = styled.Image`
  width: 290px;
  height: 24px;
`;

const Bottom = styled.View`
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  background-color: #ff4b22;
  padding: 14px 40px;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 90%;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const LoginRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const LoginText = styled.Text`
  color: #666666;
  font-size: 14px;
`;

const LoginLink = styled.Text`
  color: #007aff;
  font-size: 14px;
  text-decoration-line: underline;
`;

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleStart = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Content>
        <Logo source={require('../assets/logo.png')} resizeMode="contain" />
        <DescriptionImage source={require('../assets/des.png')} resizeMode="contain" />
      </Content>

      <Bottom>
        <Button onPress={handleStart}>
          <ButtonText>이메일로 시작하기</ButtonText>
        </Button>

        <LoginRow>
          <LoginText>이미 계정이 있다면 </LoginText>
          <TouchableOpacity onPress={handleLogin}>
            <LoginLink>로그인하기</LoginLink>
          </TouchableOpacity>
        </LoginRow>
      </Bottom>
    </Container>
  );
};

export default HomeScreen;
