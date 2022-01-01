import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Navigation from './Components/Navigation';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, fr } from './Components/I18n';
import Moment from "moment";

//To display or not buttons to mock API calls responses
global.MOCK_API_RESPONSE = false;

// Set the key-value pairs for the different languages you want to support.
i18n.translations = { en, fr };
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
//Set moment locale to the device locale to display the date in the language set in the device settings
Moment.locale(Localization.locale);
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App() {

  return (   
    <Navigation/>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});