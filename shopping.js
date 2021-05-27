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
console.log(groceries)

const addToShoppingList = (itemObject) => {
    const lastIndex = groceries.length - 1
    const currentList = groceries[lastIndex]
    const maxId = currentList.id
    const idForNewItem = maxId + 1

    itemObject.id = idForNewItem
    groceries.push(itemObject)
}

dateCreated