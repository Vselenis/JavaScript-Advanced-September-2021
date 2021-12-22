function solve(array){
    let arr = [];

    array.forEach(element => {
        if(element == 'print'){
            return print()
        }else{
            let [command, string] = element.split(' ')
            if (command == 'add'){
                return add(string)
            }else if(command == 'remove'){
                return remove(string)
            }
        }
    });

    function add(str){
        arr.push(str)
    }

    function remove(str){
        const del = arr.indexOf(str)
        arr.splice(del , 1)
    }

    function print(){
        console.log(arr.join(','))
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])