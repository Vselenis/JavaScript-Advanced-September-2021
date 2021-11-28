function sort_names(array){
    let result = array.slice(0).sort((a, b) => a.localeCompare(b)).map((name, index)=> {
        let result = `${index+1}.${name}`
        return result;
    })
    return result.join('\n');
}


