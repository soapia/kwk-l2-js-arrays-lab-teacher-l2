// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  // const newArray = []
  // newArray.push(drivers[0], drivers[1], drivers[2])
  // newArray.push(name)
  // return newArray
  return drivers.splice(-1, 0, name)
}

function prependDriver(name) {
  const newArray = []
  newArray.push(drivers[0], drivers[1], drivers[2])
  newArray.unshift(name)
  return newArray
}

function removeLastDriver() {
  const newArray = []
  newArray.push(drivers[0], drivers[1], drivers[2])
  newArray.pop(name)
  return newArray
}

function removeFirstDriver() {
  const newArray = []
  newArray.push(drivers[0], drivers[1], drivers[2])
  newArray.shift(name)
  return newArray
}