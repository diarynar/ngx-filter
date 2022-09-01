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
function FilterComponent_ng_container_2_ng_container_2_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r6.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r6.label, " ");
} }
function FilterComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "mat-select", 5);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const item_r1 = i0.ɵɵnextContext().$implicit; return item_r1.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_2_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onApplyFilter(); });
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_2_mat_option_3_Template, 2, 2, "mat-option", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r1.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r1.filterData.options);
} }
function FilterComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 4)(2, "input", 8);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15); const item_r1 = i0.ɵɵnextContext().$implicit; return item_r1.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_ng_container_3_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.onApplyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker-toggle", 9)(4, "mat-datepicker", null, 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r12 = i0.ɵɵreference(5);
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", item_r1.filterData == null ? null : item_r1.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r12)("min", item_r1.filterData.max)("max", item_r1.filterData.max)("ngModel", item_r1.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r12);
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
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_2_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r22); const item_r1 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onSortChange(item_r1.filterData); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1.filterData == null ? null : item_r1.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 2);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_3_Template, 6, 6, "ng-container", 3);
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_Template, 6, 3, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r1.filterData.type === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.filterData.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.filterData.type === "sort");
} }
export class FilterComponent {
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
                if (Object.prototype.hasOwnProperty.call(filterData, key) && (filterData[key] || filterData[key] === false)) {
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
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter" }, decls: 3, vars: 1, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "filter-item"], [4, "ngIf"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
    } }, directives: [i2.NgForOf, i2.NgIf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon], styles: [".filter-container{display:flex;align-items:center;gap:10px}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <li class=\"filter-item\">\r\n        <ng-container *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.filterData.type==='sort'\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span>{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </ng-container>\r\n      </li>\r\n    </ng-container>\r\n\r\n\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}\n"] }]
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7Ozs7O0lDR1IscUNBQWtGO0lBQUMsWUFDbkY7SUFBQSxpQkFBYTs7O0lBREQsdUNBQXNCO0lBQWlELGVBQ25GO0lBRG1GLGdEQUNuRjs7OztJQUpOLDZCQUFzRDtJQUNwRCx5Q0FBa0Msb0JBQUE7SUFDcEIsOFBBQW1DLDZMQUFrQix1QkFBZSxJQUFqQztJQUM3Qyw0R0FDYTtJQUNmLGlCQUFhLEVBQUE7SUFFakIsMEJBQWU7OztJQUxDLGVBQW1DO0lBQW5DLGtEQUFtQztJQUNTLGVBQTBCO0lBQTFCLG9EQUEwQjs7OztJQUt0Riw2QkFBb0Q7SUFDbEQseUNBQWtDLGVBQUE7SUFFMEIsMFBBQW1DLHlMQUMxRSx1QkFBZSxJQUQyRDtJQUQ3RixpQkFFb0M7SUFDcEMsMkNBQXdFLCtCQUFBO0lBRTFFLGlCQUFpQjtJQUNuQiwwQkFBZTs7OztJQU5LLGVBQXdDO0lBQXhDLHFHQUF3QztJQUFDLG9DQUF3QiwrQkFBQSwrQkFBQSxxQ0FBQTtJQUdoRCxlQUFjO0lBQWQsMEJBQWM7OztJQU8vQyxnQ0FBZ0Q7SUFBQSw4QkFBYztJQUFBLGlCQUFXOzs7SUFDekUsZ0NBQWdEO0lBQUEsNEJBQVk7SUFBQSxpQkFBVzs7OztJQUozRSw2QkFBb0Q7SUFDbEQsK0JBQXVFO0lBQXhDLGlPQUFTLHdDQUE2QixJQUFDO0lBQ3BFLDRCQUFNO0lBQUEsWUFB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Q0FBQyxLQUFLLEtBQUssSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUNqRyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNmLE9BQU07cUJBQ1A7eUJBQ0ksSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDbEcsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDZixPQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLE1BQU0sQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs4RUFqRVUsZUFBZTtrRUFBZixlQUFlO1FDWDVCLDJCQUFLLFlBQUE7UUFFRCxrRkEyQmU7UUFHakIsaUJBQUssRUFBQTs7UUE5QjRCLGVBQWU7UUFBZiwwQ0FBZTs7dUZEU3JDLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxZQUFZOzhEQUtiLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlnLCBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZpbHRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gXCJmclwiXHJcbiAgQElucHV0KCkgZGF0YXM6IGFueVtdID0gW11cclxuICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLmxhbmcpO1xyXG4gIH1cclxuICBvblNvcnRDaGFuZ2UoaXRlbSkge1xyXG4gICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUgPT09ICdhc2MnID8gXCJkZXNjXCIgOiAnYXNjJ1xyXG4gICAgdGhpcy5kYXRhcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYVtpdGVtLmtleV0gPiBiW2l0ZW0ua2V5XSA/IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IDEgOiAtMSkgOiAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAtMSA6IDEpKVxyXG4gICAgdGhpcy5vbkFwcGx5RmlsdGVyKClcclxuICB9XHJcblxyXG5cclxuICBvbkFwcGx5RmlsdGVyKCkge1xyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0RXF1YWxpdHkgPSB7fVxyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0RGF0ZSA9IHt9XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRTb3J0ID0ge31cclxuXHJcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyRGF0YSB9IG9mIHRoaXMuZmlsdGVyQ29uZmlnKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlckRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpbHRlckRhdGEsIGtleSkgJiYgKGZpbHRlckRhdGFba2V5XSB8fCBmaWx0ZXJEYXRhW2tleV0gPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgaWYgKGZpbHRlckRhdGFbXCJ0eXBlXCJdID09PSAnZGF0ZScpIHtcclxuICAgICAgICAgICAgZmlsdGVyUmVzdWx0RGF0ZVtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IHtcclxuICAgICAgICAgICAgICBvcGVyYXRvcjogZmlsdGVyRGF0YVtcIm9wZXJhdG9yXCJdLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJEYXRhW1widHlwZVwiXSA9PT0gJ3NvcnQnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdFNvcnRbZmlsdGVyRGF0YVtcImtleVwiXV0gPSBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoISFmaWx0ZXJEYXRhW1widmFsdWVcIl0pIHtcclxuICAgICAgICAgICAgZmlsdGVyUmVzdWx0RXF1YWxpdHlbZmlsdGVyRGF0YVtcImtleVwiXV0gPSBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGFGaWx0ZXJlZEJ5RXF1YWxpdHkgPSBfLmZpbHRlcih0aGlzLmRhdGFzLCBmaWx0ZXJSZXN1bHRFcXVhbGl0eSk7XHJcbiAgICBjb25zdCBkYXRhRmlsdGVyZWRCeURhdGUgPSBfLmNoYWluKGRhdGFGaWx0ZXJlZEJ5RXF1YWxpdHkpLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyUmVzdWx0RGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFEYXRlID0gbmV3IERhdGUoZGF0YVtrZXldKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlckRhdGUgPSBuZXcgRGF0ZShmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJ2YWx1ZVwiXSlcclxuICAgICAgICBkYXRhRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICAgIGZpbHRlckRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1widmFsdWVcIl0pIHtcclxuICAgICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2d0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpIDwgZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcIm9wZXJhdG9yXCJdID09PSAnbHRlJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgPiBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2VxJyAmJiBkYXRhRGF0ZS5nZXRUaW1lKCkgIT09IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzVHJ1ZVxyXG4gICAgfSkudmFsdWUoKVxyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgZmlsdGVyOiBmaWx0ZXJSZXN1bHRFcXVhbGl0eSwgZGF0YXM6IGRhdGFGaWx0ZXJlZEJ5RGF0ZSB9KVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdj5cclxuICA8dWwgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlckNvbmZpZ1wiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpdGVtLmZpbHRlckRhdGEub3B0aW9uc1wiPiB7e29wdGlvbi5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdkYXRlJ1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19XCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcclxuICAgICAgICAgICAgICBbbWluXT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbbWF4XT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbKG5nTW9kZWwpXT1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzb3J0J1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtLWlubmVyXCIgKGNsaWNrKT1cIm9uU29ydENoYW5nZShpdGVtLmZpbHRlckRhdGEpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWU9PT0nYXNjJ1wiPmFycm93X2Rvd253YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlIT09J2FzYydcIj5hcnJvd191cHdhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gIDwvdWw+XHJcbjwvZGl2PiJdfQ==