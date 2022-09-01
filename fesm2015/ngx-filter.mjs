import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

function FilterComponent_ng_container_2_ng_container_2_mat_option_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 7);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r6 = ctx.$implicit;
        i0.ɵɵproperty("value", option_r6.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", option_r6.label, " ");
    }
}
function FilterComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "mat-select", 5);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const item_r1 = i0.ɵɵnextContext().$implicit; return item_r1.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onApplyFilter(); });
        i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_2_mat_option_3_Template, 2, 2, "mat-option", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const item_r1 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", item_r1.filterData.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", item_r1.filterData.options);
    }
}
function FilterComponent_ng_container_2_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "input", 8);
        i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15); const item_r1 = i0.ɵɵnextContext().$implicit; return item_r1.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.onApplyFilter(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "mat-datepicker-toggle", 9)(4, "mat-datepicker", null, 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const _r12 = i0.ɵɵreference(5);
        const item_r1 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matDatepicker", _r12)("min", item_r1.filterData.max)("max", item_r1.filterData.max)("ngModel", item_r1.filterData.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r12);
    }
}
function FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "arrow_downward");
        i0.ɵɵelementEnd();
    }
}
function FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "arrow_upward");
        i0.ɵɵelementEnd();
    }
}
function FilterComponent_ng_container_2_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 11);
        i0.ɵɵlistener("click", function FilterComponent_ng_container_2_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r22); const item_r1 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onSortChange(item_r1.filterData); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template, 2, 0, "mat-icon", 3);
        i0.ɵɵtemplate(5, FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template, 2, 0, "mat-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const item_r1 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", item_r1.filterData.value === "asc");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.filterData.value !== "asc");
    }
}
function FilterComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "li", 2);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 3);
        i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_3_Template, 6, 5, "ng-container", 3);
        i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_Template, 6, 2, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const item_r1 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", item_r1.filterData.type === "select");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.filterData.type === "date");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.filterData.type === "sort");
    }
}
class FilterComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.filterConfig = [];
        this.lang = "fr";
        this.datas = [];
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
    }
    ngOnInit() {
        this.dateAdapter.setLocale(this.lang);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    onApplyFilter() {
        const filterResultEquality = {};
        const filterResultDate = {};
        const filterResultSort = {};
        for (const { filterData } of this.filterConfig) {
            for (const key in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, key) && filterData[key]) {
                    if (filterData["type"] === 'date') {
                        filterResultDate[filterData["key"]] = {
                            operator: filterData["operator"],
                            value: filterData["value"]
                        };
                    }
                    else if (filterData["type"] === 'sort') {
                        filterResultSort[filterData["key"]] = filterData["value"];
                    }
                    else if (!!filterData["value"]) {
                        filterResultEquality[filterData["key"]] = filterData["value"];
                    }
                }
            }
        }
        const dataFilteredByEquality = _.filter(this.datas, filterResultEquality);
        const dataFilteredByDate = _.chain(dataFilteredByEquality).filter((data) => {
            let isTrue = true;
            for (const key in filterResultDate) {
                const dataDate = new Date(data[key]);
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
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter" }, decls: 3, vars: 1, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "filter-item"], [4, "ngIf"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"]], template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "ul", 0);
            i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        }
    }, directives: [i2.NgForOf, i2.NgIf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon], styles: [".filter-container{display:flex;align-items:center;gap:10px}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
            type: Component,
            args: [{ selector: 'ngx-filter', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <li class=\"filter-item\">\r\n        <ng-container *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"picker\" [min]=\"item.filterData.max\"\r\n              [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='sort'\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span>Nom</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </ng-container>\r\n      </li>\r\n    </ng-container>\r\n\r\n\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}\n"] }]
        }], function () { return [{ type: i1.DateAdapter }]; }, { filterConfig: [{
                type: Input
            }], lang: [{
                type: Input
            }], datas: [{
                type: Input
            }], onSort: [{
                type: Output
            }], onFilter: [{
                type: Output
            }] });
})();

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
            MatCheckboxModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            MatChipsModule,
            MatGridListModule,
            MatRadioModule,
            MatPaginatorModule,
            CdkTableModule,
            MatSortModule,
            MatTableModule,
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            MatTooltipModule,
            MatTabsModule,
            MatSlideToggleModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule
        ], HttpClientModule,
        RouterModule,
        MatTabsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        FilterComponent,
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
                        MatCheckboxModule,
                        MatIconModule,
                        MatSelectModule,
                        MatInputModule,
                        MatChipsModule,
                        MatGridListModule,
                        MatRadioModule,
                        MatPaginatorModule,
                        CdkTableModule,
                        MatSortModule,
                        MatTableModule,
                        DragDropModule,
                        MatCardModule,
                        MatDialogModule,
                        MatStepperModule,
                        MatProgressBarModule,
                        MatTooltipModule,
                        MatTabsModule,
                        MatSlideToggleModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatBottomSheetModule
                    ],
                    providers: [MatDatepickerModule],
                    exports: [
                        FilterComponent,
                        HttpClientModule,
                        RouterModule,
                        MatTabsModule
                    ]
                }]
        }], function () {
        return [{ type: FilterModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    }, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterComponent], imports: [FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            MatChipsModule,
            MatGridListModule,
            MatRadioModule,
            MatPaginatorModule,
            CdkTableModule,
            MatSortModule,
            MatTableModule,
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            MatTooltipModule,
            MatTabsModule,
            MatSlideToggleModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule], exports: [FilterComponent,
            HttpClientModule,
            RouterModule,
            MatTabsModule] });
})();

/*
 * Public API Surface of ngx-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilterComponent, FilterModule };
//# sourceMappingURL=ngx-filter.mjs.map
