import { dtoa_buffered } from "util/number";
import { bs } from "../../../modules/as-bs";

export function serializeFloat<T extends number>(data: T): void {
  bs.proposeSize(64);
  bs.offset += dtoa_buffered(bs.offset, data) << 1;
}
