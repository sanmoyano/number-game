import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { GameInit, GamePlay, GameOver } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('Welcome to the number game');

  const [loaded] = useFonts({
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.secondary} />;
  }

  const onGameStart = (number) => {
    setUserNumber(number);
    setCurrentScreen('Play the game');
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
    setCurrentScreen('GAME OVER');
  };

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <GamePlay userNumber={userNumber} onGameOver={onGameOver} />;
    }
    if (guessRounds > 0) {
      return <GameOver onRestart={onRestart} userNumber={userNumber} rounds={guessRounds} />;
    }
    return <GameInit onGameStart={onGameStart} />;
  };

  return (
    <View style={styles.container}>
      <Header title={currentScreen} />
      <Content />
    </View>
  );
}
