import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';
import { onApply } from '../../utils/utils';
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
function FilterComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", item_r3.id, " ", item_r3.value, " xxxxxxxxxxxxxxxxxx ");
} }
function FilterComponent_ng_container_3_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r8.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r8.label, " ");
} }
function FilterComponent_ng_container_3_div_15_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_3_div_15_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_3_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_3_div_15_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r13); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onSortChange(item_r4.filterData); });
    i0.ɵɵelementStart(2, "span", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_3_div_15_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_3_div_15_mat_icon_5_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r4.filterData == null ? null : item_r4.filterData.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.filterData == null ? null : item_r4.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r4.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r4.filterData.value !== "asc");
} }
function FilterComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 4);
    i0.ɵɵtext(2, " xxxxxxxxxxxxxxccccccccccccccc ");
    i0.ɵɵelementStart(3, "div")(4, "mat-form-field", 5)(5, "mat-select", 6);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_3_Template_mat_select_ngModelChange_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const item_r4 = restoredCtx.$implicit; return item_r4.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_3_Template_mat_select_ngModelChange_5_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onApplyFilter(); });
    i0.ɵɵelementStart(6, "mat-option", 7);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, FilterComponent_ng_container_3_mat_option_8_Template, 2, 2, "mat-option", 8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div")(10, "mat-form-field", 5)(11, "input", 9);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_3_Template_input_ngModelChange_11_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const item_r4 = restoredCtx.$implicit; return item_r4.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_3_Template_input_ngModelChange_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onApplyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "mat-datepicker-toggle", 10)(13, "mat-datepicker", null, 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, FilterComponent_ng_container_3_div_15_Template, 6, 4, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(14);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", item_r4.filterData.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r4.filterData.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r4.filterData.options);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", item_r4.filterData == null ? null : item_r4.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r6)("min", item_r4.filterData.max)("max", item_r4.filterData.max)("ngModel", item_r4.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r4.filterData.type === "sort");
} }
function FilterComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 17);
    i0.ɵɵlistener("click", function FilterComponent_li_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.refresh(); });
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
        this.onRefresh = new EventEmitter();
        this.filterConfigBackup = [];
        this.demo = [
            {
                id: 1,
                value: "V1"
            }, {
                id: 2,
                value: "V2"
            }, {
                id: 3,
                value: "V3"
            }, {
                id: 4,
                value: "V4"
            },
        ];
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
    ngOnChanges() {
        console.log('-----------filter****************Config----------', this.filterConfig);
    }
    refresh() {
        this.onRefresh.emit({ filterConfig: this.filterConfigBackup, datas: this.datas, type: 'group' });
    }
    onApplyFilter() {
        const filterResult = onApply(this.datas, this.filterConfig);
        this.onFilter.emit(filterResult);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 3, consts: [[1, "filter-container"], ["class", "filter-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "ngClass", 4, "ngIf"], [3, "value"], [3, "ngClass"], [1, "filter-item-inner", 3, "click"], [1, "ngx-filter-title"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_li_2_Template, 2, 2, "li", 1);
        i0.ɵɵtemplate(3, FilterComponent_ng_container_3_Template, 16, 10, "ng-container", 2);
        i0.ɵɵtemplate(4, FilterComponent_li_4_Template, 4, 0, "li", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.demo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withRefresh);
    } }, directives: [i2.NgForOf, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i2.NgIf, i2.NgClass, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}  .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <li class=\"filter-item\" *ngFor=\"let item of demo\">\r\n      {{item.id}} {{item.value}} xxxxxxxxxxxxxxxxxx\r\n    </li>\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <!-- <div *ngIf=\"item.filterData.type==='divider'\" [ngClass]=\"'ngx-filter-divider '+ item.filterData?.class\"\r\n        class=\"ngx-filter-divider\"></div> -->\r\n      <li class=\"filter-item\">\r\n        xxxxxxxxxxxxxxccccccccccccccc\r\n        <!-- <div *ngIf=\"item.filterData.type==='select'\"> -->\r\n        <div>\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- <div *ngIf=\"item.filterData.type==='date'\"> -->\r\n        <div>\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData?.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul{list-style:none}\n"] }]
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
        }], onRefresh: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNIeEMsNkJBQWtEO0lBQ2hELFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLGtGQUNGOzs7SUFZVSxzQ0FBa0Y7SUFBQyxZQUNuRjtJQUFBLGlCQUFhOzs7SUFERCx1Q0FBc0I7SUFBaUQsZUFDbkY7SUFEbUYsZ0RBQ25GOzs7SUFrQkYsZ0NBQWdEO0lBQUEsOEJBQWM7SUFBQSxpQkFBVzs7O0lBQ3pFLGdDQUFnRDtJQUFBLDRCQUFZO0lBQUEsaUJBQVc7Ozs7SUFKM0UsK0JBQThFLGNBQUE7SUFDN0MseU5BQVMsd0NBQTZCLElBQUM7SUFDcEUsZ0NBQStCO0lBQUEsWUFBMEI7SUFBQSxpQkFBTztJQUNoRSxnR0FBeUU7SUFDekUsZ0dBQXVFO0lBQ3pFLGlCQUFNLEVBQUE7OztJQUxtQyxzRkFBa0M7SUFFMUMsZUFBMEI7SUFBMUIsa0ZBQTBCO0lBQzlDLGVBQW1DO0lBQW5DLHlEQUFtQztJQUNuQyxlQUFtQztJQUFuQyx5REFBbUM7Ozs7SUEvQnRELDZCQUFnRDtJQUc5Qyw2QkFBd0I7SUFDdEIsK0NBQ0E7SUFDQSwyQkFBSyx3QkFBQSxvQkFBQTtJQUVXLDZQQUFtQyw4S0FBa0IsdUJBQWUsSUFBakM7SUFDN0MscUNBQXFCO0lBQUMsWUFDdEI7SUFBQSxpQkFBYTtJQUNiLDZGQUNhO0lBQ2YsaUJBQWEsRUFBQSxFQUFBO0lBS2pCLDJCQUFLLHlCQUFBLGdCQUFBO0lBR3lELHlQQUFtQywwS0FDMUUsdUJBQWUsSUFEMkQ7SUFEN0YsaUJBRW9DO0lBQ3BDLDZDQUF3RSxnQ0FBQTtJQUUxRSxpQkFBaUIsRUFBQTtJQUVuQixrRkFNTTtJQUNSLGlCQUFLO0lBQ1AsMEJBQWU7Ozs7SUEzQkssZUFBbUM7SUFBbkMsa0RBQW1DO0lBQ3ZCLGVBQ3RCO0lBRHNCLHlEQUN0QjtJQUNzRCxlQUEwQjtJQUExQixvREFBMEI7SUFTbEUsZUFBd0M7SUFBeEMscUdBQXdDO0lBQUMsbUNBQXdCLCtCQUFBLCtCQUFBLHFDQUFBO0lBR2hELGVBQWM7SUFBZCx5QkFBYztJQUk3QyxlQUFtQztJQUFuQyx5REFBbUM7Ozs7SUFTN0MsMEJBQXdCLGlCQUFBO0lBQ21CLDZKQUFTLGlCQUFTLElBQUM7SUFDMUQsZ0NBQVU7SUFBQSx1QkFBTztJQUFBLGlCQUFXLEVBQUEsRUFBQTs7QUQvQnBDLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVB4QyxpQkFBWSxHQUEyQixFQUFFLENBQUE7UUFDekMsU0FBSSxHQUFXLElBQUksQ0FBQTtRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBRzdDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQTtRQUN2QixTQUFJLEdBQUc7WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsSUFBSTthQUNaLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLElBQUk7YUFDWixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxJQUFJO2FBQ1osRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsQ0FBQTtJQWhCRCxDQUFDO0lBaUJELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2xHLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2xDLENBQUM7OzhFQS9DVSxlQUFlO2tFQUFmLGVBQWU7UUNaNUIsMkJBQUssWUFBQTtRQUVELDhEQUVLO1FBQ0wsb0ZBbUNlO1FBQ2YsOERBSUs7UUFDUCxpQkFBSyxFQUFBOztRQTVDc0MsZUFBTztRQUFQLGtDQUFPO1FBR2pCLGVBQWU7UUFBZiwwQ0FBZTtRQW9DekMsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkQ3QmIsZUFBZTtjQUwzQixTQUFTOzJCQUNFLGtCQUFrQjs4REFLbkIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgb25BcHBseSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlci1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmaWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmaWx0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxyXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9IFwiZnJcIlxyXG4gIEBJbnB1dCgpIHdpdGhSZWZyZXNoID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnlbXSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uU29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+KSB7XHJcbiAgfVxyXG4gIGZpbHRlckNvbmZpZ0JhY2t1cCA9IFtdXHJcbiAgZGVtbyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHZhbHVlOiBcIlYxXCJcclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHZhbHVlOiBcIlYyXCJcclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHZhbHVlOiBcIlYzXCJcclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHZhbHVlOiBcIlY0XCJcclxuICAgIH0sXHJcbiAgXVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5sYW5nKTtcclxuICAgIHRoaXMuZmlsdGVyQ29uZmlnQmFja3VwID0gXy5jbG9uZURlZXAodGhpcy5maWx0ZXJDb25maWcpXHJcbiAgfVxyXG5cclxuICBvblNvcnRDaGFuZ2UoaXRlbSkge1xyXG4gICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUgPT09ICdhc2MnID8gXCJkZXNjXCIgOiAnYXNjJ1xyXG4gICAgdGhpcy5kYXRhcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYVtpdGVtLmtleV0gPiBiW2l0ZW0ua2V5XSA/IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IDEgOiAtMSkgOiAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAtMSA6IDEpKVxyXG4gICAgdGhpcy5vbkFwcGx5RmlsdGVyKClcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS1maWx0ZXIqKioqKioqKioqKioqKioqQ29uZmlnLS0tLS0tLS0tLScsIHRoaXMuZmlsdGVyQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHsgZmlsdGVyQ29uZmlnOiB0aGlzLmZpbHRlckNvbmZpZ0JhY2t1cCwgZGF0YXM6IHRoaXMuZGF0YXMsIHR5cGU6ICdncm91cCcgfSlcclxuICB9XHJcblxyXG4gIG9uQXBwbHlGaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHQgPSBvbkFwcGx5KHRoaXMuZGF0YXMsIHRoaXMuZmlsdGVyQ29uZmlnKTtcclxuICAgIHRoaXMub25GaWx0ZXIuZW1pdChmaWx0ZXJSZXN1bHQpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDx1bCBjbGFzcz1cImZpbHRlci1jb250YWluZXJcIj5cclxuICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGVtb1wiPlxyXG4gICAgICB7e2l0ZW0uaWR9fSB7e2l0ZW0udmFsdWV9fSB4eHh4eHh4eHh4eHh4eHh4eHhcclxuICAgIDwvbGk+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlckNvbmZpZ1wiPlxyXG4gICAgICA8IS0tIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdkaXZpZGVyJ1wiIFtuZ0NsYXNzXT1cIiduZ3gtZmlsdGVyLWRpdmlkZXIgJysgaXRlbS5maWx0ZXJEYXRhPy5jbGFzc1wiXHJcbiAgICAgICAgY2xhc3M9XCJuZ3gtZmlsdGVyLWRpdmlkZXJcIj48L2Rpdj4gLS0+XHJcbiAgICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgeHh4eHh4eHh4eHh4eHhjY2NjY2NjY2NjY2NjY2NcclxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzZWxlY3QnXCI+IC0tPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlwiPiB7e2l0ZW0uZmlsdGVyRGF0YS5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGl0ZW0uZmlsdGVyRGF0YS5vcHRpb25zXCI+IHt7b3B0aW9uLmxhYmVsfX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J2RhdGUnXCI+IC0tPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3tpdGVtLmZpbHRlckRhdGE/LmxhYmVsfX1cIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgIFttaW5dPVwiaXRlbS5maWx0ZXJEYXRhLm1heFwiIFttYXhdPVwiaXRlbS5maWx0ZXJEYXRhLm1heFwiIFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J3NvcnQnXCIgW25nQ2xhc3NdPVwiaXRlbS5maWx0ZXJEYXRhPy5jbGFzc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtLWlubmVyXCIgKGNsaWNrKT1cIm9uU29ydENoYW5nZShpdGVtLmZpbHRlckRhdGEpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmd4LWZpbHRlci10aXRsZVwiPnt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWU9PT0nYXNjJ1wiPmFycm93X2Rvd253YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlIT09J2FzYydcIj5hcnJvd191cHdhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxsaSAqbmdJZj1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNsYXNzPVwibmd4LXJlZnJlc2hcIiAoY2xpY2spPVwicmVmcmVzaCgpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnJlZnJlc2g8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9kaXY+Il19