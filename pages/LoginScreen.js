import * as React from 'react';
import { Button, View, Text } from 'react-native';

function LoginScreen({ navigation }) {

  const goToDashboard = () => {
    navigation.navigate('Dashboard')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button  onPress={goToDashboard}  title="Go to Dash"  color="#841584"  accessibilityLabel="Learn more about this purple button"/>
    </View>
  );
}

export default LoginScreen;