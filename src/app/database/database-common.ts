import { DatabaseArray } from "./database-array";
import { DatabaseObject } from "./database-object";

/**
 * Checks if the given argument is an object
 * @param obj 
 * @returns 
 */
export function isObject(obj: any): obj is object 
{
    return typeof obj === "object" && !Array.isArray(obj);
}

/**
 * Instantiate the given element will return the appropriate database object if an array or an object is given as a parameter
 * @param elem 
 * @param parent 
 * @returns 
 */
export function instantiate<T>(elem: T[] | T, parent: DatabaseArray<any> | DatabaseObject<any>): T extends any[] ? DatabaseArray<T> : T extends object ? DatabaseObject<T> : T
{
    if (isObject(elem)) 
    {
        return new DatabaseObject(elem, parent) as any;
    }

    if (Array.isArray(elem)) 
    {
        return new DatabaseArray<T>(elem, parent) as any;
    }

    return elem as any;
}