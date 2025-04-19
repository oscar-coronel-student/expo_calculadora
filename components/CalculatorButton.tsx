import { useMemo } from "react";
import { Pressable, Text } from "react-native";
import * as Haptics from 'expo-haptics';

import { Colors } from "@/constants/Colors";
import { globalStyles } from '../styles/global.style';


interface Props {
    label: string
    color?: string
    blackText?: boolean
    onPress?: () => void
    isDoubleSize?: boolean
}

export const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    onPress,
    isDoubleSize = false
}: Props) => {

    const textColor: string = useMemo(() => {
        return blackText ? 'black' : 'white';
    }, [blackText]);

    return <>
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            width: isDoubleSize ? 180 : 80,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
        })}
            onPress={ () => {
                Haptics.selectionAsync();
                onPress && onPress();
            }}
        >
            <Text style={[ globalStyles.buttonText, { color: textColor } ]}>{ label }</Text>
        </Pressable>
    </>;
}