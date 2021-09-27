import { DatabaseArray } from "./database-array";
import { instantiate } from "./database-common";

type DatabaseObjectData<T extends object> = 
{
    [K in keyof T]: T[K] extends (infer E)[] ? DatabaseArray<E> : T[K] extends object ? DatabaseObject<T[K]> : T[K];
};

/**
 * Class acting as an interface for access to database objects
 */
export class DatabaseObject<T extends object>
{
    public rawData: T;
    protected data: DatabaseObjectData<T>;
    
    public constructor(data: T, private parent: DatabaseArray<any> | DatabaseObject<any> | null) 
    {
        this.rawData = data;
        this.data = {} as any;

        const keys = Object.keys(data) as Array<keyof T>;

        for (const key of keys) 
        {
            const value = data[key];
            this.data[key] = instantiate(value, this) as any;
        }
    }

    /**
     * Gets the value of the database object given the key
     * @param key 
     * @returns 
     */
    public get<K extends keyof T>(key: K): DatabaseObjectData<T>[K]
    {
        return this.data[key];
    }
 
    /**
     * Sets the value of the database object given the key and the new value
     * @param key 
     * @param value
     * @returns 
     */
    public set<K extends keyof T>(key: K, value: T[K]) 
    {
        this.data[key] = instantiate(value, this) as any;
        this.rawData[key] = value;

        this.update();
    }

    public update() 
    {
        if (this.parent) { this.parent.update(); }
    }

}