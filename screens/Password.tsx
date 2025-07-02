import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 8%;
  padding: 8px;
  z-index: 10;
`;

const BackIcon = styled.Image``;

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
  width: 90%;
  margin-bottom: 24px;
`;

const PasswordInput = styled.TextInput`
  width: 90%;
  height: 56px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 16px;
  margin-bottom: 12px;
`;

const ErrorRow = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

const ErrorIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;

const ErrorText = styled.Text`
  color: #FF3A3A;
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
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  // 비밀번호 유효성 검사
  const validatePassword = (pwd: string) => {
    // 8~16자 영문, 숫자, 특수문자 포함 정규식 예시
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./\-_=]).{8,16}$/;
    if (pwd.trim() === '') {
      setError('비밀번호를 입력해주세요.');
      return false;
    }
    if (!passwordRegex.test(pwd)) {
      setError('비밀번호 기준에 맞지 않아요.');
      return false;
    }
    setError('');
    return true;
  };

  // 비밀번호 확인 일치 검사
  const validateConfirmPassword = (pwdConfirm: string) => {
    if (pwdConfirm.trim() === '') {
      setError('비밀번호 확인을 입력해주세요.');
      return false;
    }
    if (pwdConfirm !== password) {
      setError('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setError('');
    return true;
  };

  const handleStart = () => {
    // 순서대로 검사
    if (!validatePassword(password)) return;
    if (!validateConfirmPassword(passwordConfirm)) return;

    // 문제 없으면 다음 화면으로
    navigation.navigate('다음페이지');
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
          비밀번호를 입력해주세요!
        </ContentText>
        <PasswordInput
          placeholder="영문, 숫자, 특수문자 포함 8~16자"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (error) validatePassword(text);
          }}
        />
        <PasswordInput
          placeholder="비밀번호 확인"
          secureTextEntry
          autoCapitalize="none"
          value={passwordConfirm}
          onChangeText={(text) => {
            setPasswordConfirm(text);
            if (error) validateConfirmPassword(text);
          }}
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