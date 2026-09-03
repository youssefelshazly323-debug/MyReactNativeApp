import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I found the App.tsx and my name is BahrIIE</Text>
      <Text>Hello World, I can code on all phones</Text>
      <Text>Welcome to my app!</Text>
      <Text>Enter your name:</Text>
      <TextInput placeholder="First name" style={styles.input} />
      <Text>Enter your last name:</Text>
      <TextInput placeholder="Last name" style={styles.input} />
      <StatusBar style="auto" />
      <Button title="Add user" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    margin: 8,
    width: '80%',
  },
});
