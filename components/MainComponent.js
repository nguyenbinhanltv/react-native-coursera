import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './HomeComponent';
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <HomeNavigator.Screen name='Home' component={Home} />
        </HomeNavigator.Navigator>
    );
}

import About from './AboutComponent';
const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen() {
    return (
        <AboutNavigator.Navigator initialRouteName='About'
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <AboutNavigator.Screen name='About' component={About} />
        </AboutNavigator.Navigator>
    );
}

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <MenuNavigator.Screen name='Menu' component={Menu} />
            <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
        </MenuNavigator.Navigator>
    );
}

import Contact from './ContactComponent';
const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen() {
    return (
        <ContactNavigator.Navigator initialRouteName='Contact'
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <ContactNavigator.Screen name='Contact' component={Contact} />
        </ContactNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator initialRouteName='Home'>
            <MainNavigator.Screen name='Home' component={HomeNavigatorScreen} options={{ headerShown: false }} />
            <MainNavigator.Screen name='About' component={AboutNavigatorScreen} options={{ headerShown: false, title: 'About Us' }} />
            <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen} options={{ headerShown: false }} />
            <MainNavigator.Screen name='Contact' component={ContactNavigatorScreen} options={{ headerShown: false, title: 'Contact Us' }} />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <MainNavigatorScreen />
            </NavigationContainer>
        );
    }
}
export default Main;