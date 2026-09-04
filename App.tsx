import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import ViewDetails from '../ViewDetails';

export type RootStackParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ViewDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewDetails'
>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My App' }}
        />
        <Stack.Screen
          name="ViewDetails"
          component={ViewDetails}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: MainScreenProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addUser = () => {
    navigation.navigate('ViewDetails', {
      NameSend: name,
      SurnameSend: surname,
    });
  };

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
          placeholderTextColor="#555555"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Enter your surname:</Text>
        <TextInput
          placeholder="Surname"
          style={styles.input}
          placeholderTextColor="#555555"
          value={surname}
          onChangeText={setSurname}
        />

        <View style={styles.buttonWrapper}>
          <Button title="Add user" color="#17077e" onPress={addUser} />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageSize: {
    width: 300,
    height: 300,
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
    color: '#333333',
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