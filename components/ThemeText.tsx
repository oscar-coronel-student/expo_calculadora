import { Text, type TextProps } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { globalStyles } from '@/styles/global.style'


interface Props extends PropsWithChildren, TextProps {
    variant?: 'h1' | 'h2'
}

const ThemeText = ({
    children,
    variant = 'h1',
    ...rest
}: Props) => {
  return <>
    <Text
        style={[
            { color: 'white', fontFamily: 'SpaceMono' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult
        ]}
        { ...rest }
    >
        { children }
    </Text>
  </>
}

export default ThemeText