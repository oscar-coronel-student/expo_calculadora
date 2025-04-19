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
                <CalculatorButton onPress={ () => {} } label='C' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => {} } label='+/-' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => {} } label='del' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => {} } label='÷' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => {} } label='7' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='8' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='9' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='x' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => {} } label='4' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='5' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='6' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='-' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => {} } label='1' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='2' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='3' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='+' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => {} } label='0' color={ Colors.darkGray } isDoubleSize />
                <CalculatorButton onPress={ () => {} } label='.' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='=' color={ Colors.orange } />
            </View>
        </View>
    </>
}

export default CalculatorApp