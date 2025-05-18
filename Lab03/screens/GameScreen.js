import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClickableObject from '../components/ClickableObject';
import { useTasks } from '../components/TaskProvider';

const eventToTaskName = {
    tap10: "Зробити 10 кліків",
    doubleTap5: "5 подвійних кліків",
    longPress: "Утримати об'єкт 3 секунди",
    pan: "Перетягнути об'єкт",
    flingRight: "Свайп вправо",
    flingLeft: "Свайп вліво",
    score100: "Отримати 100 очок",
};

export default function GameScreen({ navigation }) {
    const { completeTask } = useTasks();
    const [score, setScore] = useState(0);

    const handleCompleteTask = (eventKey) => {
        const taskName = eventToTaskName[eventKey];
        if (taskName) {
            completeTask(taskName);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎯 Гра</Text>
            <Text style={styles.score}>Очки: {score}</Text>

            <View style={styles.gameArea}>
                <ClickableObject
                    onScore={(points) => setScore(prev => prev + points)}
                    onCompleteTask={handleCompleteTask}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tasks')}>
                <Text style={styles.buttonText}>📋 Перейти до завдань</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    score: {
        fontSize: 24,
        color: '#4ade80',
        marginBottom: 20,
    },
    gameArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
