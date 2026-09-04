import { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import type { ViewDetailsProps } from './App';

type ProgrammingLanguage = '1' | '2' | '3';

export default function ViewDetails({ route }: ViewDetailsProps) {
  const { NameSend, SurnameSend } = route.params;
  const [selectedValue, setSelectedValue] =
    useState<ProgrammingLanguage>('1');
  const [imageBlock, setImage] = useState<ImageSourcePropType | null>(null);

  const processSelection = () => {
    switch (selectedValue) {
      case '1':
        setImage(require('./react.jpg'));
        break;
      case '2':
        setImage(require('./kotlin.jpg'));
        break;
      case '3':
        setImage(require('./html.jpg'));
        break;
      default:
        setImage(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome {NameSend} {SurnameSend}
        </Text>
        <Text style={styles.prompt}>
          Please select your favourite programming language:
        </Text>

        <View style={styles.radioContainer}>
          <View style={styles.radioGroup}>
            <LanguageOption
              label="React Native"
              value="1"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
            />
            <LanguageOption
              label="Kotlin"
              value="2"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
            />
            <LanguageOption
              label="HTML and CSS"
              value="3"
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
            />
          </View>
        </View>

        <View style={styles.processContainer}>
          <Text style={styles.processText}>
            View what your favourite programming language says about you:
          </Text>
          <Button title="Process" onPress={processSelection} />
          {imageBlock && (
            <Image source={imageBlock} style={styles.resultImage} />
          )}
        </View>
      </View>
    </View>
  );
}

type LanguageOptionProps = {
  label: string;
  value: ProgrammingLanguage;
  selectedValue: ProgrammingLanguage;
  onSelect: (value: ProgrammingLanguage) => void;
};

function LanguageOption({
  label,
  value,
  selectedValue,
  onSelect,
}: LanguageOptionProps) {
  return (
    <View style={styles.radioButton}>
      <RadioButton.Android
        value={value}
        status={selectedValue === value ? 'checked' : 'unchecked'}
        onPress={() => onSelect(value)}
        color="#007BFF"
      />
      <Text style={styles.radioLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '92%',
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
  },
  prompt: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  radioContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  processContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  processText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  resultImage: {
    width: 240,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
  },
});