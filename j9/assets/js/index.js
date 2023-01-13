class Form {
    #fields;
    #submitted;
    
    constructor(fields, submitted) {
        this.#fields = fields;
        this.#submitted = submitted;
    }
    get fields() {
        retur this.#fields;
    }
    
    get submitted() {
        return this.#submitted;
    }
    
    set submitted(submitted) {
        this.#submitted = submitted
    }
}

export { Form }