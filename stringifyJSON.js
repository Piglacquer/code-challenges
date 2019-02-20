const stringifyJSON = (data) => {
  const itemType = determineType(data)
  switch (itemType) {
    case 'number':
    case 'boolean':
      return data.toString()
    case 'string':
      return `"${data}"`
    case 'object':
      return isObject(data)
    case 'array':
      return isArray(data)
    case 'null':
      return 'null'
    case 'function':
    case 'undefined':
      return
    default:
      return 'You broke me, tell me what you passed me'
  }
}

const isObject = (object) => {
  const stringifiedArr = []
  for (let key in object) {
    let value = object[key]
    let stringifiedKey = stringifyJSON(key)
    let stringifiedValue = stringifyJSON(value)
    if (stringifiedValue) stringifiedArr.push(`${stringifiedKey}:${stringifiedValue}`)
  }

  return `{${stringifiedArr.join()}}`
}

const isArray = (array) => {
  const stringifiedArray = array.map(item => {
    return stringifyJSON(item)
  })
  return `[${stringifiedArray}]`
}

const determineType = (data) => {
  let dataType = typeof data
  switch (dataType) {
    case 'number':
      return 'number'
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'undefined':
      return 'undefined'
    case 'object':
      if (Array.isArray(data)) return 'array'
      if (data === null) return 'null'
      return 'object'
    case 'function':
      return 'function'
    default:
      return 'Im broken'
  }
}

module.exports = {
  stringifyJSON
}
