import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';
import HomeScreen from '../screens/HomeScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { StatusBar } from 'expo-status-bar';

export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: { SimplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    )
}

