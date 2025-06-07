import { Operator } from "@/interfaces/calculator.interface";
import { useEffect, useState } from "react"

const allOperators = Object.values(Operator);
const hasOperator = (forTest: string, test: 'start'|'end') => 
    allOperators.some(op => test === 'start' ? forTest.startsWith(op) : forTest.endsWith(op))

export const useCalculator = () => {

    const [formula, setFormula] = useState<string>('');
    const [number, setNumber] = useState<string>('0');
    const [currentResult, setCurrentResult] = useState('');

    useEffect(() => {
        const newNumber = number === '' ? '0' : number;
        if(number === ''){
            setNumber(newNumber);
        };

        if(number !== '' && !['0','-0'].some( value => value === number )){
            const newResult = calculate();
            setCurrentResult(newResult.toString());
        }
    }, [number]);
    

    const buildNumber = (numberDigited: string) => {
        if(number === '-' && numberDigited === '.') return;
        if( number.includes('.') && numberDigited === '.' ) return;
        if( number !== '0' && number !== '-0' && numberDigited === '-' ) return;
        if( (number === '0' || number === '-0') && numberDigited === '0' ) return;

        const prev: string = (number === '0' || number === '-0') && numberDigited !== '.' ? number.replaceAll('0', '') : number;
        setNumber(`${ prev }${ numberDigited }`);
    }

    /* Botón "del" */
    const remove = () => {
        const tempNumber: string = number.replaceAll('-', '');

        if( tempNumber.length > 1 ) {
            setNumber( number.slice(0, number.length - 1) )
            return;
        }
        setNumber('0');
    }

    /* Botón "C" */
    const clean = () => {
        setNumber('0');
        setFormula('');
        setCurrentResult('');
    }

    const changeSign = () => {
        if( number.includes(Operator.substract) ) {
            setNumber( number.replace(Operator.substract, '') );
        } else {
            setNumber(`${ Operator.substract }${ number }`)
        }
    }

    const pressOperator = (operator: Operator) => {
        if(number.endsWith('.') || ['0','-0'].some( value => value === number )) return;
        
        const newNumber: string = getNumberForTransferToFormula();

        setFormula(`${ formula }${ newNumber }${ operator }`)
        setNumber('0');
    }

    const pressResult = () => {
        if(
            formula === ''
        ) return;

        try {
            const newNumber: string = getNumberForTransferToFormula();
            const formulaToExecute: string = `${ formula }${ newNumber }`.replace(/x/g, '*').replace(/÷/g, '/');
            const result = Function(`"use strict"; return (${ formulaToExecute })`)();
            setFormula('');
            setNumber(result.toString());
            setCurrentResult(result.toString());
        } catch (error: any) {
            console.log('ERROR AL CALCULAR EL RESULTADO');
            console.log(error.message);
        }
    }

    const getNumberForTransferToFormula = (): string => {
        const hasNeedParenthesis = hasOperator(formula, 'end') && hasOperator(number, 'start')
        const newNumber: string = hasNeedParenthesis ? `(${ number })` : number;
        return newNumber;
    }

    const calculate = () => {
        const newNumber: string = getNumberForTransferToFormula();
        const formulaToExecute: string = `${ formula }${ newNumber }`.replace(/x/g, '*').replace(/÷/g, '/');
        const result = Function(`"use strict"; return (${ formulaToExecute })`)();
        return result;
    }

    return {
        /* Props */
        formula,
        currentResult,

        /* Actions */
        buildNumber,
        remove,
        clean,
        pressOperator,
        changeSign,
        pressResult,
        getNumberForTransferToFormula
    }
}