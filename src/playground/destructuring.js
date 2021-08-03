// object:

const book ={ 
    title: "some title",
    author: "name",
    publisher: {
        name: "penguin"
    }
}

const { name : publisherName = "self publish"} = book.publisher;

console.log("the publisher is ${publisherName}");


// arrays:
console.log(store);
const address = [1,2,3,4];

const [a ,, c] = address;

console.log(a,c);