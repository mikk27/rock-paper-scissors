

function createArray() {
    const array = []; // initialize a empty array
}

function addItem(item) {
    array.push(item); // add item to the end of the array
}

function removeItem(item) {
    const index = array.indexOf(item); // find the index of the item.
    if (index > -1) {
        array.splice(index, 1); // remove the item from the array
    }
    
}

function getArray() {
    return array.slice(item); // quick way to copy the array
} 


    return {
    addItem,
    removeItem,
    getArray
};



