import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ViewBase,  } from 'react-native';
import { styles } from '../../styles';

const Home = () => {
    const userTestStatus: { id: number, question: string }[] = [
        { "id": 0, "question": "What are you feeling now?" },
        { "id": 1, "question": "How many partners did ypu have?" },
        { "id": 2, "question": "When did you falt in love first?" },
    ];
    
    const displayQua = userTestStatus.map(el => el.question);
    const [show, setQua] = useState(0);

    if (show === 3) {
        setQua(0);
    }
      
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        <Text>
            {
                displayQua[show]
            }
        </Text>
            <View style={styles.box}>
                <Button
                    onPress={() => setQua(show + 1)}
                    title="Change"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}

export default Home