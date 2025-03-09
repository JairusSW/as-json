import { Visitor } from "./visitor.js";
export class RangeTransform extends Visitor {
    baseNode;
    constructor(baseNode) {
        super();
        this.baseNode = baseNode;
    }
    _visit(node, ref) {
        node.range = this.baseNode.range;
        super._visit(node, ref);
    }
}
//# sourceMappingURL=range.js.map