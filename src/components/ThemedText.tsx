import { View, Text, TextProps } from 'react-native'
import React from 'react'

// Extend TextProps to include all native Text component props
interface ThemedTextProps extends TextProps {
  children: React.ReactNode
}

const ThemedText: React.FC<ThemedTextProps> = ({ children, ...props }) => {
  return (
    <Text 
      {...props}
      style={[
        { fontFamily: 'DMSans-Regular' },
        props.style 
      ]}
    >
      {children}
    </Text>
  )
}

export default ThemedText