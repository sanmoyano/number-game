import { Text, View, Image, Button } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components';
import { theme } from '../../constants';

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'data:image/png;base64,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',
          }}
          resizeMode="cover"
        />
        <Text style={styles.number}>selected: {userNumber}</Text>
        <Text style={styles.round}>rounds: {rounds}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Restar" onPress={onRestart} color={theme.colors.primary} />
        </View>
      </Card>
    </View>
  );
};

export default GameOver;
