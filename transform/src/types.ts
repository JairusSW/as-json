import { ClassDeclaration, FieldDeclaration } from "assemblyscript/dist/assemblyscript";

export enum PropertyFlags {
    OmitNull,
    OmitIf,
    Raw,
}

export class Property {
    public name: string = "";
    public alias: string | null = null;
    public type: string = "";
    public value: string | null = null;
    public flags: Map<PropertyFlags, string[]> = new Map<PropertyFlags, string[]>();
    public node!: FieldDeclaration;
}

export class Schema {
    public static: boolean = true;
    public name: string = "";
    public members: Property[] = [];
    public parent: Schema | null = null;
    public node!: ClassDeclaration;
    public needsLink: string | null = null;
}