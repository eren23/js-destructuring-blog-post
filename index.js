//ARRAYS

const array1 = [1,2,3]

// Old Way
const firstOld = array1[0]
const secondOld = array1[1]
const thirdOld = array1[2]

console.log("First ", firstOld, "Second ", secondOld, "Third ", thirdOld)

const array2 = ["a", "b", "c", "d", "e"]

// New Way
const [firstNew, secondNew, thirdNew] = array2

console.log("First ", firstNew, "Second ", secondNew, "Third ", thirdNew)

const [,secondNewSpread, ...others] = array2

console.log("Second Index Before Spread: " ,secondNewSpread, "Remainers: ", others)


//OBJECTS

const obj = {
    apple: "apple",
    melon: "melon",
    tree: "tree"
}

// Old Way
const appleOld = obj.apple
const melonOld = obj.melon
const treeOld = obj.tree

console.log("First ", appleOld, "Second ", melonOld, "Third ", treeOld)

// New Way
const {apple, melon, tree} = obj

console.log("First ", apple, "Second ", melon, "Third ", tree)

// Nested Object
const nestedObj = {
    outer: {
        inner: "inner"
    }
}

const {outer:{inner}} = nestedObj

console.log(inner)

//POPULAR USE CASE

const parameters = {name: "eren", surname: "akbulut"}

const destructedFunc =({name, surname})=>{
    console.log(name, surname)
}

destructedFunc(parameters)

