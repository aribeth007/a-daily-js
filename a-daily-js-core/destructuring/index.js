////////////////////////////////
// 1. Destructuring for arrays//
////////////////////////////////

// first element and rest of array
const [first, ...rest] = ['first', 'second', 'third']
console.info('First', first)
console.info('Rest', rest)

// first three elements of array
const [a, b, c] = [1, 2, 3, 4, 5]
console.info('a', a)
console.info('b', b)
console.info('c', c)

// third element of array
const [,,third]=['a', 'b', 'c']
console.info('Third', third)

/////////////////////////////////
// 2. Destructuring for objects//
/////////////////////////////////

// by key
const { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.info(foo);
console.info(bar);

// with bind
const object1 = { name: 'Keyboard' }
const object2 = { name: 'Pen' }
const { name: keyboardName } = object1
const { name: penName } = object2
console.info('KeyboardName', keyboardName)
console.info('PenName', penName)

// Complex objects
const bed = {
    length: 210,
    width: 180
}
const flower = {
    name: 'My Beautiful Flower'
}
const room1 = {
    bed,
    flower
}
const room2 = {
    name: 'Empty room',
    light: true
}

const room1AndRoom2 = {
    ...room1,
    ...room2
}
console.info('Simple room1AndRoom2', room1AndRoom2)
// { bed: { length: 210, width: 180 }, flower: { name: 'My Beautiful Flower' }, name: 'Empty room', light: true }

room1.bed.length = 0
room2.name = 'Empty room has changed'
console.info('Simple room1AndRoom2', room1AndRoom2)
// { bed: { length: 0, width: 180 }, flower: { name: 'My Beautiful Flower' }, name: 'Empty room',  light: true }
// ^ because we changed bed which is passed by reference when we destructure like this

