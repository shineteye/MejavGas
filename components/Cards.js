import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import styles from '../components/CardStyles';

const small = "Small"
const medium = "Medium"
const large = "Large"
const smallPrice = 60.00
const mediumPrice = 120.00
const largePrice = 200.00

export default class Cards extends Component {
    render() {
        return (

            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 2, padding: 5 }}>
                    <Card style={styles.cardContainer} mode="elevated" contentStyle={{ alignItems: 'center' }}>
                        <Card.Content>
                            <Title>{small}</Title>
                        </Card.Content>
                        <Card.Cover source={require('../assets/gas-tank.png')} style={{
                            width: 100, height: 100,
                            justifyContent: 'center'
                        }} />
                        <Card.Content>
                            <Paragraph>GHc {smallPrice}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => { console.log(small + " Chosen"); }} style={{ justifyContent: "center" }}>Choose</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={{ margin: 2, padding: 5 }}>

                    <Card style={styles.cardContainer} mode="elevated" contentStyle={{ alignItems: 'center' }}>
                        <Card.Content>
                            <Title>{medium}</Title>
                        </Card.Content>
                        <Card.Cover source={require('../assets/gas-tank.png')} style={{
                            width: 100, height: 100,
                            justifyContent: 'center'
                        }} />
                        <Card.Content>
                            <Paragraph>GHc {mediumPrice}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => { console.log(medium + " Chosen"); }} style={{ justifyContent: "center" }}>Choose</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={{ margin: 2, padding: 5 }}>

                    <Card style={styles.cardContainer} mode="elevated" contentStyle={{ alignItems: 'center' }}>
                        <Card.Content >
                            <Title >{large}</Title>
                        </Card.Content>
                        <Card.Cover source={require('../assets/gas-tank.png')} style={{
                            width: 100, height: 100,
                            justifyContent: 'center'
                        }} />
                        <Card.Content >
                            <Paragraph>GHc {largePrice}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => { console.log(large + " Chosen"); }} style={{ justifyContent: "center" }}>Choose</Button>
                        </Card.Actions>
                    </Card>
                </View>
            </View>
        )
    }
}
