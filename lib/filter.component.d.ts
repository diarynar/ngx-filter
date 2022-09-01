import { EventEmitter, OnInit } from '@angular/core';
import { IFilterConfiguration } from '../public-api';
import { DateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class FilterComponent implements OnInit {
    private dateAdapter;
    filterConfig: IFilterConfiguration[];
    lang: string;
    datas: any[];
    onSort: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    constructor(dateAdapter: DateAdapter<any>);
    ngOnInit(): void;
    onSortChange(item: any): void;
    onApplyFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "ngx-filter", never, { "filterConfig": "filterConfig"; "lang": "lang"; "datas": "datas"; }, { "onSort": "onSort"; "onFilter": "onFilter"; }, never, never>;
}
