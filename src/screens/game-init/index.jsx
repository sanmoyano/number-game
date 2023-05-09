import { Button, Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import Card from "../../components/card";
import { theme } from "../../constants";

const GameInit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's play a game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Write a number</Text>
        <TextInput placeholder="0" style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {}}
              color={theme.colors.primary}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={theme.colors.primary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameInit;
