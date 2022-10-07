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
function FilterComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", "ngx-filter-divider " + (item_r2.filterData == null ? null : item_r2.filterData.class));
} }
function FilterComponent_ng_container_2_li_2_div_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r10.label, " ");
} }
function FilterComponent_ng_container_2_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "mat-select", 10);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_li_2_div_1_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const item_r2 = i0.ɵɵnextContext(2).$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_li_2_div_1_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onApplyFilter(); });
    i0.ɵɵelementStart(3, "mat-option", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_li_2_div_1_mat_option_5_Template, 2, 2, "mat-option", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.filterData.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r2.filterData.options);
} }
function FilterComponent_ng_container_2_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "input", 14);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_li_2_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r19); const item_r2 = i0.ɵɵnextContext(2).$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_li_2_div_2_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onApplyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker-toggle", 15)(4, "mat-datepicker", null, 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(5);
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r16)("min", item_r2.filterData.max)("max", item_r2.filterData.max)("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r16);
} }
function FilterComponent_ng_container_2_li_2_div_3_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_li_2_div_3_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 17);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_2_li_2_div_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r26); const item_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onSortChange(item_r2.filterData); });
    i0.ɵɵelementStart(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_li_2_div_3_mat_icon_4_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_li_2_div_3_mat_icon_5_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, FilterComponent_ng_container_2_li_2_div_1_Template, 6, 4, "div", 7);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_li_2_div_2_Template, 6, 7, "div", 7);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_li_2_div_3_Template, 6, 4, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "sort");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FilterComponent_ng_container_2_div_1_Template, 1, 1, "div", 3);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_li_2_Template, 4, 3, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "divider");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type !== "divider");
} }
function FilterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 19);
    i0.ɵɵlistener("click", function FilterComponent_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.refresh(); });
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
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ngx-filter-divider", 3, "ngClass", 4, "ngIf"], ["class", "filter-item", 4, "ngIf"], [1, "ngx-filter-divider", 3, "ngClass"], [1, "filter-item"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"], [1, "ngx-filter-title"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, FilterComponent_li_3_Template, 4, 0, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withRefresh);
    } }, directives: [i2.NgForOf, i2.NgIf, i2.NgClass, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}  .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <div *ngIf=\"item.filterData.type==='divider'\" [ngClass]=\"'ngx-filter-divider '+ item.filterData?.class\"\r\n        class=\"ngx-filter-divider\"></div>\r\n      <li *ngIf=\"item.filterData.type!=='divider'\" class=\"filter-item\">\r\n        <div *ngIf=\"item.filterData.type==='select'\" [ngClass]=\"item.filterData?.class\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='date'\" [ngClass]=\"item.filterData?.class\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData?.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul{list-style:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNGdEMseUJBQ21DOzs7SUFEVyxnSEFBeUQ7OztJQVEvRixzQ0FBa0Y7SUFBQyxZQUNuRjtJQUFBLGlCQUFhOzs7SUFERCx3Q0FBc0I7SUFBaUQsZUFDbkY7SUFEbUYsaURBQ25GOzs7O0lBTk4sOEJBQWdGLHdCQUFBLHFCQUFBO0lBRWhFLDRQQUFtQywwTEFBa0IsdUJBQWUsSUFBakM7SUFDN0Msc0NBQXFCO0lBQUMsWUFDdEI7SUFBQSxpQkFBYTtJQUNiLHlHQUNhO0lBQ2YsaUJBQWEsRUFBQSxFQUFBOzs7SUFQNEIsc0ZBQWtDO0lBRS9ELGVBQW1DO0lBQW5DLGtEQUFtQztJQUN2QixlQUN0QjtJQURzQix5REFDdEI7SUFDc0QsZUFBMEI7SUFBMUIsb0RBQTBCOzs7O0lBS3RGLDhCQUE4RSx3QkFBQSxnQkFBQTtJQUdoQix1UEFBbUMscUxBQzFFLHVCQUFlLElBRDJEO0lBRDdGLGlCQUVvQztJQUNwQyw0Q0FBd0UsK0JBQUE7SUFFMUUsaUJBQWlCLEVBQUE7Ozs7SUFQd0Isc0ZBQWtDO0lBRXpELGVBQXdDO0lBQXhDLHFHQUF3QztJQUFD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SUFDbEcsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7OEVBakNVLGVBQWU7a0VBQWYsZUFBZTtRQ1o1QiwyQkFBSyxZQUFBO1FBRUQsa0ZBK0JlO1FBQ2YsOERBSUs7UUFDUCxpQkFBSyxFQUFBOztRQXJDNEIsZUFBZTtRQUFmLDBDQUFlO1FBZ0N6QyxlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRHRCYixlQUFlO2NBTDNCLFNBQVM7MkJBQ0Usa0JBQWtCOzhEQUtuQixZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBvbkFwcGx5IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZmlsdGVyLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZpbHRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gXCJmclwiXHJcbiAgQElucHV0KCkgd2l0aFJlZnJlc2ggPSB0cnVlXHJcbiAgQElucHV0KCkgZGF0YXM6IGFueVtdID0gW11cclxuICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHtcclxuICB9XHJcbiAgZmlsdGVyQ29uZmlnQmFja3VwID0gW11cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLmxhbmcpO1xyXG4gICAgdGhpcy5maWx0ZXJDb25maWdCYWNrdXAgPSBfLmNsb25lRGVlcCh0aGlzLmZpbHRlckNvbmZpZylcclxuICB9XHJcblxyXG4gIG9uU29ydENoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyBcImRlc2NcIiA6ICdhc2MnXHJcbiAgICB0aGlzLmRhdGFzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW2l0ZW0ua2V5XSA+IGJbaXRlbS5rZXldID8gKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gMSA6IC0xKSA6IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IC0xIDogMSkpXHJcbiAgICB0aGlzLm9uQXBwbHlGaWx0ZXIoKVxyXG4gIH1cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuXHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgdGhpcy5vblJlZnJlc2guZW1pdCh7IGZpbHRlckNvbmZpZzogdGhpcy5maWx0ZXJDb25maWdCYWNrdXAsIGRhdGFzOiB0aGlzLmRhdGFzLCB0eXBlOiAnZ3JvdXAnIH0pXHJcbiAgfVxyXG5cclxuICBvbkFwcGx5RmlsdGVyKCkge1xyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0ID0gb25BcHBseSh0aGlzLmRhdGFzLCB0aGlzLmZpbHRlckNvbmZpZyk7XHJcbiAgICB0aGlzLm9uRmlsdGVyLmVtaXQoZmlsdGVyUmVzdWx0KVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdj5cclxuICA8dWwgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlckNvbmZpZ1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nZGl2aWRlcidcIiBbbmdDbGFzc109XCInbmd4LWZpbHRlci1kaXZpZGVyICcrIGl0ZW0uZmlsdGVyRGF0YT8uY2xhc3NcIlxyXG4gICAgICAgIGNsYXNzPVwibmd4LWZpbHRlci1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIDxsaSAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlIT09J2RpdmlkZXInXCIgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzZWxlY3QnXCIgW25nQ2xhc3NdPVwiaXRlbS5maWx0ZXJEYXRhPy5jbGFzc1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJcIj4ge3tpdGVtLmZpbHRlckRhdGEubGFiZWx9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpdGVtLmZpbHRlckRhdGEub3B0aW9uc1wiPiB7e29wdGlvbi5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdkYXRlJ1wiIFtuZ0NsYXNzXT1cIml0ZW0uZmlsdGVyRGF0YT8uY2xhc3NcIj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7e2l0ZW0uZmlsdGVyRGF0YT8ubGFiZWx9fVwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXHJcbiAgICAgICAgICAgICAgW21pbl09XCJpdGVtLmZpbHRlckRhdGEubWF4XCIgW21heF09XCJpdGVtLmZpbHRlckRhdGEubWF4XCIgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQXBwbHlGaWx0ZXIoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nc29ydCdcIiBbbmdDbGFzc109XCJpdGVtLmZpbHRlckRhdGE/LmNsYXNzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW0taW5uZXJcIiAoY2xpY2spPVwib25Tb3J0Q2hhbmdlKGl0ZW0uZmlsdGVyRGF0YSlcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZ3gtZmlsdGVyLXRpdGxlXCI+e3tpdGVtLmZpbHRlckRhdGE/LmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZT09PSdhc2MnXCI+YXJyb3dfZG93bndhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWUhPT0nYXNjJ1wiPmFycm93X3Vwd2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGxpICpuZ0lmPVwid2l0aFJlZnJlc2hcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY2xhc3M9XCJuZ3gtcmVmcmVzaFwiIChjbGljayk9XCJyZWZyZXNoKClcIj5cclxuICAgICAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2Rpdj4iXX0=