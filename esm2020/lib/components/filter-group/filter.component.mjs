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
        this.filterConfigBackup = _.cloneDeep(this.filterConfig);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    onRefresh() {
        this.filterConfig = _.cloneDeep(this.filterConfigBackup);
        this.onFilter.emit({ filter: this.filterConfig, datas: this.datas });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7Ozs7OztJQ0tSLHFDQUFrRjtJQUFDLFlBQ25GO0lBQUEsaUJBQWE7OztJQURELHVDQUFzQjtJQUFpRCxlQUNuRjtJQURtRixnREFDbkY7Ozs7SUFOTiw2QkFBc0Q7SUFDcEQseUNBQWtDLG9CQUFBO0lBQ3BCLCtQQUFtQyw4TEFBa0IsdUJBQWUsSUFBakM7SUFDN0MscUNBQXFCO0lBQUMsWUFDdEI7SUFBQSxpQkFBYTtJQUNiLDRHQUNhO0lBQ2YsaUJBQWEsRUFBQTtJQUVqQiwwQkFBZTs7O0lBUEMsZUFBbUM7SUFBbkMsa0RBQW1DO0lBQ3ZCLGVBQ3RCO0lBRHNCLHlEQUN0QjtJQUNzRCxlQUEwQjtJQUExQixvREFBMEI7Ozs7SUFLdEYsNkJBQW9EO0lBQ2xELHlDQUFrQyxlQUFBO0lBRTBCLDBQQUFtQyx5TEFDMUUsdUJBQWUsSUFEMkQ7SUFEN0YsaUJBRW9DO0lBQ3BDLDRDQUF3RSwrQkFBQTtJQUUxRSxpQkFBaUI7SUFDbkIsMEJBQWU7Ozs7SUFOSyxlQUF3QztJQUF4QyxxR0FBd0M7SUFBQyxvQ0FBd0IsK0JBQUEsK0JBQUEscUNBQUE7SUFHaEQsZUFBYztJQUFkLDBCQUFjOzs7SUFPL0MsZ0NBQWdEO0lBQUEsOEJBQWM7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TTtxQkFDUDtpQkFDRjthQUNGO1lBQ0QsT0FBTyxNQUFNLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUE7SUFDakYsQ0FBQzs7OEVBeEVVLGVBQWU7a0VBQWYsZUFBZTtRQ1g1QiwyQkFBSyxZQUFBO1FBRUQsa0ZBNkJlO1FBQ2YsOERBSUs7UUFFUCxpQkFBSyxFQUFBOztRQXBDNEIsZUFBZTtRQUFmLDBDQUFlO1FBOEJ6QyxlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRHJCYixlQUFlO2NBTDNCLFNBQVM7MkJBQ0Usa0JBQWtCOzhEQUtuQixZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xyXG4gIH1cclxuICBmaWx0ZXJDb25maWdCYWNrdXAgPSBbXVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5sYW5nKTtcclxuICAgIHRoaXMuZmlsdGVyQ29uZmlnQmFja3VwID0gXy5jbG9uZURlZXAodGhpcy5maWx0ZXJDb25maWcpXHJcbiAgfVxyXG4gIG9uU29ydENoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyBcImRlc2NcIiA6ICdhc2MnXHJcbiAgICB0aGlzLmRhdGFzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW2l0ZW0ua2V5XSA+IGJbaXRlbS5rZXldID8gKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gMSA6IC0xKSA6IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IC0xIDogMSkpXHJcbiAgICB0aGlzLm9uQXBwbHlGaWx0ZXIoKVxyXG4gIH1cclxuXHJcbiAgb25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5maWx0ZXJDb25maWcgPSBfLmNsb25lRGVlcCh0aGlzLmZpbHRlckNvbmZpZ0JhY2t1cClcclxuICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7IGZpbHRlcjogdGhpcy5maWx0ZXJDb25maWcsIGRhdGFzOiB0aGlzLmRhdGFzIH0pXHJcbiAgfVxyXG5cclxuICBvbkFwcGx5RmlsdGVyKCkge1xyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0RXF1YWxpdHkgPSB7fVxyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0RGF0ZSA9IHt9XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRTb3J0ID0ge31cclxuICAgIGZvciAoY29uc3QgeyBmaWx0ZXJEYXRhIH0gb2YgdGhpcy5maWx0ZXJDb25maWcpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyRGF0YSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmlsdGVyRGF0YSwga2V5KSAmJiBmaWx0ZXJEYXRhW2tleV0pIHtcclxuICAgICAgICAgIGlmIChmaWx0ZXJEYXRhW1widHlwZVwiXSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdERhdGVbYCR7ZmlsdGVyRGF0YVtcImtleVwiXX0tJHtmaWx0ZXJEYXRhW1wib3BlcmF0b3JcIl19YF0gPSB7XHJcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IGZpbHRlckRhdGFbXCJvcGVyYXRvclwiXSxcclxuICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyRGF0YVtcInZhbHVlXCJdLFxyXG4gICAgICAgICAgICAgIGtleTogZmlsdGVyRGF0YVtcImtleVwiXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckRhdGFbXCJ0eXBlXCJdID09PSAnc29ydCcpIHtcclxuICAgICAgICAgICAgZmlsdGVyUmVzdWx0U29ydFtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgfSBlbHNlIGlmICghIWZpbHRlckRhdGFbXCJ2YWx1ZVwiXSB8fCBmaWx0ZXJEYXRhW1widmFsdWVcIl0gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdEVxdWFsaXR5W2ZpbHRlckRhdGFbXCJrZXlcIl1dID0gZmlsdGVyRGF0YVtcInZhbHVlXCJdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhRmlsdGVyZWRCeUVxdWFsaXR5ID0gXy5maWx0ZXIodGhpcy5kYXRhcywgZmlsdGVyUmVzdWx0RXF1YWxpdHkpO1xyXG4gICAgY29uc3QgZGF0YUZpbHRlcmVkQnlEYXRlID0gXy5jaGFpbihkYXRhRmlsdGVyZWRCeUVxdWFsaXR5KS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgbGV0IGlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlclJlc3VsdERhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRhRGF0ZSA9IG5ldyBEYXRlKGRhdGFbZmlsdGVyUmVzdWx0RGF0ZVtrZXldWydrZXknXV0pXHJcbiAgICAgICAgY29uc3QgZmlsdGVyRGF0ZSA9IG5ldyBEYXRlKGZpbHRlclJlc3VsdERhdGVba2V5XVtcInZhbHVlXCJdKVxyXG4gICAgICAgIGRhdGFEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgICAgICAgZmlsdGVyRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJ2YWx1ZVwiXSkge1xyXG4gICAgICAgICAgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcIm9wZXJhdG9yXCJdID09PSAnZ3RlJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgPCBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdsdGUnICYmIGRhdGFEYXRlLmdldFRpbWUoKSA+IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcIm9wZXJhdG9yXCJdID09PSAnZXEnICYmIGRhdGFEYXRlLmdldFRpbWUoKSAhPT0gZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXNUcnVlXHJcbiAgICB9KS52YWx1ZSgpXHJcbiAgICB0aGlzLm9uRmlsdGVyLmVtaXQoeyBmaWx0ZXI6IGZpbHRlclJlc3VsdEVxdWFsaXR5LCBkYXRhczogZGF0YUZpbHRlcmVkQnlEYXRlIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDx1bCBjbGFzcz1cImZpbHRlci1jb250YWluZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyQ29uZmlnXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J3NlbGVjdCdcIj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQXBwbHlGaWx0ZXIoKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiXCI+IHt7aXRlbS5maWx0ZXJEYXRhLmxhYmVsfX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgaXRlbS5maWx0ZXJEYXRhLm9wdGlvbnNcIj4ge3tvcHRpb24ubGFiZWx9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nZGF0ZSdcIj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7e2l0ZW0uZmlsdGVyRGF0YT8ubGFiZWx9fVwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXHJcbiAgICAgICAgICAgICAgW21pbl09XCJpdGVtLmZpbHRlckRhdGEubWF4XCIgW21heF09XCJpdGVtLmZpbHRlckRhdGEubWF4XCIgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQXBwbHlGaWx0ZXIoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nc29ydCdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItaXRlbS1pbm5lclwiIChjbGljayk9XCJvblNvcnRDaGFuZ2UoaXRlbS5maWx0ZXJEYXRhKVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0uZmlsdGVyRGF0YT8ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlPT09J2FzYydcIj5hcnJvd19kb3dud2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZSE9PSdhc2MnXCI+YXJyb3dfdXB3YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bGkgKm5nSWY9XCJ3aXRoUmVmcmVzaFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjbGFzcz1cIm5neC1yZWZyZXNoXCIgKGNsaWNrKT1cIm9uUmVmcmVzaCgpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnJlZnJlc2g8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbGk+XHJcblxyXG4gIDwvdWw+XHJcbjwvZGl2PiJdfQ==