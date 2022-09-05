import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
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
export class AppComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0EvRSwyQ0FDZ0Y7SUFBOUUsNExBQVksMkJBQW9CLElBQUM7SUFDbkMsaUJBQW1COzs7SUFGbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBR25GLGdEQUNrQjtJQURzRCxzTUFBWSwyQkFBb0IsSUFBQztJQUV6RyxpQkFBd0I7OztJQUZrQyxrQ0FBYSx1QkFBQTs7QURPdkUsTUFBTSxPQUFPLFlBQVk7SUFMekI7UUFNVyxpQkFBWSxHQUEyQixFQUFFLENBQUE7UUFDekMsU0FBSSxHQUFXLElBQUksQ0FBQTtRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNsQixlQUFVLEdBQW1DLGNBQWMsQ0FBQTtRQUMzRCxVQUFLLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO0tBUTdDO0lBTkMsUUFBUTtJQUNSLENBQUM7SUFDRCxZQUFZLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7O3dFQVpVLFlBQVk7K0RBQVosWUFBWTtRQ1Z6Qix1RkFFbUI7UUFDbkIsaUdBRXdCOztRQUxMLHdEQUFpQztRQUc1QixlQUFnQztRQUFoQyx1REFBZ0M7O3VGRE8zQyxZQUFZO2NBTHhCLFNBQVM7MkJBQ0UsWUFBWTtnQkFLYixZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gXCJmclwiXHJcbiAgQElucHV0KCkgd2l0aFJlZnJlc2ggPSB0cnVlXHJcbiAgQElucHV0KCkgc2VhcmNoVHlwZTogJ3NlYXJjaC1ncm91cCcgfCAnc2VhcmNoLXRleHQnID0gJ3NlYXJjaC1ncm91cCdcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBvbkZpbHRlckRhdGEoZSkge1xyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bmd4LWZpbHRlci1ncm91cCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLWdyb3VwJ1wiIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbjwvbmd4LWZpbHRlci1ncm91cD5cclxuPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLXRleHQnXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgW2RhdGFzXT1cImRhdGFzXCI+XHJcbjwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPiJdfQ==