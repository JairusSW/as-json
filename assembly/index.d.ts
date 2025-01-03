/**
 * Class decorator that enables the class to be recognized as JSON.
 */
declare function json(..._): void;

/**
 * Class decorator that enables the class to be recognized as JSON.
 */
declare function serializable(..._): void;

/**
 * Property decorator that provides an alias name for JSON serialization.
 */
declare function alias(newName: string): Function;

/**
 * Property decorator that allows omits a field, making it be ignored.
 */
declare function omit(..._): void;

/**
 * Property decorator that allows a field to be omitted when equal to an Expression.
 */
declare function omitif(condition: string | ((value: any) => boolean)): Function;

/**
 * Property decorator that allows a field to be omitted when a property is null.
 */
declare function omitnull(..._): Function;

declare type Raw = number;
