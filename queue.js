//Manuel Martinez
//Queue Data Structure
//FIFO - First In First Out

function Queue() {
    collection = []
    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element)
    }

    this.dequeue = function(element) {
        return collection.shift()
    }

    this.front = function() {
        return collection[0]
    }

    this.size = function() {
        return collection.length
    }

    this.isEmpty = function() {
        return (collection.length === 0)
    }
}