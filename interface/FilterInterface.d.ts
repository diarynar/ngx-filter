interface IOptions {
    value: string | boolean;
    label: string;
}
interface Idate {
    type: "date";
    key: string;
    operator: 'gte' | 'lte' | 'eq';
    label?: string;
}
interface ISelect {
    type: "select";
    key: string;
    value: string | number | boolean;
    options: IOptions[];
    label?: string;
}
interface ISort {
    type: "sort";
    key: string;
    value: 'asc' | 'desc';
    label?: string;
}
export interface IFilterConfiguration {
    filterData: Idate | ISelect | ISort;
}
export interface IFilterConfig {
    type: "select" | "date" | "sort";
    key: string;
    value?: string | number | boolean;
    label?: string;
    options?: IOptions[];
    operator?: 'gte' | 'lte' | 'eq';
}
export {};
