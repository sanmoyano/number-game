import { useState } from 'react';
import { Button, Text, View } from 'react-native';

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

const GamePlay = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Now, guess the number</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="lower" onPress={() => {}} color={theme.colors.secondary} />
          <Button title="greater" onPress={() => {}} color={theme.colors.secondary} />
        </View>
      </Card>
    </View>
  );
};

export default GamePlay;
