import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { PokemonFull, Species } from '../interfaces/pokemonInterfaces';

interface Props {
    tipo: string,
    type: Species,
}

const Tipos = ({ tipo, type }: Props) => {



    const [imageType, setImageType] = useState('');
    const [colorType, setColorType] = useState('');
    const [textType, setTextType] = useState('');
    const [colorText, setColorText] = useState('white');

    const uri = `https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20230128124521/Tipo_${imageType}_icono_EP.svg`

    useEffect(() => {
        switch (tipo) {
            case "normal":
                setTextType("Normal");
                setColorType('rgb(160,162,161)')
                setImageType('normal')
                break;
            case "fighting":
                setTextType("Lucha");
                setColorType('rgb(255,129,0)')
                setImageType('lucha')
                break;
            case "flying":
                setTextType("Volador");
                setColorType('rgb(129,187,240)')
                setImageType('volador')
                break;
            case "poison":
                setTextType("Veneno");
                setColorType('rgb(146,63,204)')
                setImageType('veneno')
                break;
            case "ground":
                setTextType("Tierra");
                setColorType('rgb(146,80,28)')
                setImageType('tierra')
                break;
            case "rock":
                setTextType("Roca");
                setColorType('rgb(164,159,121)')
                setImageType('roca')
                break;
            case "bug":
                setTextType("Bicho");
                setColorType('rgb(146,162,18)')
                setImageType('bicho')
                break;
            case "ghost":
                setTextType("Fantasma");
                setColorType('rgb(113,63,112)')
                setImageType('fantasma')
                break;
            case "steel":
                setTextType("Acero");
                setColorType('rgb(95,163,186)')
                setImageType('acero')
                break;
            case "fire":
                setTextType("Fuego");
                setColorType('rgb(230,34,36)')
                setImageType('fuego')
                break;
            case "water":
                setTextType("Agua")
                setColorType('rgb(38,129,240)');
                setImageType('agua')
                break;
            case "grass":
                setTextType("Planta");
                setColorType('rgb(61,162,37)')
                setImageType('planta')
                break;
            case "electric":
                setTextType("Eléctrico");
                setColorType('rgb(250,194,0)')
                setImageType('electrico')
                setColorText('black')
                break;
            case "psychic":
                setTextType("Psíquico");
                setColorType('rgb(240,63,122)')
                setImageType('psiquico')
                setColorText('black')
                break;
            case "ice":
                setTextType("Hielo");
                setColorType('rgb(62,217,255)')
                setImageType('hielo')
                setColorText('black')
                break;
            case "dragon":
                setTextType("Dragón");
                setColorType('rgb(79,96,226)')
                setImageType('dragon')
                break;
            case "dark":
                setTextType("Siniestro");
                setColorType('rgb(80,65,63)')
                setImageType('siniestro')
                break;
            case "fairy":
                setTextType("Hada");
                setColorType('rgb(240,113,239)')
                setImageType('hada')
                break;
            case "unknown":
                setTextType("Desconocido");
                setColorType('')
                break;
            case "shadow":
                setTextType("Sombra");
                setColorType('')
                break;
            default:
                setTextType("Tipo no reconocido");
                setColorType('')
                break;
        }
    }, [])

    return (
        <View style={{ backgroundColor: colorType, padding: 5, borderRadius: 20, marginBottom: 10 }} key={textType}>
            <Text style={{ fontSize: 19, margin: 2, marginHorizontal: 7, textAlign: 'center', color: colorText }}>
                {
                    textType
                }
            </Text>
        </View>
    );
};

export default Tipos
