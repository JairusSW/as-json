export class SchemaMember {
    constructor() {
        this.key = "";
        this.type = "";
        this.value = null;
        this.serialize = null;
        this.deserialize = null;
        this.initialize = null;
    }
}
export class SchemaData {
    constructor() {
        this.name = "";
        this.members = [];
        this.parent = null;
    }
}
