Syntax sugar for react hooks

# Installation
yarn add easy-hooks

# Usage
```customHook.js
import easyHooks from 'easy-hooks'

export const customHook = () => {
  const STATE = [
    ['name', 0],
    ['age', 0]
  ]

  const hooks = easyHooks(STATE)

  const greeting = 'I'm' + hooks.name  + '. I'm '+ hooks.age + 'old.'

  return {
    ...hooks,
    greeting
  }
}
```

```
import React from 'react'
import { Text } from 'react-native'
import { customHook } from 'customHook'

const App = () => {
  const hooks = customHook()

  return(
    <View>
      <Text>I'm{hooks.name} {hooks.age} years old.<Text>
      <Text onPress={() => hooks.setName('Tom')}>change name<Text>
    </View>
  )
)


```
