import { ClassDeclaration, Expression, FieldDeclaration } from "assemblyscript/dist/assemblyscript.js";

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
  public flags: Map<PropertyFlags, Expression | null> = new Map<PropertyFlags, Expression | null>();
  public node!: FieldDeclaration;
  public byteSize: number = 0;
}

export class Schema {
  public static: boolean = true;
  public name: string = "";
  public members: Property[] = [];
  public parent: Schema | null = null;
  public node!: ClassDeclaration;
  public needsLink: string | null = null;
  public byteSize: number = 0;
  public deps: Schema[] = [];
}
