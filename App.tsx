import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image
          style={styles.imageSize}
          source={require('./aea978180caed0e602cbbe464f77864f.jpg')}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome to my app!</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          placeholder="First name"
          style={styles.input}
          placeholderTextColor="#1d1919"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Enter your Surname:</Text>
        <TextInput
          placeholder="Surname"
          style={styles.input}
          placeholderTextColor="#1e191908"
          value={surName}
          onChangeText={setSurName}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Add user"
            color="#17077e"
            onPress={() => console.log('Name: ' + name + ' Surname: ' + surName)}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5d7d7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageSize: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#17077e',
    marginBottom: 32,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    height: 44,
    width: '100%',
    borderColor: '#aba1a1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#e0e0e0',
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});