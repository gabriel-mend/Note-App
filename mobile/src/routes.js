import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListNotes from './pages/ListNotes';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
            >
                <AppStack.Screen name="ListNotes" component={ListNotes}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}