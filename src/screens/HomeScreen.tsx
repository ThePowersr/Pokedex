import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import usePokemonPaginated from '../hooks/usePokemonPaginated'
import { FlatList } from 'react-native-gesture-handler'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    //console.log(simplePokemonList);

    return (
        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            {/* <Text style={
                { ...styles.title, ...styles.globalMargin, top: top + 20 }}
            >
                Pokedex
            </Text> */}

            <View style={{
                alignItems: 'center',
            }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={(<Text style={
                        { ...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 20, paddingBottom: 20 }}
                    >
                        Pokedex
                    </Text>)}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color="grey"
                        />
                    )}
                />
            </View>

        </View >
    )
}

export default HomeScreen
