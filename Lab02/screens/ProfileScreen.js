import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../themes/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding: 20px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Username = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Email = styled.Text`
  color: gray;
  font-size: 14px;
  margin-bottom: 20px;
`;

const SettingRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.card};
  padding: 16px;
  width: 100%;
  border-radius: 12px;
  margin-vertical: 8px;
`;

const SettingText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

const LogoutButton = styled.TouchableOpacity`
  margin-top: 30px;
  padding: 14px 28px;
  background-color: red;
  border-radius: 12px;
`;

const LogoutText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default function ProfileScreen() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(isDarkTheme);

  const [userData, setUserData] = useState({
    username: 'Shevchuk Dmytrii (IPZ-23-5)',
    email: 'ipz235_shdr@student.ztu.edu.ua',
    avatarUrl: 'https://cdn.discordapp.com/attachments/1147077027426472027/1354510683156250755/a3b4f45fbedb659353736229810a66db.jpg?ex=682ac4a0&is=68297320&hm=614e63642b80833c17cae56f397e239524cdfdddb94810945855348a010fc84c&'
  });

  const handleToggleTheme = () => {
    toggleTheme();
    setIsSwitchOn(!isSwitchOn);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  const goToEditProfile = () => {
    navigation.navigate('EditProfile', { userData, setUserData });
  };

  return (
    <Container>
      <Avatar source={{ uri: userData.avatarUrl }} />
      <Username>{userData.username}</Username>
      <Email>{userData.email}</Email>

      <SettingRow onPress={goToEditProfile}>
        <SettingText>Edit Profile</SettingText>
        <Ionicons name="create-outline" size={24} color="#1E90FF" />
      </SettingRow>

      <SettingRow onPress={handleToggleTheme}>
        <SettingText>Dark Theme</SettingText>
        <Ionicons
          name={isSwitchOn ? 'toggle' : 'toggle-outline'}
          size={32}
          color={isSwitchOn ? '#1E90FF' : 'gray'}
        />
      </SettingRow>

      <SettingRow onPress={() => Alert.alert('Coming soon!', 'Feature under development.')}>
        <SettingText>Change Password</SettingText>
        <Ionicons name="key-outline" size={24} color="#1E90FF" />
      </SettingRow>

      <LogoutButton onPress={handleLogout}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
}
