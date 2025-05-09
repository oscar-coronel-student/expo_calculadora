import { Operator } from "@/interfaces/calculator.interface";
import { useRef, useState } from "react"


export const useCalculator = () => {

    const [formula, setFormula] = useState<string>('');

    const [number, setNumber] = useState<string>('0');
    const [previousNumber, setPreviousNumber] = useState<string>('0');

    const lastOperation = useRef<Operator>();


    const buildNumber = (numberDigited: string) => {
        if( number.includes('.') && numberDigited === '.' ) return;
        if( number.split('').every( character => character === '0' ) && numberDigited === '0' ) return;

        const prev: string = number === '0' && numberDigited !== '.' ? '' : number;
        setNumber(`${ prev }${ numberDigited }`);
    }

    /* Botón "del" */
    const remove = () => {
        if( number.length > 1 ) {
            setNumber( number.slice(0, number.length - 1) )
            return;
        }
        setNumber('0');
    }

    /* Botón "C" */
    const removeAll = () => {
        lastOperation.current = undefined;
        setNumber('0');
        setPreviousNumber('0');
        setFormula('');
    }

    const pressOperator = (operator: Operator) => {
        /* if(Object.values(Operator).some( op => formula.endsWith(op) )) return; */
        if(number === '.') return;

        lastOperation.current = operator;
        setFormula(`${ formula }${ number }${ operator }`);
        setNumber('0');
    }

    const pressResult = () => {

    }

    return {
        buildNumber,
        remove,
        removeAll,
        pressOperator,
        formula,
        number
    }
}