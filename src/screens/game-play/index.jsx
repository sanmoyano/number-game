import { useState, useRef, useEffect } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GamePlay = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(MIN_NUMBER);
  const currentHigh = useRef(MAX_NUMBER);

  const onHandlerNext = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Wrong', 'Try the other direction', [{ text: 'Try again', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((currentRound) => currentRound + 1); //-> asi nos aseguramos que realmente es el valor anterior del numero de ronda
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Now, guess the number</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="lower"
              onPress={() => onHandlerNext('lower')}
              color={theme.colors.secondary}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="greater"
              onPress={() => onHandlerNext('greater')}
              color={theme.colors.secondary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GamePlay;
