import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
function AppComponent_ngx_filter_group_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-filter-group", 2);
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onFilterData($event); })("onRefresh", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
} }
function AppComponent_ngx_expandable_search_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 3);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_1_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onFilterData($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("lang", ctx_r1.lang)("datas", ctx_r1.datas);
} }
export class AppComponent {
    constructor() {
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.searchType = 'search-group';
        this.datas = [];
        this.onFilter = new EventEmitter();
        this.onRefresh = new EventEmitter();
    }
    ngOnInit() {
    }
    onFilterData(e) {
        console.log('---------ON-FILTER-------------', e);
        this.onFilter.emit(e);
    }
    refresh(e) {
        console.log('---------ON-REFRESH-------------', this.datas, e);
        this.onRefresh.emit({ datas: this.datas });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, decls: 2, vars: 2, consts: [[3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", 4, "ngIf"], [3, "lang", "datas", "onSearch", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh"], [3, "lang", "datas", "onSearch"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AppComponent_ngx_filter_group_0_Template, 1, 4, "ngx-filter-group", 0);
        i0.ɵɵtemplate(1, AppComponent_ngx_expandable_search_1_Template, 1, 2, "ngx-expandable-search", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-group");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-text");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter', template: "<ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n  (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n</ngx-filter-group>\r\n<ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n  [datas]=\"datas\">\r\n</ngx-expandable-search>", styles: [""] }]
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
        }], onRefresh: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0EvRSwyQ0FDOEc7SUFBNUcsNExBQVksMkJBQW9CLElBQUMsaUxBQWMsc0JBQWUsSUFBN0I7SUFDbkMsaUJBQW1COzs7SUFGbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBR25GLGdEQUNrQjtJQURzRCxzTUFBWSwyQkFBb0IsSUFBQztJQUV6RyxpQkFBd0I7OztJQUZrQyxrQ0FBYSx1QkFBQTs7QURPdkUsTUFBTSxPQUFPLFlBQVk7SUFMekI7UUFNVyxpQkFBWSxHQUEyQixFQUFFLENBQUE7UUFDekMsU0FBSSxHQUFXLElBQUksQ0FBQTtRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNsQixlQUFVLEdBQW1DLGNBQWMsQ0FBQTtRQUMzRCxVQUFLLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO0tBYTlDO0lBWEMsUUFBUTtJQUNSLENBQUM7SUFDRCxZQUFZLENBQUMsQ0FBQztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzVDLENBQUM7O3dFQWxCVSxZQUFZOytEQUFaLFlBQVk7UUNWekIsdUZBRW1CO1FBQ25CLGlHQUV3Qjs7UUFMTCx3REFBaUM7UUFHNUIsZUFBZ0M7UUFBaEMsdURBQWdDOzt1RkRPM0MsWUFBWTtjQUx4QixTQUFTOzJCQUNFLFlBQVk7Z0JBS2IsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksUUFBUTtrQkFBakIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSBzZWFyY2hUeXBlOiAnc2VhcmNoLWdyb3VwJyB8ICdzZWFyY2gtdGV4dCcgPSAnc2VhcmNoLWdyb3VwJ1xyXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnlbXSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIG9uRmlsdGVyRGF0YShlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tT04tRklMVEVSLS0tLS0tLS0tLS0tLScsIGUpO1xyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpXHJcbiAgfVxyXG4gIHJlZnJlc2goZSkge1xyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLU9OLVJFRlJFU0gtLS0tLS0tLS0tLS0tJywgdGhpcy5kYXRhcywgZSk7XHJcbiAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHsgZGF0YXM6IHRoaXMuZGF0YXMgfSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZ3gtZmlsdGVyLWdyb3VwICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZ3JvdXAnXCIgW2ZpbHRlckNvbmZpZ109XCJmaWx0ZXJDb25maWdcIiBbbGFuZ109XCJsYW5nXCJcclxuICAob25GaWx0ZXIpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiIFt3aXRoUmVmcmVzaF09XCJ3aXRoUmVmcmVzaFwiPlxyXG48L25neC1maWx0ZXItZ3JvdXA+XHJcbjxuZ3gtZXhwYW5kYWJsZS1zZWFyY2ggKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC10ZXh0J1wiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gIFtkYXRhc109XCJkYXRhc1wiPlxyXG48L25neC1leHBhbmRhYmxlLXNlYXJjaD4iXX0=