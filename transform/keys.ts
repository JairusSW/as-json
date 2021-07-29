import { ClassDeclaration, FieldDeclaration } from "visitor-as/as";
import {
    SimpleParser,
    BaseVisitor
} from "visitor-as";

import { toString } from "visitor-as/dist/utils";

class ObjectKeysValues extends BaseVisitor {
    private keysList = '['
    private valuesList = '['

    visitFieldDeclaration(node: FieldDeclaration): void {
        const name = toString(node.name)
        if (node.type) {
            this.keysList += `'${name.toString()}',`
        }
    }

    visitClassDeclaration(node: ClassDeclaration): void {
        if (node.members) {

            this.visit(node.members)

            const keysMember = SimpleParser.parseClassMember(`keys: ${this.keysList.slice(0, this.keysList.length - 1)}]`, node)

            node.members.push(keysMember)

            const valuesMember = SimpleParser.parseClassMember(`values: ${this.valuesList.slice(0, this.valuesList.length - 1)}]`, node)

            node.members.push(valuesMember)

            this.keysList = '['
            
            this.valuesList = '['
            
        }
    }

    static visit(node: ClassDeclaration): void {
        new ObjectKeysValues().visit(node);
    }
}

export = class ObjectKeysValuesTransform extends Transform {
    // Trigger the transform after parse.
    afterParse(parser: Parser): void {
        // Create new transform
        const transformer = new ObjectKeysValues();
        // Loop over every source
        // @ts-ignore
        for (const source of parser.sources) {
            // Ignore all lib (std lib). Visit everything else.
            if (!source.isLibrary && !source.internalPath.startsWith(`~lib/`)) {
                transformer.visit(source);
            }
        }
    }
};

