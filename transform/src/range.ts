import { Node } from "assemblyscript/dist/assemblyscript.js";
import { Visitor } from "./visitor.js";

export class RangeTransform extends Visitor {
  constructor(public baseNode: Node) {
    super();
  }
  _visit(node: Node, ref: Node | null): void {
    node.range = this.baseNode.range;
    super._visit(node, ref);
  }
}