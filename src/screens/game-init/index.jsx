import { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants';

const GameInit = ({ onGameStart }) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, '')); //text -> si text no es un numero lo reemplazo por un campo vacio.
  };

  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // -> Esta condicion es para manejar que pasa cuando no cumple con las reglas de negocio
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumberOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumberOption('');
    }
  };

  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);
  };
  const onHandlerStartGame = () => {
    onGameStart(selectedNumber);
  };

  const Confirmed = () =>
    // -> si en este caso usamos el && se crea dentro del virtual DOM una referencia/copia de ese estado y se valida constantemente cada vez que renderiza la aplicaccion. Se crea una referencia vacia del elemento <Card><Card/>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Selected number</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Start" onPress={onHandlerStartGame} color={theme.colors.primary} />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's play a game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write a number</Text>
          <TextInput
            placeholder="0"
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            onChangeText={onHandlerChangeText}
            value={numberOption}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={onHandlerReset} color={theme.colors.primary} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                disabled={numberOption === ''}
                onPress={onHandlerConfirm}
                color={theme.colors.primary}
              />
            </View>
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameInit;
