import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import { Navigator, RootStackParams } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <Tab2.Screen name="HomeScreen" component={SearchScreen} />
            <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
        </Tab2.Navigator>
    )
}

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={
                {
                    headerShown: false,
                    tabBarActiveTintColor: '#5856d6',
                    tabBarLabelStyle: {
                        marginBottom: (Platform.OS === 'ios') ? 0 : 10
                    },
                    tabBarStyle: {
                        position: 'absolute',
                        borderWidth: 0,
                        elevation: 0,

                    }
                }
            }
        >
            <Tab.Screen name="Navigator" component={Navigator} options={{
                tabBarLabel: "Listado",
                tabBarIcon: (({ color }) => (<Icon color={color} size={25} name="list-outline" />))
            }} />
            <Tab.Screen name="SearchScreen" component={Tab2Screen} options={{
                tabBarLabel: "Busqueda",
                tabBarIcon: (({ color }) => (<Icon color={color} size={25} name="search-outline" />))
            }} />
        </Tab.Navigator>
    );
}