import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewChild, NgModule, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import * as i1 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i7 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i9 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i3$1 from 'nowboard-icon';
import { NowboardIconModule } from 'nowboard-icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';

function FilterComponent_ng_container_2_ng_container_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r7.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r7.label, " ");
} }
function FilterComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "mat-select", 5);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r10); const item_r2 = i0.ɵɵnextContext().$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onApplyFilter(); });
    i0.ɵɵelementStart(3, "mat-option", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_ng_container_2_mat_option_5_Template, 2, 2, "mat-option", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.filterData.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r2.filterData.options);
} }
function FilterComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "input", 9);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r16); const item_r2 = i0.ɵɵnextContext().$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onApplyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker-toggle", 10)(4, "mat-datepicker", null, 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(5);
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r13)("min", item_r2.filterData.max)("max", item_r2.filterData.max)("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r13);
} }
function FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_2_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onSortChange(item_r2.filterData); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_ng_container_2_Template, 6, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_3_Template, 6, 6, "ng-container", 2);
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_Template, 6, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "sort");
} }
function FilterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 13);
    i0.ɵɵlistener("click", function FilterComponent_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onRefresh(); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "refresh");
    i0.ɵɵelementEnd()()();
} }
class FilterComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.datas = [];
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
    }
    ngOnInit() {
        this.dateAdapter.setLocale(this.lang);
        this.filterConfigBackup = JSON.stringify(this.filterConfig);
        console.log('--------------------BACKUP--------------------', this.filterConfig);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    onRefresh() {
        console.log('--------FILTER STRING---------', this.filterConfigBackup);
        if (this.filterConfigBackup) {
            this.filterConfig = JSON.parse(this.filterConfigBackup);
            this.onApplyFilter();
        }
    }
    onApplyFilter() {
        const filterResultEquality = {};
        const filterResultDate = {};
        const filterResultSort = {};
        for (const { filterData } of this.filterConfig) {
            for (const key in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, key) && filterData[key]) {
                    if (filterData["type"] === 'date') {
                        filterResultDate[`${filterData["key"]}-${filterData["operator"]}`] = {
                            operator: filterData["operator"],
                            value: filterData["value"],
                            key: filterData["key"]
                        };
                    }
                    else if (filterData["type"] === 'sort') {
                        filterResultSort[filterData["key"]] = filterData["value"];
                    }
                    else if (!!filterData["value"] || filterData["value"] === false) {
                        filterResultEquality[filterData["key"]] = filterData["value"];
                    }
                }
            }
        }
        const dataFilteredByEquality = _.filter(this.datas, filterResultEquality);
        const dataFilteredByDate = _.chain(dataFilteredByEquality).filter((data) => {
            let isTrue = true;
            for (const key in filterResultDate) {
                const dataDate = new Date(data[filterResultDate[key]['key']]);
                const filterDate = new Date(filterResultDate[key]["value"]);
                dataDate.setHours(0, 0, 0, 0);
                filterDate.setHours(0, 0, 0, 0);
                if (filterResultDate[key]["value"]) {
                    if (filterResultDate[key]["operator"] === 'gte' && dataDate.getTime() < filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'lte' && dataDate.getTime() > filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'eq' && dataDate.getTime() !== filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                }
            }
            return isTrue;
        }).value();
        this.onFilter.emit({ filter: filterResultEquality, datas: dataFilteredByDate });
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter" }, decls: 4, vars: 2, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, FilterComponent_li_3_Template, 4, 0, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withRefresh);
    } }, directives: [i2.NgForOf, i2.NgIf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <li class=\"filter-item\">\r\n        <ng-container *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='sort'\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span>{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </ng-container>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"onRefresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}ul{list-style:none}\n"] }]
    }], function () { return [{ type: i1.DateAdapter }]; }, { filterConfig: [{
            type: Input
        }], lang: [{
            type: Input
        }], withRefresh: [{
            type: Input
        }], datas: [{
            type: Input
        }], onSort: [{
            type: Output
        }], onFilter: [{
            type: Output
        }] }); })();

const _c0 = ["search"];
function ExpandableSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.searchText = $event; })("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.searchUpdate.next($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 6);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_1_Template_nb_icon_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onExpand(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText)("placeholder", ctx_r0.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.closeIcon)("size", 1.5);
} }
function ExpandableSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onExpand(); });
    i0.ɵɵelement(1, "nb-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r1.icon)("size", 1.5);
} }
class ExpandableSearchComponent {
    constructor() {
        this.placeholder = '';
        this.expandedWitdh = '396px';
        this.icon = 'search_1';
        this.closeIcon = 'close';
        this.closed = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.showField = false;
        this.searchText = "";
        this.searchUpdate = new Subject();
        // Debounce search.
        this.searchUpdate.pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(value => {
            this.search(value);
        });
    }
    ngOnInit() {
    }
    onExpand() {
        this.showField = !this.showField;
        if (!this.showField) {
            this.searchText = "";
            this.search('');
        }
        else {
            setTimeout(() => {
                this.searchElement?.nativeElement?.focus();
            }, 500);
        }
    }
    search(text) {
        const results = this.datas.filter((data) => Object.values(data).some((val) => String(val).toLowerCase().includes(text.toLowerCase())));
        this.onSearch.emit({ datas: results, searchText: text });
    }
}
ExpandableSearchComponent.ɵfac = function ExpandableSearchComponent_Factory(t) { return new (t || ExpandableSearchComponent)(); };
ExpandableSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableSearchComponent, selectors: [["ngx-expandable-search"]], viewQuery: function ExpandableSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchElement = _t.first);
    } }, inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch" }, decls: 3, vars: 2, consts: [[1, "search-text-container"], ["class", "expanded-search", 4, "ngIf"], ["class", "not-expanded-search", 3, "click", 4, "ngIf"], [1, "expanded-search"], ["type", "text", 1, "search-input", 3, "ngModel", "placeholder", "ngModelChange"], ["search", ""], [3, "icon", "size", "click"], [1, "not-expanded-search", 3, "click"], [3, "icon", "size"]], template: function ExpandableSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ExpandableSearchComponent_div_1_Template, 4, 4, "div", 1);
        i0.ɵɵtemplate(2, ExpandableSearchComponent_div_2_Template, 2, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showField);
    } }, directives: [i2.NgIf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i3$1.NowboardIconComponent], styles: ["[_nghost-%COMP%]{position:relative}.search-text-container[_ngcontent-%COMP%]{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{display:inline-flex}.search-text-container[_ngcontent-%COMP%]   .not-expanded-search[_ngcontent-%COMP%]{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;height:100%;outline:none;background:inherit}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{width:20px;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableSearchComponent, [{
        type: Component,
        args: [{ selector: 'ngx-expandable-search', template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"] }]
    }], function () { return []; }, { datas: [{
            type: Input
        }], searchsKey: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], expandedWitdh: [{
            type: Input
        }], icon: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], closed: [{
            type: Output
        }], onSearch: [{
            type: Output
        }], searchElement: [{
            type: ViewChild,
            args: ['search']
        }] }); })();

function AppComponent_ngx_filter_group_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-filter-group", 2);
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onFilterData($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
} }
function AppComponent_ngx_expandable_search_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 3);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_1_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onFilterData($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("lang", ctx_r1.lang)("datas", ctx_r1.datas);
} }
class AppComponent {
    constructor() {
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.searchType = 'search-group';
        this.datas = [];
        this.onFilter = new EventEmitter();
    }
    ngOnInit() {
    }
    onFilterData(e) {
        this.onFilter.emit(e);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter" }, decls: 2, vars: 2, consts: [[3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", 4, "ngIf"], [3, "lang", "datas", "onSearch", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter"], [3, "lang", "datas", "onSearch"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AppComponent_ngx_filter_group_0_Template, 1, 4, "ngx-filter-group", 0);
        i0.ɵɵtemplate(1, AppComponent_ngx_expandable_search_1_Template, 1, 2, "ngx-expandable-search", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-group");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-text");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter', template: "<ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n  (onFilter)=\"onFilterData($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n</ngx-filter-group>\r\n<ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n  [datas]=\"datas\">\r\n</ngx-expandable-search>", styles: [""] }]
    }], null, { filterConfig: [{
            type: Input
        }], lang: [{
            type: Input
        }], withRefresh: [{
            type: Input
        }], searchType: [{
            type: Input
        }], datas: [{
            type: Input
        }], onFilter: [{
            type: Output
        }] }); })();

class FilterModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('FilterModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: FilterModule,
            providers: []
        };
    }
}
FilterModule.ɵfac = function FilterModule_Factory(t) { return new (t || FilterModule)(i0.ɵɵinject(FilterModule, 12)); };
FilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FilterModule });
FilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [MatDatepickerModule], imports: [[
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            NowboardIconModule.forRoot({
                disabled_color: "#5E7290",
                primary: "#001B66"
            }),
            MatTooltipModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FilterComponent,
                    ExpandableSearchComponent,
                    AppComponent
                ],
                imports: [
                    FormsModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatSelectModule,
                    MatInputModule,
                    NowboardIconModule.forRoot({
                        disabled_color: "#5E7290",
                        primary: "#001B66"
                    }),
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatBottomSheetModule
                ],
                providers: [MatDatepickerModule],
                exports: [
                    AppComponent,
                ]
            }]
    }], function () { return [{ type: FilterModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterComponent,
        ExpandableSearchComponent,
        AppComponent], imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule, i3$1.NowboardIconModule, MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule], exports: [AppComponent] }); })();
i0.ɵɵsetComponentScope(AppComponent, [i2.NgIf, FilterComponent,
    ExpandableSearchComponent], []);

/*
 * Public API Surface of ngx-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppComponent, ExpandableSearchComponent, FilterComponent, FilterModule };
//# sourceMappingURL=ngx-filter.mjs.map
