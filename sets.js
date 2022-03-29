//Manuel Martinez
//Sets data structure

function mySet() {

    //var collection holds the set
    var collection = []

    //has method checks if item is in set
    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }

    //values method returns all items in the list
    this.values = function() {
        return collection
    }

    //add method adds element to the set
    this.add = function(element) {
        if(!this.has(element)) {    //must not be in set to add
            collection.push(element)
            return true
        }
        return false
    }

    //remove method removes element from the set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
        return false
    }

    //size methods returns length of set
    this.size = function() {
        return collection.length
    }

    //union method returns union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet()
        var firstSet = this.values()
        var secondSet = otherSet.values()

        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet
    }

    //intersection method returns intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if (otherSet.has(e)) {
                intersectionSet.add(e)
            }
        })
        return intersectionSet
    }

    //difference method returns difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        }) 
        return differenceSet
    }

    //subset method tests if set is a subset of different set
    this.subset = function(otherSet) {
        var firstSet = this.values()
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }

}