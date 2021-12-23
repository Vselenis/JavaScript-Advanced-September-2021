function add(z){

    function addAgain(x){
        z += x
        return addAgain;
    }
    addAgain.toString = () => z;
    return addAgain;

}

consolse.log(add(1)(6)(-3))    