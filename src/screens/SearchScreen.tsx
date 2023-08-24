import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles as globalStyle } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler/';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    const [term, setTerm] = useState('')

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFiltered([]);
            //aplicar filtro 
        }

        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLowerCase().includes(term.toLocaleLowerCase()))
            )
        } else {
            const pokemonById = simplePokemonList.find((poke) => poke.id === term);
            setPokemonFiltered(
                (pokemonById) ? [pokemonById] : []
                // [simplePokemonList.find((poke) => poke.id === term)!]
            )
        }


    }, [term])

    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            // marginTop: (Platform.OS) ? top : top + 10,
            marginHorizontal: 20,
            flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
        }}>

            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS == 'ios') ? top : top + 10
                }} />
            <GestureHandlerRootView>
                <FlatList
                    data={pokemonFiltered}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    style={{ paddingBottom: 100 }}
                    numColumns={2}
                    ListHeaderComponent={(<Text style={{
                        ...globalStyle.title,
                        ...globalStyle.globalMargin, marginBottom: 10,
                        marginTop: top + 60
                    }}>
                        {term}
                    </Text>)}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    ListFooterComponent={<View style={{ height: 75, width: 200 }}></View>}
                />
            </GestureHandlerRootView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
