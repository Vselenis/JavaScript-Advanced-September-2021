function factory(library, orders){
    let result = []
    for (let order of orders){
      const composed = Object.assign({}, order.template);
      for (let part of order.parts){
        composed[part] = library[part];
      }
      result.push(composed);
    }
    return result
  }
  