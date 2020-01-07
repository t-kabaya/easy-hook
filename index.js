const easyHooks = inputs => {
  const hooks = {}
  inputs.forEach(input => {
    const [state, setState] = useState(input[1])
    hooks[input[0]] = state
    hooks['set' + capitalize(input[0])] = setState
  })
  return hooks
}

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default easyHooks
