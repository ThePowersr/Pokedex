import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FadeInImage from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';
import Tipos from '../components/Tipos';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id)
    //console.log(pokemon.moves)

    return (
        <View style={{ flex: 1 }}>



            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,

            }}>

                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButtom, top: top + 10
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'column', width: 100, alignItems: 'center', position: 'absolute', top: top + 40, right: 10 }}>
                    {
                        pokemon.types?.map(({ type }) => (
                            <>
                                <Tipos tipo={type.name} type={type} key={type.name} />
                            </>
                        ))
                    }
                </View>



                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 40
                    }}
                >
                    {name + '\n'} #{id}
                </Text>

                {/* <View style={{ flexDirection: 'column', width: 100, alignItems: 'center' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <>
                                <Tipos tipo={type.name} type={type} key={type.name} />
                            </>
                        ))
                    }
                </View> */}

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />

            </View>

            {/* Detalles */}
            {
                isLoading
                    ? (
                        <View style={styles.loadingIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
                            />
                        </View>
                    )
                    : <PokemonDetails pokemon={pokemon} />
            }

        </View>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButtom: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        top: 20,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
