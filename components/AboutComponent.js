import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class RenderLeadershipComponent extends Component {
    render() {
        const items = this.props.items;
        return (
            <Card>
                <Card.Title>Corporate Leadership</Card.Title>
                <Card.Divider />
                <View>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => <View style={styles.leaderBox}>
                            <Image source={item.image}></Image>
                            <View>
                                <Text style={styles.textName}>{item.name}</Text>
                                <Text style={styles.textDescription}>{item.description}</Text>
                            </View>
                        </View>}
                    />
                </View>
            </Card>
        );
    }
}

class RenderHistoryComponent extends Component {
    render() {
        return (
            <Card>
                <Card.Title>Our History</Card.Title>
                <Card.Divider />
                <Text style={styles.textStyle}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                <Text style={styles.textStyle}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
            </Card>
        );
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        }
    }
    render() {
        return (
            <ScrollView>
                <RenderHistoryComponent></RenderHistoryComponent>
                <RenderLeadershipComponent items={this.state.leaders}></RenderLeadershipComponent>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 10
    },
    leaderBox: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        margin: 15
    },
    textName: {
        fontWeight: "bold",
    },
    textDescription: {
        fontWeight: "normal",
        fontSize: 15,
        color: "gray"
    }
});

export default About;