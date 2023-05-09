import { Text, View } from "react-native";

import { Header } from "./components";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
    </View>
  );
}
