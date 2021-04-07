import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    render() {
        return (
            <Card>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text style={styles.textStyle}>121, Clear Water Bay Road</Text>
                <Text style={styles.textStyle}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.textStyle}>HONG KONG</Text>
                <Text style={styles.textStyle}>Tel: +852 1234 5678</Text>
                <Text style={styles.textStyle}>Fax: +852 8765 4321</Text>
                <Text style={styles.textStyle}>Email:confusion@food.net</Text>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    textStyle: {
        margin: 10
    }
});

export default Contact;