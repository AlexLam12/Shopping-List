const groceries = [
    {
        item: "milk",
        id: 1,
        price: 3,
    },
    {
        item: "eggs",
        id: 2,
        price: 3, 
    },
    {
        item: "pizza Rolls",
        id: 3,
        price: 5, 
    },
    {
        item: "beans",
        id: 4,
        price: 1, 
    },
    {
        item: "grapefruit",
        id: 5,
        price: 2, 
    },
    {
        item: "sandwitch Buns",
        id: 6,
        price: 4, 
    },
    {
        item: "condiments",
        id: 7,
        price: 6, 
    }
    ]



const addToShoppingList = (itemObject) => {
    const lastIndex = groceries.length - 1
    const currentList = groceries[lastIndex]
    const maxId = currentList.id
    const idForNewItem = maxId + 1

    itemObject.id = idForNewItem
    groceries.push(itemObject)
}


const tomatos = {
    item: "tomatos",
    price: 4,
}
const rice = {
    item: "rice",
    price: 6,
}
const cerial = {
    item: "cerial",
    price: 4,
}
const steak = {
    item: "steak", 
    price: 10,
}
const chicken = {
    item: "chichen",
    price: 8,
}
addToShoppingList(cerial)
addToShoppingList(tomatos)
addToShoppingList(rice)
addToShoppingList(steak)
addToShoppingList(chicken)

console.log(groceries)