class Form {
    
    #fields;
    #submitted;
    
    constructor(fields, submitted) {
        this.#fields = [];
        this.#submitted = submitted;
    }
    get fields() {
        return this.#fields;
    }
    
    get submitted() {
        return this.#submitted;
    }
    
    set submitted(submitted) {
        this.#submitted = submitted
    }
}

export { Form }






class Fields {
    
    constructor()
    
    addField(Field)
    {
        
    }
    
    submit()
    {
        
    }
    
    validate()
    {
        
    }
    
    toJSON()
    {
        
    }
}