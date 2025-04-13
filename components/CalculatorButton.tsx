import { Pressable, Text } from "react-native";
import { globalStyles } from '../styles/global.style';
import { Colors } from "@/constants/Colors";
import { useMemo } from "react";


interface Props {
    label: string
    color?: string
    blackText?: boolean
    onPress?: () => void
}

export const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    onPress
}: Props) => {

    const textColor: string = useMemo(() => {
        return blackText ? 'black' : 'white';
    }, [blackText]);

    return <>
        <Pressable style={[ globalStyles.button, { backgroundColor: color } ]}
            onPress={ onPress }
        >
            <Text style={[ globalStyles.buttonText, { color: textColor } ]}>{ label }</Text>
        </Pressable>
    </>;
}