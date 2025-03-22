import { StyleSheet, Image, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabTwoScreen() {
  return (
    <ThemedView style={{ paddingTop: 80, flex: 1}}>

      <ThemedView style={styles.container}>
        <ThemedText>Електронна пошта</ThemedText>
        <TextInput
          style={styles.input}
        />
      </ThemedView>

      <ThemedView style={styles.container}>
        <ThemedText>Пароль</ThemedText>
        <TextInput
          style={styles.input}
        />
      </ThemedView>

      <ThemedView style={styles.container}>
      <ThemedText>Пароль (ще раз)</ThemedText>
        <TextInput
          style={styles.input}
        />
      </ThemedView>

      <ThemedView style={styles.container}>
        <ThemedText style={{marginTop: 20}}>Призвіще</ThemedText>
        <TextInput
          style={styles.input}
        />
      </ThemedView>
      
      <ThemedView style={styles.container}>
        <ThemedText>Ім'я</ThemedText>
        <TextInput
          style={styles.input}
        />
      </ThemedView>

      <ThemedView style={styles.container}>
        <TouchableOpacity style={styles.submit}>
          <ThemedText style={styles.submitText}>Зареєструватися</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginHorizontal: 20,
  },

  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
    marginTop: 8,
  },

  submit: {
    backgroundColor: '#0f76fd',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
