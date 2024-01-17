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
