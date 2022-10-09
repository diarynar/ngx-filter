import { EventEmitter, OnInit } from '@angular/core';
import { IFilterConfiguration } from '../public-api';
import * as i0 from "@angular/core";
export declare class NgxFilterLibraryComponent implements OnInit {
    filterConfig: IFilterConfiguration[];
    lang: string;
    withRefresh: boolean;
    withGlobalSearch: boolean;
    placeholder: string;
    searchType: 'search-group' | 'search-text' | 'search-full';
    datas: any;
    onFilter: EventEmitter<any>;
    onRefresh: EventEmitter<any>;
    configFilterGroup: never[];
    configFilterGlobal: string;
    filterConfigRefresh: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    onFilterData(e: any): void;
    refresh(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFilterLibraryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxFilterLibraryComponent, "ngx-filter", never, { "filterConfig": "filterConfig"; "lang": "lang"; "withRefresh": "withRefresh"; "withGlobalSearch": "withGlobalSearch"; "placeholder": "placeholder"; "searchType": "searchType"; "datas": "datas"; }, { "onFilter": "onFilter"; "onRefresh": "onRefresh"; }, never, ["*"], false>;
}
