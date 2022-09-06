import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/datepicker";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/button";
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
export class FilterComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.datas = [];
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.filterConfigBackup = [];
    }
    ngAfterContentInit() {
        console.log('-------------contentInit----------');
    }
    ngOnInit() {
        this.dateAdapter.setLocale(this.lang);
        console.log('-------------onInit----------');
    }
    ngAfterViewInit() {
        localStorage.setItem('ngx-filter', JSON.stringify(this.filterConfig));
        console.log('-------------viewInit----------');
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    onRefresh() {
        this.filterConfig = JSON.parse(localStorage.getItem('ngx-filter'));
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
    ngOnDestroy() {
        localStorage.removeItem('ngx-filter');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEgsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7Ozs7Ozs7SUNLUixxQ0FBa0Y7SUFBQyxZQUNuRjtJQUFBLGlCQUFhOzs7SUFERCx1Q0FBc0I7SUFBaUQsZUFDbkY7SUFEbUYsZ0RBQ25GOzs7O0lBTk4sNkJBQXNEO0lBQ3BELHlDQUFrQyxvQkFBQTtJQUNwQiwrUEFBbUMsOExBQWtCLHVCQUFlLElBQWpDO0lBQzdDLHFDQUFxQjtJQUFDLFlBQ3RCO0lBQUEsaUJBQWE7SUFDYiw0R0FDYTtJQUNmLGlCQUFhLEVBQUE7SUFFakIsMEJBQWU7OztJQVBDLGVBQW1DO0lBQW5DLGtEQUFtQztJQUN2QixlQUN0QjtJQURzQix5REFDdEI7SUFDc0QsZUFBMEI7SUFBMUIsb0RBQTBCOzs7O0lBS3RGLDZCQUFvRDtJQUNsRCx5Q0FBa0MsZUFBQTtJQUUwQiwwUEFBbUMseUxBQzFFLHVCQUFlLElBRDJEO0lBRDdGLGlCQUVvQztJQUNwQyw0Q0FBd0UsK0JBQUE7SUFFMUUsaUJBQWlCO0lBQ25CLDBCQUFlOzs7O0lBTkssZUFBd0M7SUFBeEMscUdBQXdDO0lBQUMsb0NBQXdCLCtCQUFBLCtCQUFBLHFDQUFBO0lBR2hELGVBQWM7SUFBZCwwQkFBYzs7O0lBTy9DLGdDQUFnRDtJQUFBLDhCQUFj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QUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDbEcsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDZixPQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLE1BQU0sQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtJQUNqRixDQUFDO0lBQ0QsV0FBVztRQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7OEVBckZVLGVBQWU7a0VBQWYsZUFBZTtRQ1g1QiwyQkFBSyxZQUFBO1FBRUQsa0ZBNkJlO1FBQ2YsOERBSUs7UUFFUCxpQkFBSyxFQUFBOztRQXBDNEIsZUFBZTtRQUFmLDBDQUFlO1FBOEJ6QyxlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRHJCYixlQUFlO2NBTDNCLFNBQVM7MkJBQ0Usa0JBQWtCOzhEQUtuQixZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xyXG4gIH1cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLWNvbnRlbnRJbml0LS0tLS0tLS0tLScpO1xyXG5cclxuICB9XHJcbiAgZmlsdGVyQ29uZmlnQmFja3VwID0gW11cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKHRoaXMubGFuZyk7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLW9uSW5pdC0tLS0tLS0tLS0nKTtcclxuXHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZ3gtZmlsdGVyJywgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJDb25maWcpKVxyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS12aWV3SW5pdC0tLS0tLS0tLS0nKTtcclxuICB9XHJcbiAgb25Tb3J0Q2hhbmdlKGl0ZW0pIHtcclxuICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlID09PSAnYXNjJyA/IFwiZGVzY1wiIDogJ2FzYydcclxuICAgIHRoaXMuZGF0YXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGFbaXRlbS5rZXldID4gYltpdGVtLmtleV0gPyAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAxIDogLTEpIDogKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gLTEgOiAxKSlcclxuICAgIHRoaXMub25BcHBseUZpbHRlcigpXHJcbiAgfVxyXG5cclxuICBvblJlZnJlc2goKSB7XHJcbiAgICB0aGlzLmZpbHRlckNvbmZpZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25neC1maWx0ZXInKSlcclxuICAgIHRoaXMub25BcHBseUZpbHRlcigpXHJcbiAgfVxyXG4gIG9uQXBwbHlGaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRFcXVhbGl0eSA9IHt9XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHREYXRlID0ge31cclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdFNvcnQgPSB7fVxyXG5cclxuXHJcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyRGF0YSB9IG9mIHRoaXMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlckRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpbHRlckRhdGEsIGtleSkgJiYgZmlsdGVyRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0YVtcInR5cGVcIl0gPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHREYXRlW2Ake2ZpbHRlckRhdGFbXCJrZXlcIl19LSR7ZmlsdGVyRGF0YVtcIm9wZXJhdG9yXCJdfWBdID0ge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJEYXRhW1wib3BlcmF0b3JcIl0sXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXSxcclxuICAgICAgICAgICAgICBrZXk6IGZpbHRlckRhdGFbXCJrZXlcIl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJEYXRhW1widHlwZVwiXSA9PT0gJ3NvcnQnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdFNvcnRbZmlsdGVyRGF0YVtcImtleVwiXV0gPSBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoISFmaWx0ZXJEYXRhW1widmFsdWVcIl0gfHwgZmlsdGVyRGF0YVtcInZhbHVlXCJdID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHRFcXVhbGl0eVtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YUZpbHRlcmVkQnlFcXVhbGl0eSA9IF8uZmlsdGVyKHRoaXMuZGF0YXMsIGZpbHRlclJlc3VsdEVxdWFsaXR5KTtcclxuICAgIGNvbnN0IGRhdGFGaWx0ZXJlZEJ5RGF0ZSA9IF8uY2hhaW4oZGF0YUZpbHRlcmVkQnlFcXVhbGl0eSkuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgIGxldCBpc1RydWUgPSB0cnVlO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJSZXN1bHREYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YURhdGUgPSBuZXcgRGF0ZShkYXRhW2ZpbHRlclJlc3VsdERhdGVba2V5XVsna2V5J11dKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlckRhdGUgPSBuZXcgRGF0ZShmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJ2YWx1ZVwiXSlcclxuICAgICAgICBkYXRhRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICAgIGZpbHRlckRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1widmFsdWVcIl0pIHtcclxuICAgICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2d0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpIDwgZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcIm9wZXJhdG9yXCJdID09PSAnbHRlJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgPiBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2VxJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgIT09IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzVHJ1ZVxyXG4gICAgfSkudmFsdWUoKVxyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgZmlsdGVyOiBmaWx0ZXJSZXN1bHRFcXVhbGl0eSwgZGF0YXM6IGRhdGFGaWx0ZXJlZEJ5RGF0ZSB9KVxyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduZ3gtZmlsdGVyJylcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPHVsIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJDb25maWdcIj5cclxuICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nc2VsZWN0J1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJcIj4ge3tpdGVtLmZpbHRlckRhdGEubGFiZWx9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpdGVtLmZpbHRlckRhdGEub3B0aW9uc1wiPiB7e29wdGlvbi5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdkYXRlJ1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19XCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcclxuICAgICAgICAgICAgICBbbWluXT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbbWF4XT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbKG5nTW9kZWwpXT1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzb3J0J1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtLWlubmVyXCIgKGNsaWNrKT1cIm9uU29ydENoYW5nZShpdGVtLmZpbHRlckRhdGEpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWU9PT0nYXNjJ1wiPmFycm93X2Rvd253YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlIT09J2FzYydcIj5hcnJvd191cHdhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxsaSAqbmdJZj1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNsYXNzPVwibmd4LXJlZnJlc2hcIiAoY2xpY2spPVwib25SZWZyZXNoKClcIj5cclxuICAgICAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuXHJcbiAgPC91bD5cclxuPC9kaXY+Il19