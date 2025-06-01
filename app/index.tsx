import { CalculatorButton } from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { Operator } from '@/interfaces/calculator.interface'
import { globalStyles } from '@/styles/global.style'
import { View } from 'react-native'

const CalculatorApp = () => {

    const {
        formula,
        number,
        
        buildNumber,
        removeAll
        /* remove,
        removeAll,
        pressOperator, */
    } = useCalculator();

    return <>
        <View style={ globalStyles.calculatorContainer }>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText numberOfLines={1} adjustsFontSizeToFit>{ formula }</ThemeText>
                <ThemeText variant='h2'>{ number }</ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ removeAll } label='C' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => buildNumber('-') } label='+/-' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => {} } label='del' color={ Colors.lightGray } blackText />
                <CalculatorButton onPress={ () => {} } label='÷' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => buildNumber('7') } label='7' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('8') } label='8' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('9') } label='9' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='x' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => buildNumber('4') } label='4' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('5') } label='5' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('6') } label='6' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('-') } label='-' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => buildNumber('1') } label='1' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('2') } label='2' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => buildNumber('3') } label='3' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='+' color={ Colors.orange } />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorButton onPress={ () => buildNumber('0') } label='0' color={ Colors.darkGray } isDoubleSize />
                <CalculatorButton onPress={ () => buildNumber('.') } label='.' color={ Colors.darkGray } />
                <CalculatorButton onPress={ () => {} } label='=' color={ Colors.orange } />
            </View>
        </View>
    </>
}

export default CalculatorApp