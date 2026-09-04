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
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import ViewDetails from './ViewDetails';
import FadeInView from './FadeInView';

export type RootStackParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ViewDetailsProps = NativeStackScreenProps<RootStackParamList, 'ViewDetails'>;

type RadioOption = 'option1' | 'option2';

function isEmpty(value: unknown) {
  return (
    value == null ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

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
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState<RadioOption>('option1');

  const addUser = () => {
    if (isEmpty(name) || isEmpty(surname)) {
      setError(true);
      return;
    }

    setError(false);

    switch (checked) {
      case 'option1':
        console.log('User chose Option 1');
        break;
      case 'option2':
        console.log('User chose Option 2');
        break;
      default:
        console.log('Other option');
    }

    navigation.navigate('ViewDetails', {
      NameSend: name,
      SurnameSend: surname,
    });
    console.log('Name:' + name + ' Surname:' + surname);
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

      <FadeInView style={styles.form}>
        <Text style={error ? styles.errorText : styles.blank}>
          {error ? 'Please fill in both fields.' : ''}
        </Text>

        <View style={styles.inputFlex}>
          <Text style={styles.headingText}>Please enter Name:</Text>

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

          <Text style={styles.label}>Choose an option:</Text>
          <RadioButton.Group
            onValueChange={value => setChecked(value as RadioOption)}
            value={checked}
          >
            <RadioButton.Item label="Option 1" value="option1" />
            <RadioButton.Item label="Option 2" value="option2" />
          </RadioButton.Group>

          <View style={styles.buttonWrapper}>
            <Button title="Add user" color="#17077e" onPress={addUser} />
          </View>
        </View>
      </FadeInView>

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
  inputFlex: {
    width: '100%',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#17077e',
    marginBottom: 8,
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
  errorText: {
    color: '#b00020',
    marginBottom: 12,
    fontSize: 14,
  },
  blank: {
    fontSize: 0,
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});