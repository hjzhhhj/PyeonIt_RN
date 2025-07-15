import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Heart, User, Home, BookOpen, Bookmark } from 'lucide-react-native';

const Tab = () => {
  return (
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
  );
};

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

export default Tab;


