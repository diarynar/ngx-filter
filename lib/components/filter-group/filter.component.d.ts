import { AfterContentInit, AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { IFilterConfiguration } from '../../../public-api';
import * as i0 from "@angular/core";
export declare class FilterComponent implements OnInit, AfterViewInit, AfterContentInit {
    private dateAdapter;
    filterConfig: IFilterConfiguration[];
    lang: string;
    withRefresh: boolean;
    datas: any[];
    onSort: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    constructor(dateAdapter: DateAdapter<any>);
    ngAfterContentInit(): void;
    filterConfigBackup: any[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onSortChange(item: any): void;
    onRefresh(): void;
    onApplyFilter(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "ngx-filter-group", never, { "filterConfig": "filterConfig"; "lang": "lang"; "withRefresh": "withRefresh"; "datas": "datas"; }, { "onSort": "onSort"; "onFilter": "onFilter"; }, never, never>;
}
