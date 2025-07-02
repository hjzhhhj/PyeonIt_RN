import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, View, Image } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import styled from 'styled-components/native';

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 8%;
  padding: 8px;
  z-index: 10;
`;

const BackIcon = styled.Image`
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
  justify-content: space-between;
  padding: 24px;
`;

const Content = styled.View`
  align-items: center;
  margin-top: 80px;
`;

const ContentText = styled.Text`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  width: 85%;
  margin-bottom: 24px;
`;

const EmailInput = styled.TextInput`
  width: 90%;
  height: 48px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-horizontal: 12px;
  font-size: 16px;
`;

const ErrorRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  width: 90%;
`;

const ErrorIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
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

const Password = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // 이메일 유효성 검사 간단 정규식
  const validateEmail = (text: string) => {
    if (text.trim() === '') {
      setError('이메일을 입력해주세요.');
      return false;
    }
    // 간단 이메일 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setError('유효한 이메일 형식이 아닙니다.');
      return false;
    }
    setError('');
    return true;
  };

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handleStart = () => {
    if (validateEmail(email)) {
      // 이메일 유효하면 다음으로 이동
      // navigation.navigate('다음페이지');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={handleGoBack} activeOpacity={0.7}>
        <BackIcon source={require('../assets/back.png')} resizeMode="contain" />
      </BackButton>
      <Content>
        <ContentText>
          편잇에서 사용하실{"\n"}
          이메일을 입력해주세요!
        </ContentText>
        <EmailInput
          placeholder="이메일 입력"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={handleChange}
        />
        {error !== '' && (
          <ErrorRow>
            <ErrorIcon source={require('../assets/error.png')} resizeMode="contain" />
            <ErrorText>{error}</ErrorText>
          </ErrorRow>
        )}
      </Content>

      <Bottom>
        <Button onPress={handleStart}>
          <ButtonText>다음</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
};

export default Password;