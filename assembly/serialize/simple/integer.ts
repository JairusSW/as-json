import { itoa_buffered } from "util/number";
import { bs } from "../../../modules/as-bs";

export function serializeInteger<T extends number>(data: T): void {
  bs.proposeSize(sizeof<T>() << 3);
  bs.offset += itoa_buffered(bs.offset, data) << 1;
}
