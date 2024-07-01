import { bl } from "../bl";
interface GeneratedInterface {
    __SERIALIZE(): string;
    __SERIALIZE_BL(): void;
}
// @ts-ignore: Decoraor valid here
@inline export function serializeObject<T extends GeneratedInterface>(data: T): string {
    return changetype<nonnull<T>>(data).__SERIALIZE();
}

// @ts-ignore: Decoraor valid here
@inline export function serializeObjectBL<T extends GeneratedInterface>(data: T): void {
    changetype<nonnull<T>>(data).__SERIALIZE_BL();
}