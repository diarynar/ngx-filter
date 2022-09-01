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
    i0.ɵɵtext(3, "Nom");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_ng_container_4_mat_icon_5_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r1.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 2);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_ng_container_3_Template, 6, 5, "ng-container", 3);
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_ng_container_4_Template, 6, 2, "ng-container", 3);
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
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter" }, decls: 3, vars: 1, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "filter-item"], [4, "ngIf"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
    } }, directives: [i2.NgForOf, i2.NgIf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon], styles: [".filter-container{display:flex;align-items:center;gap:10px}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7Ozs7O0lDR1IscUNBQWtGO0lBQUMsWUFDbkY7SUFBQSxpQkFBYTs7O0lBREQsdUNBQXNCO0lBQWlELGVBQ25GO0lBRG1GLGdEQUNuRjs7OztJQUpOLDZCQUFzRDtJQUNwRCx5Q0FBa0Msb0JBQUE7SUFDcEIsOFBBQW1DLDZMQUFrQix1QkFBZSxJQUFqQztJQUM3Qyw0R0FDYTtJQUNmLGlCQUFhLEVBQUE7SUFFakIsMEJBQWU7OztJQUxDLGVBQW1DO0lBQW5DLGtEQUFtQztJQUNTLGVBQTBCO0lBQTFCLG9EQUEwQjs7OztJQUt0Riw2QkFBb0Q7SUFDbEQseUNBQWtDLGVBQUE7SUFFRiwwUEFBbUMseUxBQWtCLHVCQUFlLElBQWpDO0lBRGpFLGlCQUNvRztJQUNwRywyQ0FBd0UsK0JBQUE7SUFFMUUsaUJBQWlCO0lBQ25CLDBCQUFlOzs7O0lBTGdDLGVBQXdCO0lBQXhCLG9DQUF3QiwrQkFBQSwrQkFBQSxxQ0FBQTtJQUVsQyxlQUFjO0lBQWQsMEJBQWM7OztJQU8vQyxnQ0FBZ0Q7SUFBQSw4QkFBYztJQUFBLGlCQUFXOzs7SUFDekUsZ0NBQWdEO0lBQUEsNEJBQVk7SUFBQSxpQkFBVzs7OztJQUozRSw2QkFBb0Q7SUFDbEQsK0JBQXVFO0lBQXhDLGlPQUFTLHdDQUE2QixJQUFDO0lBQ3BFLDRCQUFNO0lBQUEsbUJBQUc7SUFBQSxpQkFB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R0FBRyxLQUFLLENBQUM7d0JBQ2YsT0FBTTtxQkFDUDt5QkFDSSxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUNsRyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNmLE9BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sTUFBTSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7OzhFQWpFVSxlQUFlO2tFQUFmLGVBQWU7UUNYNUIsMkJBQUssWUFBQTtRQUVELGtGQTBCZTtRQUdqQixpQkFBSyxFQUFBOztRQTdCNEIsZUFBZTtRQUFmLDBDQUFlOzt1RkRTckMsZUFBZTtjQUwzQixTQUFTOzJCQUNFLFlBQVk7OERBS2IsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWcsIElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKHRoaXMubGFuZyk7XHJcbiAgfVxyXG4gIG9uU29ydENoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyBcImRlc2NcIiA6ICdhc2MnXHJcbiAgICB0aGlzLmRhdGFzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW2l0ZW0ua2V5XSA+IGJbaXRlbS5rZXldID8gKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gMSA6IC0xKSA6IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IC0xIDogMSkpXHJcbiAgICB0aGlzLm9uQXBwbHlGaWx0ZXIoKVxyXG4gIH1cclxuXHJcblxyXG4gIG9uQXBwbHlGaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRFcXVhbGl0eSA9IHt9XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHREYXRlID0ge31cclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdFNvcnQgPSB7fVxyXG5cclxuICAgIGZvciAoY29uc3QgeyBmaWx0ZXJEYXRhIH0gb2YgdGhpcy5maWx0ZXJDb25maWcpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyRGF0YSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmlsdGVyRGF0YSwga2V5KSAmJiBmaWx0ZXJEYXRhW2tleV0pIHtcclxuICAgICAgICAgIGlmIChmaWx0ZXJEYXRhW1widHlwZVwiXSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdERhdGVbZmlsdGVyRGF0YVtcImtleVwiXV0gPSB7XHJcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IGZpbHRlckRhdGFbXCJvcGVyYXRvclwiXSxcclxuICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyRGF0YVtcInZhbHVlXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyRGF0YVtcInR5cGVcIl0gPT09ICdzb3J0Jykge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHRTb3J0W2ZpbHRlckRhdGFbXCJrZXlcIl1dID0gZmlsdGVyRGF0YVtcInZhbHVlXCJdXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCEhZmlsdGVyRGF0YVtcInZhbHVlXCJdKSB7XHJcbiAgICAgICAgICAgIGZpbHRlclJlc3VsdEVxdWFsaXR5W2ZpbHRlckRhdGFbXCJrZXlcIl1dID0gZmlsdGVyRGF0YVtcInZhbHVlXCJdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhRmlsdGVyZWRCeUVxdWFsaXR5ID0gXy5maWx0ZXIodGhpcy5kYXRhcywgZmlsdGVyUmVzdWx0RXF1YWxpdHkpO1xyXG4gICAgY29uc3QgZGF0YUZpbHRlcmVkQnlEYXRlID0gXy5jaGFpbihkYXRhRmlsdGVyZWRCeUVxdWFsaXR5KS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgbGV0IGlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlclJlc3VsdERhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRhRGF0ZSA9IG5ldyBEYXRlKGRhdGFba2V5XSlcclxuICAgICAgICBjb25zdCBmaWx0ZXJEYXRlID0gbmV3IERhdGUoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1widmFsdWVcIl0pXHJcbiAgICAgICAgZGF0YURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICBmaWx0ZXJEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgICAgICAgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcInZhbHVlXCJdKSB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdndGUnICYmIGRhdGFEYXRlLmdldFRpbWUoKSA8IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2x0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpID4gZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdlcScgJiYgZGF0YURhdGUuZ2V0VGltZSgpICE9PSBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc1RydWVcclxuICAgIH0pLnZhbHVlKClcclxuICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7IGZpbHRlcjogZmlsdGVyUmVzdWx0RXF1YWxpdHksIGRhdGFzOiBkYXRhRmlsdGVyZWRCeURhdGUgfSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPHVsIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJDb25maWdcIj5cclxuICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nc2VsZWN0J1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgaXRlbS5maWx0ZXJEYXRhLm9wdGlvbnNcIj4ge3tvcHRpb24ubGFiZWx9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nZGF0ZSdcIj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJEYXRlIG1pbmltdW1cIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbbWluXT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIlxyXG4gICAgICAgICAgICAgIFttYXhdPVwiaXRlbS5maWx0ZXJEYXRhLm1heFwiIFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzb3J0J1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtLWlubmVyXCIgKGNsaWNrKT1cIm9uU29ydENoYW5nZShpdGVtLmZpbHRlckRhdGEpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk5vbTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlPT09J2FzYydcIj5hcnJvd19kb3dud2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZSE9PSdhc2MnXCI+YXJyb3dfdXB3YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICA8L3VsPlxyXG48L2Rpdj4iXX0=