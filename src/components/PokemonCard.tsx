import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import FadeInImage from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const windowsWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon,
}

const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation();

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);

    useEffect(() => {
        // IOS backgroud
        // Android: dominant
        const fetchColors = async () => {
            try {
                await ImageColors.getColors(pokemon.picture, { fallback: '#808080' })
                    .then(colors => {
                        if (!isMounted.current) return;
                        (colors.platform === 'ios')
                            ? setBgColor(colors.background || 'grey')
                            : setBgColor(colors.dominant || 'grey')
                    });
            } catch (error) {
                console.log(error);
            }
        }

        fetchColors();

        return () => {
            isMounted.current = false;
        };

    }, [])

    return (

        <TouchableOpacity activeOpacity={0.7} onPress={
            () => navigation.navigate('PokemonScreen', {
                simplePokemon: pokemon,
                color: bgColor,
            })
        }>
            <View style={{
                ...styles.cardContainer,
                width: windowsWidth * 0.4,
                backgroundColor: bgColor,
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -25,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -10
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.6,
    }
});

export default PokemonCard;
