class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {  
        this.items.push(item);
<<<<<<< HEAD
        this.items.sort(function(a, b) {
            return a-b
        });
        this.length = this.items.length;
    }
    get(pos) {
        if (this.items[pos-1] != null) {
            return this.items[pos-1];
         } else {
            throw new TypeError("OutOfBounds Error");
         }
    }

    max() {
        if (this.items[0] == null) {
            throw new Error("EmptyList Error");
        } else {
            return this.items.reduce((a,b)=>Math.max(a,b), -Infinity);
        }
    }

    min() {
        if (this.items[0] == null) {
            throw new Error("EmptyList Error");
        } else {
            return this.items.reduce((a,b)=>Math.min(a,b), Infinity);
        }
    }

    average() {
        if (this.items[0] != null) { 
            return this.sum() / this.items.length;
    } else {

            throw new TypeError("EmptyList Error");
    }
}

    sum() {
        if (this.items[0] == null) {
            throw new TypeError("EmptyList Error");
        } else {
        let sum = 0;
        this.items.forEach(element => {
            sum += element;
        });
        return sum;
        }
    }
}

export default SortedList;
