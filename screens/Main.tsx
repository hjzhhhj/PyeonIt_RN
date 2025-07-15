import React from 'react';
import styled from 'styled-components/native';
import { Heart, User, Home, BookOpen, Bookmark } from 'lucide-react-native';
import Tab from './components/Tab';

const Main = () => {
  return (
    <Container>
      <StatusBarContainer>        
        <Logo source={require('../assets/logo.png')} resizeMode="contain" />
      </StatusBarContainer>

      <Content>
        <PromoCard>
            <Promo source={require('../assets/adv.png')} resizeMode="contain" />
        </PromoCard>

        <Section>
          <SectionHeader>
            <SectionTitle>이런 조합은 어떠세요?</SectionTitle>
            <Arrow>→</Arrow>
          </SectionHeader>
          <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <Card>
              <CardImage source={require('../assets/sj.png')} resizeMode="contain" /> 
              <CardContent>
                <BadgeRow>
                  <Badge1>인기</Badge1>
                  <Badge2>연예인</Badge2>
                  {/* <Icon name="heart-o" size={30} color="gray" margin-left="auto" /> */}
                </BadgeRow>
                <CardTitle>데이식스 성진 조합</CardTitle>
                <CardDesc numberOfLines={1} ellipsizeMode="tail">다이제+딸기잼+바나나+바닐라아이스크림</CardDesc>
                <CardDesc2>5,321명이 좋아해요!</CardDesc2>
              </CardContent>
            </Card>

            <Card>
              <CardImage source={require('../assets/js.png')} resizeMode="contain" />
              <CardContent>
                <BadgeRow>
                  <Badge1>신상조합</Badge1>
                  <Badge2>연예인</Badge2>
                </BadgeRow>
                <CardTitle>조진세 조합</CardTitle>
                <CardDesc>불닭볶음면+콕콕콕라면볶이</CardDesc>
                <CardDesc2>2,192명이 좋아해요!</CardDesc2>
              </CardContent>
            </Card>
          </HorizontalScroll>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>편의점 행사 모음</SectionTitle>
            <Arrow>→</Arrow>
          </SectionHeader>
          <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <Card>
              <CardImage source={require('../assets/pepsi.png')} resizeMode="contain" /> 
              <CardContent>
                <BadgeRow>
                  <Badge1>1+1</Badge1>
                  {/* <Heart size={12} color="#D1D5DB" /> */}
                </BadgeRow>
                <CardTitle>펩시 제로라임 355ml</CardTitle>
                <CardDesc numberOfLines={1} ellipsizeMode="tail">2,000원</CardDesc>
                <CardDesc2>CU, GS25, 이마트24</CardDesc2>
              </CardContent>
            </Card>

            <Card>
              <CardImage source={require('../assets/honey.png')} resizeMode="contain" /> 
              <CardContent>
                <BadgeRow>
                  <Badge1>할인</Badge1>
                  {/* <Heart size={12} color="#D1D5DB" /> */}
                </BadgeRow>
                <CardTitle>허니버터칩</CardTitle>
                <CardDesc numberOfLines={1} ellipsizeMode="tail">1,400원</CardDesc>
                <CardDesc2>CU</CardDesc2>
              </CardContent>
            </Card>
          </HorizontalScroll>
        </Section>
      </Content>

      <TabBar>
        <TabButton>
          <Home size={24} color="#EF4444" />
          <TabText active>메인</TabText>
        </TabButton>
        <TabButton>
          <BookOpen size={24} color="#6B7280" />
          <TabText>레시피</TabText>
        </TabButton>
        <TabButton>
          <Bookmark size={24} color="#6B7280" />
          <TabText>찜</TabText>
        </TabButton>
        <TabButton>
          <User size={24} color="#6B7280" />
          <TabText>프로필</TabText>
        </TabButton>
      </TabBar>
    </Container>
  );
};

export default Main;

const Container = styled.View`
  flex: 1;
  background-color: #F1F1F1;
`;

const StatusBarContainer = styled.View`
  padding: 66px 20px 16px 24px;
`;

const Logo = styled.Image`
  width: 40px;
  height: 25px;
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const PromoCard = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

const Promo = styled.Image`
    width: 350px;
    height: 100px;
`

const Section = styled.View`
  margin-top: 24px;
`;

const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 16px;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const Arrow = styled.Text`
  font-size: 24px;
  color: #000000;
`;

const HorizontalScroll = styled.ScrollView`
  padding-left: 12px;
`;

const Card = styled.View`
  overflow: hidden;
  width: 200px;
  height: 256px;
  margin-right: 12px;
`;

const CardImage = styled.Image`
  height: 134px;
  width: 200px;
  border-radius: 10px;
`;

const CardContent = styled.View`
  padding: 12px;
`;

const BadgeRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  gap: 6px;
`;

const Badge1 = styled.Text`
  background-color: #FF4B22;
  color: white;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
`;

const Badge2 = styled.Text`
  border: 1px solid #FF4B22;
  color: #FF4B22;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDesc = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-bottom: 8px; 
`;

const CardDesc2 = styled.Text`
  font-size: 14px;
  color: #686868;
  margin-bottom: 25px;
`;

const TabBar = styled.View`
  flex-direction: row;
  background-color: white;
  border-top-width: 1px;
  border-color: #e5e7eb;
`;

const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 12px 0;
  gap: 4px;
`;

const TabText = styled.Text<{ active?: boolean }>`
  font-size: 12px;
  color: ${({ active }) => (active ? '#EF4444' : '#6B7280')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
`;
