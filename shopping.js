const groceries = [
    {
        item: "milk",
        id: 1,
        price: 3,
        dateCreated: new Date,
    },
    {
        item: "eggs",
        id: 2,
        price: 3, 
        dateCreated: new Date,
    },
    {
        item: "pizza Rolls",
        id: 3,
        price: 5, 
        dateCreated: new Date,
    },
    {
        item: "beans",
        id: 4,
        price: 1, 
        dateCreated: new Date,
    },
    {
        item: "grapefruit",
        id: 5,
        price: 2, 
        dateCreated: new Date,
    },
    {
        item: "sandwitch Buns",
        id: 6,
        price: 4, 
        dateCreated: new Date,
    },
    {
        item: "condiments",
        id: 7,
        price: 6, 
        dateCreated: new Date
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
    dateCreated: new Date,
}
const rice = {
    item: "rice",
    price: 6,
    dateCreated: new Date,
}
const cerial = {
    item: "cerial",
    price: 4,
    dateCreated: new Date,
}
const steak = {
    item: "steak", 
    price: 10,
    dateCreated: new Date,
}
const chicken = {
    item: "chichen",
    price: 8,
    dateCreated: new Date,
}
addToShoppingList(cerial)
addToShoppingList(tomatos)
addToShoppingList(rice)
addToShoppingList(steak)
addToShoppingList(chicken)

for (item of groceries) {
    if (item.price > 8) {
    console.log(item)
}
}

// console.log(groceries)