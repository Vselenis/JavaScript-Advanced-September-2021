class List{
    constructor(){
    this.array = [];
    this.size = 0;
    }

    add(x){
        this.array.push(x);
        this.size += 1;
        this.array.sort((a,b) => a-b);

    }

    remove(i){
        this.outofBoundCheck(i);
        this.array.splice(i,1);
        this.size -= 1;
    }

    get(i){
        this.outofBoundCheck(i);
        return this.array[i]
    }

    outofBoundCheck(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error('No such index in list')
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
