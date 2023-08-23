import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull, VersionGroupDetail, Ability, Stat } from '../interfaces/pokemonInterfaces';
import FadeInImage from './FadeInImage';
import Tipos from './Tipos';
//import { styles } from '../theme/appTheme';

interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,

            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                {/* <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'column', width: 100, alignItems: 'center' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <>
                                <Tipos tipo={type.name} type={type} key={type.name} />
                            </>
                        ))
                    }
                </View> */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight / 10}kg</Text>
            </View>


            <View style={{ ...styles.container }}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                style={{}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            <View
                style={{ ...styles.container }}
            >
                <Text style={styles.title}>Habilidades</Text>
                <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text key={ability.name} style={{ ...styles.regularText, marginRight: 10 }}>
                                {ability.name}
                            </Text>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
                    {
                        pokemon.moves.map(({ move, version_group_details }) => (
                            (version_group_details[0].move_learn_method.name === 'level-up')
                                ?
                                (<Text key={move.name}
                                    style={{ ...styles.regularText, marginRight: 10 }}
                                >
                                    {move.name}
                                </Text>)
                                : null
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Estadisticas inciales</Text>
                <ScrollView style={{}} horizontal={false}>
                    {
                        pokemon.stats.map((Stat, i) => (
                            <View key={Stat.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text style={{ ...styles.regularText, marginRight: 10, width: 150 }}>
                                    {Stat.stat.name}
                                </Text>
                                <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
                                    {Stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
            </View>


        </ScrollView>
    );
};

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});
