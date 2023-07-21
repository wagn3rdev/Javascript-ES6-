
type Person =  {
    name: string
    age: number
    contacts?: string[]
    isAlive?: boolean
}

const person: Person = {
    age: 33,
    name: 'Acme',
    contacts: ['acme@mail.com'],
    isAlive: true
}

const other: Person = {
  age: 25,
  name: "Foo"
};