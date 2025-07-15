import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

const ImageCenter = styled.Image`
  width: 170px;  
  height: 170px;
  margin-top: 30%;
  margin-bottom: 24px;
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
  width: 90%;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const Ready = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleStart = () => {
    navigation.navigate('Main'); 
  };

  return (
    <Container>
      <Content>
        <ContentText>
          편잇을 사용할 준비가{"\n"}
          완료되었어요!
        </ContentText>
        <ImageCenter source={require('../assets/face.png')} resizeMode="contain" />
      </Content>

      <Bottom>
        <Button onPress={handleStart}>
          <ButtonText>완료</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
};

export default Ready;
