import { CalculatorButton } from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global.style'
import { View } from 'react-native'

const CalculatorApp = () => {
    return <>
        <View style={ globalStyles.calculatorContainer }>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText numberOfLines={1} adjustsFontSizeToFit>50 x 50000</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorButton label='C' color={ Colors.lightGray } blackText />
                <CalculatorButton label='+/-' color={ Colors.lightGray } blackText />
                <CalculatorButton label='del' color={ Colors.lightGray } blackText />
                <CalculatorButton label='÷' color={ Colors.orange } />
            </View>
        </View>
    </>
}

export default CalculatorApp