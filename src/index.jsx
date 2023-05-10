import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { GameInit, GamePlay, GameOver } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.secondary} />;
  }

  const headerTitle = userNumber ? 'Play the game' : 'Welcome to the number game';

  const onGameStart = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <GamePlay userNumber={userNumber} /> : <GameInit onGameStart={onGameStart} />;

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
