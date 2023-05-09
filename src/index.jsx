import { useState } from "react";
import { View } from "react-native";

import { Header } from "./components";
import { GameInit, GamePlay, GameOver } from "./screens/index";
import { styles } from "./styles";

export default function App() {
  // const [userNumber, setUserNumber] = useState(null);
  // const headerTitle = userNumber
  //   ? "Play the game"
  //   : "Welcome to the number game";

  return (
    <View style={styles.container}>
      <Header title="Welcome to the number game" />
      <GameInit />
    </View>
  );
}
