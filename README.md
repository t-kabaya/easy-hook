Syntax sugar for react hooks

# Installation
yarn add easy-hooks

# Usage

```
import easyHooks from 'easy-hooks'

export const useCalorieState = () => {
  const state = [
    ['name', 0],
    ['age', 0]
  ]

  const hooks = easyHooks(state)

  const greeting = 'I'm' + hooks.name  + '. I'm '+ hooks.age + 'old.'

  return {
    ...hooks,
    greeting
  }
}
```

