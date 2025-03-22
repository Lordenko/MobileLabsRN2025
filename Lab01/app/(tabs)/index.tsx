import { StyleSheet, Image, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  let list = []

  for (let index = 0; index < 10; index++) {
    list.push(
      <ThemedView key={index} style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
        <Image
          source={require('@/assets/images/news-icon.jpg')}
          style={{
            width: 100,
            height: 100,
            paddingLeft: 10
          }}
        />

        <ThemedView style={{ marginLeft: 10 }}>
          <ThemedText style={{ fontSize: 20 }}>
            Заголовок новини
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 200 }}>
            Дата новини
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 300 }}>
            Короткий текст новини
          </ThemedText>
        </ThemedView>
      </ThemedView>
    )

  }

  return (
    <ThemedView style={{ paddingTop: 80, flex: 1 }}>
      <ThemedView style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
        <ThemedText type="title">Новини</ThemedText>
      </ThemedView>

      <ScrollView>
        {list.map((item) => (
          item
        ))}
      </ScrollView>
    </ThemedView>

  );
}
