

const assertEquals = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`passed`)
  } else {
    console.log(`FAILED:
      Expected:
        ${expected}
      But got:
        ${actual}
    `)
  }
}



let test1 = `9,2,"I'm allergic to dye #17, does this product contain any?",1598026382276,"l33tgamer","first.last@gmail.com",0,6`
let expected1 = `9,2,,1598026382276,,,0,6,`

// processDoubleQuotes(test1)
// let test2 = `7,2,"Where is this product made?",1590428073460,"iluvcatz","first.last@gmail.com",0,0`
// let expected2 = ``
console.log(processDoubleQuotes(test1))