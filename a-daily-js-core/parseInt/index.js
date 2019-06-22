// simple parseInt + log
const myInteger1 = parseInt('1234')
console.info(myInteger1)

// simple parseInt + log where string ends with letters => it will still print 1234 :-S
const myInteger2 = parseInt('1234abcd_why_do_I_work_I_really_wonder?')
console.info(myInteger2)

// simple parseInt + log  where string starts with letters => it will fail so myInteger isNan (which in my opinion should fail in the case above as well :-S)
const myInteger3 = parseInt('abcd1234')
console.info(myInteger3)

