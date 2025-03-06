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

//interfaces cannot be used in case or premitives or union  e.g of interface with objects

interface userInterface {
    readonly id: number, //this is a read only property
    name: string
    age? : number //this is an optional property
}

const user2: userInterface = {
id: 2,
name: "sample"
}

//using interface with functions 
interface mathsFunc {
    (x: number, y:number): number 
}

const subtractNum: mathsFunc = (x: number, y: number): number => x - y

// classes examples

interface personInterface {
    id: number, 
    name: string,
    register(): string
}
class Person implements personInterface{
    id: number
    name: string

    constructor (id: number, name: string) {
       this.id=id
       this.name = name
    }
    register() {
        return `${this.name} is now registered`
    }
}

const NewUser = new Person(1, "user001")

//sub classes

class Employee extends Person{
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}
const emp = new Employee(2, "testUser", "Engineer")

console.log(NewUser.register(), emp)

//generics array will allow for number or string or any type of array with the types defined

const getItems = <ElementType>(items: ElementType[]) : ElementType[] => { ///ElementType CAN BE ANY NAME like(T), or w or anything 
return new Array().concat(items)
}

let newArray = getItems<number>([1,2, 3,4,5,6])

let newArray2 = getItems<string>(["hshsh","dhhdhd", "jdhhdd"])