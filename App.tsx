import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.welcomeText}>
      <Text style={styles.welcomeText}>Welcome to my app!</Text>
      <Text>Enter your name:</Text>
      <TextInput placeholder="First name" style={styles.input} />
      <Text>Enter your last name:</Text>
      <TextInput placeholder="Surname" style={styles.input} />
      <StatusBar style="auto" />
      <Button title="Add user" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    paddingTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#17077e',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },    
});
