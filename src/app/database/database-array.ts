import { instantiate } from "./database-common";
import { DatabaseObject } from "./database-object";

/**
 * Class acting as an interface for access to database arrays
 */
export class DatabaseArray<T>
{
    public rawData: T[];
    protected data: Array<T extends any[] ? DatabaseArray<T> : T extends object ? DatabaseObject<T> : T>;
    
    public constructor(data: T[], private parent: DatabaseArray<any> | DatabaseObject<any>) 
    {
        this.rawData = data;
        this.data = [];

        for (const elem of data) 
        {
            this.data.push(instantiate(elem, this));
        }
    }

    public get length() 
    {
        return this.data.length;
    }

    public push(...items: T[]) 
    {
        for (const elem of items) 
        {
            this.data.push(instantiate(elem, this));
        }

        this.rawData.push(...items);

        this.update();
    }

    public pop() 
    {
        const res = this.data.pop();
        this.rawData.pop();

        this.update();

        return res;
    }

    public get(index: number) 
    {
        return this.data[index];
    }

    public set(index: number, item: T) 
    {
        this.data[index] = instantiate(item, this);
        this.rawData[index] = item;

        this.update();
    }

    public forEach(fn: (element: T extends any[] ? DatabaseArray<T> : T extends object ? DatabaseObject<T> : T, index: number) => void) 
    {
        this.data.forEach(fn);
    }

    public map<V>(fn: (element: T extends any[] ? DatabaseArray<T> : T extends object ? DatabaseObject<T> : T, index: number) => V): V[]
    {
        return this.data.map(fn);
    }

    public splice(start: number, deleteCount?: number) 
    {
        const splice = this.data.splice(start, deleteCount);
        this.rawData.splice(start, deleteCount);
        this.update();

        return splice;
    }

    public update() 
    {
        if (this.parent) { this.parent.update(); }
    }
}