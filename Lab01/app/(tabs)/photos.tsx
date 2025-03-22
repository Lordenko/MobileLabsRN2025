import { StyleSheet, Image, Platform, View, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {

    let list = []

    for (let index = 0; index < 10; index++) {
        list.push(
            <ThemedView key={index} style={{ marginBottom: 10 }}>
                <Image
                    source={require('@/assets/images/news-icon.jpg')}
                    style={{
                        width: 190,
                        height: 190,
                        padding: 10,
                    }}
                />
            </ThemedView>
        )
    }

    return (
        <ThemedView style={{ paddingTop: 80, flex: 1 }}>
            <ScrollView>
                <ThemedView style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {list.map((item) => (
                        item
                    ))}
                </ThemedView>
            </ScrollView>
        </ThemedView>
    );
}
