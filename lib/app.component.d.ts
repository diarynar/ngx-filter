import { EventEmitter, OnInit } from '@angular/core';
import { IFilterConfiguration } from 'projects/filter/src/public-api';
import * as i0 from "@angular/core";
export declare class AppComponent implements OnInit {
    filterConfig: IFilterConfiguration[];
    lang: string;
    withRefresh: boolean;
    searchType: 'search-group' | 'search-text';
    datas: any[];
    onFilter: EventEmitter<any>;
    ngOnInit(): void;
    onFilterData(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "ngx-filter", never, { "filterConfig": "filterConfig"; "lang": "lang"; "withRefresh": "withRefresh"; "searchType": "searchType"; "datas": "datas"; }, { "onFilter": "onFilter"; }, never, never>;
}
