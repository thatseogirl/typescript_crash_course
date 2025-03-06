//basic types
let id: number = 5
let age: number = 8
let maritalStatus: boolean = true
let company: string = "mypersonal"
let x: any = 7
//array types
let arrays: object[]= [{"key": "value"}]
let anyArray: any[]= []

//Tuple arrays
let tupleArray1: [number,string,boolean] = [1, "shshsh", true] //single array
let tupleArray2: [number,string][] = [                         //multiple array
    [1, "sample"],
    [2, "samle2"]
]

//unions
let pid: string | number = "samson"

//enum
enum Directions1  {
    up,down,left,right
}

//object tyoe
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "shade"
}

//type Assertion
let cid: any = 1
let typeAssertionTest= <string>cid   
// or 
let typeAssertionTest2= cid as string

typeAssertionTest = "8"

//function types
function addNumber(x: number,y: number): number {
 return x + y
}

//functions with no returns 
function noReturn (message: string | number): void{
    console.log(message)
}
noReturn("you're welcome here ")