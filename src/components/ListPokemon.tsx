import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import pokemonApi from '../api/pokemonApi';
import { FlatList } from 'react-native-gesture-handler';

const ListPokemon = () => {

    const [resultado, setResultado] = useState({ pokemones: [] });

    const pokemons = async () => {
        const pokemon = pokemonApi.get('/pokemon')

        const resps = await Promise.all([
            pokemon,
        ]);

        setResultado({
            pokemones: resps[0].data.results
        })
    };

    useEffect(() => {
        pokemons();
    }, [])

    //pokemons();

    console.log(resultado);

    return (
        <>
            <Text>Aqui se presentaran los pokemons</Text>
            <FlatList
                data={resultado.pokemones}
                //keyExtractor={}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </>
    );
};

export default ListPokemon;
