import { useState } from 'react'

const easyHooks = preStates => {
  const hooks = {}
  preStates.forEach(preState => {
    const [state, setState] = useState(preState[1])
    hooks[preState[0]] = state
    hooks['set' + capitalize(preState[0])] = setState
  })
  return hooks
}

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default easyHooks
