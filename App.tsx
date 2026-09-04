import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image style={styles.imageSize} source={require('./img/welcome_to_react.png')} />
      </View>

      <Text style={styles.welcomeText}>Welcome to my app!</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          placeholder="First name"
          style={styles.input}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Enter your last name:</Text>
        <TextInput
          placeholder="Surname"
          style={styles.input}
          placeholderTextColor="#75606008"
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Add user"
            color="#17077e"
            onPress={() => console.log('Add user pressed')}
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
    backgroundColor: '#fff',
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});