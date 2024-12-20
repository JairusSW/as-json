/**
 * Class decorator that enables the class to be serializable as JSON.
 */
declare function json(target: any): void;

/**
 * Class decorator that enables the class to be serializable as JSON.
 */
declare function serializable(target: any): void;

/**
 * Property decorator that provides an alias name for JSON serialization.
 */
declare function alias(name: string): Function;

/**
 * Property decorator that allows omits a field, making it be ignored.
 */
declare function omit(): Function;

/**
 * Property decorator that allows a field to be omitted when equal to an Expression.
 */
declare function omitif(condition: string): Function;

/**
 * Property decorator that allows a field to be omitted when a property is null.
 */
declare function omitnull(): Function;

export namespace JSON {
  export type Raw = string;
}
