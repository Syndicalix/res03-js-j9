class Field {
    
    #element
    #errors
    #name
    
    constructor(element, errors, name) {
        this.#element = element;
        this#errors = [];
        this.#name = name;
    }
    get element() {
        return this.#element;
    }
    
    set element(element) {
        this.#element = element;
    }
    
    get errors() {
        return this.#errors;
    }
    
    set errors(errors) {
        this.#errors = errors;
    }
    
    get name() {
        return this.#name;
    }
    
    set name(name) {
        this.#name = name
    }
    
    let  field = {
        
    }
    
    return JSON.stringify(field);
}

export { Field }




class TextField extends Field {
    validate()
    
}

class EmailField extends Field {
    validate()
}

class PasswordField extends Field {
    validate()
}