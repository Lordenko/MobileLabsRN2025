import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function create_menu(navigation) {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Store')}
            >
                <Text style={styles.menuText}>Store</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Community')}
            >
                <Text style={styles.menuText}>Community</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Messages')}
            >
                <Text style={styles.menuText}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Guard')}
            >
                <Text style={styles.menuText}>Guard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('User')}
            >
                <Text style={styles.menuText}>User</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#ddd',
      paddingVertical: 30,
    },
    menuItem: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 10
    },
    menuText: {
      fontSize: 13,
      color: '#333',
    },
  });
