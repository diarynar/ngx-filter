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
    ngOnInit() {
        this.dateAdapter.setLocale(this.lang);
        this.filterConfigBackup = JSON.parse(JSON.stringify(this.filterConfig));
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    onRefresh() {
        this.filterConfig = this.filterConfigBackup;
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
    } }, directives: [i2.NgForOf, i2.NgIf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <li class=\"filter-item\">\r\n        <ng-container *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='sort'\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span>{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </ng-container>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"onRefresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}ul{list-style:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7Ozs7OztJQ0tSLHFDQUFrRjtJQUFDLFlBQ25GO0lBQUEsaUJBQWE7OztJQURELHVDQUFzQjtJQUFpRCxlQUNuRjtJQURtRixnREFDbkY7Ozs7SUFOTiw2QkFBc0Q7SUFDcEQseUNBQWtDLG9CQUFBO0lBQ3BCLCtQQUFtQyw4TEFBa0IsdUJBQWUsSUFBakM7SUFDN0MscUNBQXFCO0lBQUMsWUFDdEI7SUFBQSxpQkFBYTtJQUNiLDRHQUNhO0lBQ2YsaUJBQWEsRUFBQTtJQUVqQiwwQkFBZTs7O0lBUEMsZUFBbUM7SUFBbkMsa0RBQW1DO0lBQ3ZCLGVBQ3RCO0lBRHNCLHlEQUN0QjtJQUNzRCxlQUEwQjtJQUExQixvREFBMEI7Ozs7SUFLdEYsNkJBQW9EO0lBQ2xELHlDQUFrQyxlQUFBO0lBRTBCLDBQQUFtQyx5TEFDMUUsdUJBQWUsSUFEMkQ7SUFEN0YsaUJBRW9DO0lBQ3BDLDRDQUF3RSwrQkFBQTtJQUUxRSxpQkFBaUI7SUFDbkIsMEJBQWU7Ozs7SUFOSyxlQUF3QztJQUF4QyxxR0FBd0M7SUFBQyxvQ0FBd0IsK0JBQUEsK0JBQUEscUNBQUE7SUFHaEQsZUFBYztJQUFkLDBCQUFjOzs7SUFPL0MsZ0NBQWdEO0lBQUEsOEJBQWM7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QUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7OzhFQXpFVSxlQUFlO2tFQUFmLGVBQWU7UUNYNUIsMkJBQUssWUFBQTtRQUVELGtGQTZCZTtRQUNmLDhEQUlLO1FBRVAsaUJBQUssRUFBQTs7UUFwQzRCLGVBQWU7UUFBZiwwQ0FBZTtRQThCekMsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRyQmIsZUFBZTtjQUwzQixTQUFTOzJCQUNFLGtCQUFrQjs4REFLbkIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdwcm9qZWN0cy9maWx0ZXIvc3JjL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xyXG4gIH1cclxuICBmaWx0ZXJDb25maWdCYWNrdXAgPSBbXVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5sYW5nKTtcclxuICAgIHRoaXMuZmlsdGVyQ29uZmlnQmFja3VwID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlckNvbmZpZykpXHJcbiAgfVxyXG4gIG9uU29ydENoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyBcImRlc2NcIiA6ICdhc2MnXHJcbiAgICB0aGlzLmRhdGFzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW2l0ZW0ua2V5XSA+IGJbaXRlbS5rZXldID8gKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gMSA6IC0xKSA6IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IC0xIDogMSkpXHJcbiAgICB0aGlzLm9uQXBwbHlGaWx0ZXIoKVxyXG4gIH1cclxuXHJcbiAgb25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5maWx0ZXJDb25maWcgPSB0aGlzLmZpbHRlckNvbmZpZ0JhY2t1cDtcclxuICAgIHRoaXMub25BcHBseUZpbHRlcigpXHJcbiAgfVxyXG4gIG9uQXBwbHlGaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRFcXVhbGl0eSA9IHt9XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHREYXRlID0ge31cclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdFNvcnQgPSB7fVxyXG5cclxuXHJcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyRGF0YSB9IG9mIHRoaXMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlckRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpbHRlckRhdGEsIGtleSkgJiYgZmlsdGVyRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0YVtcInR5cGVcIl0gPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHREYXRlW2Ake2ZpbHRlckRhdGFbXCJrZXlcIl19LSR7ZmlsdGVyRGF0YVtcIm9wZXJhdG9yXCJdfWBdID0ge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJEYXRhW1wib3BlcmF0b3JcIl0sXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXSxcclxuICAgICAgICAgICAgICBrZXk6IGZpbHRlckRhdGFbXCJrZXlcIl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJEYXRhW1widHlwZVwiXSA9PT0gJ3NvcnQnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdFNvcnRbZmlsdGVyRGF0YVtcImtleVwiXV0gPSBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoISFmaWx0ZXJEYXRhW1widmFsdWVcIl0gfHwgZmlsdGVyRGF0YVtcInZhbHVlXCJdID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHRFcXVhbGl0eVtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YUZpbHRlcmVkQnlFcXVhbGl0eSA9IF8uZmlsdGVyKHRoaXMuZGF0YXMsIGZpbHRlclJlc3VsdEVxdWFsaXR5KTtcclxuICAgIGNvbnN0IGRhdGFGaWx0ZXJlZEJ5RGF0ZSA9IF8uY2hhaW4oZGF0YUZpbHRlcmVkQnlFcXVhbGl0eSkuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgIGxldCBpc1RydWUgPSB0cnVlO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJSZXN1bHREYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YURhdGUgPSBuZXcgRGF0ZShkYXRhW2ZpbHRlclJlc3VsdERhdGVba2V5XVsna2V5J11dKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlckRhdGUgPSBuZXcgRGF0ZShmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJ2YWx1ZVwiXSlcclxuICAgICAgICBkYXRhRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICAgIGZpbHRlckRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1widmFsdWVcIl0pIHtcclxuICAgICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2d0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpIDwgZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcIm9wZXJhdG9yXCJdID09PSAnbHRlJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgPiBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2VxJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgIT09IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzVHJ1ZVxyXG4gICAgfSkudmFsdWUoKVxyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgZmlsdGVyOiBmaWx0ZXJSZXN1bHRFcXVhbGl0eSwgZGF0YXM6IGRhdGFGaWx0ZXJlZEJ5RGF0ZSB9KVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdj5cclxuICA8dWwgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlckNvbmZpZ1wiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlwiPiB7e2l0ZW0uZmlsdGVyRGF0YS5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGl0ZW0uZmlsdGVyRGF0YS5vcHRpb25zXCI+IHt7b3B0aW9uLmxhYmVsfX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J2RhdGUnXCI+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3tpdGVtLmZpbHRlckRhdGE/LmxhYmVsfX1cIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgIFttaW5dPVwiaXRlbS5maWx0ZXJEYXRhLm1heFwiIFttYXhdPVwiaXRlbS5maWx0ZXJEYXRhLm1heFwiIFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J3NvcnQnXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW0taW5uZXJcIiAoY2xpY2spPVwib25Tb3J0Q2hhbmdlKGl0ZW0uZmlsdGVyRGF0YSlcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmZpbHRlckRhdGE/LmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZT09PSdhc2MnXCI+YXJyb3dfZG93bndhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWUhPT0nYXNjJ1wiPmFycm93X3Vwd2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGxpICpuZ0lmPVwid2l0aFJlZnJlc2hcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY2xhc3M9XCJuZ3gtcmVmcmVzaFwiIChjbGljayk9XCJvblJlZnJlc2goKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5yZWZyZXNoPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG5cclxuICA8L3VsPlxyXG48L2Rpdj4iXX0=