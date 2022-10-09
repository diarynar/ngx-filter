import { Component, EventEmitter, Input, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';
import * as i0 from "@angular/core";
function AppComponent_ng_container_1_ngx_expandable_search_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onFilterData($event)); })("onRefresh", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.refresh($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("lang", ctx_r3.lang)("placeholder", ctx_r3.placeholder)("datas", ctx_r3.datas);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ngx-filter-group", 4);
    i0.ɵɵlistener("onFilter", function AppComponent_ng_container_1_Template_ngx_filter_group_onFilter_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onFilterData($event)); })("onRefresh", function AppComponent_ng_container_1_Template_ngx_filter_group_onRefresh_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.refresh($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵprojection(3);
    i0.ɵɵtemplate(4, AppComponent_ng_container_1_ngx_expandable_search_4_Template, 1, 3, "ngx-expandable-search", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.withGlobalSearch);
} }
function AppComponent_ngx_filter_group_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-filter-group", 4);
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onFilterData($event)); })("onRefresh", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.refresh($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r1.filterConfig)("lang", ctx_r1.lang)("datas", ctx_r1.datas)("withRefresh", ctx_r1.withRefresh);
} }
function AppComponent_ngx_expandable_search_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onFilterData($event)); })("onRefresh", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.refresh($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("lang", ctx_r2.lang)("placeholder", ctx_r2.placeholder)("datas", ctx_r2.datas);
} }
const _c0 = ["*"];
export class AppComponent {
    constructor() {
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.withGlobalSearch = true;
        this.placeholder = "";
        this.searchType = 'search-full';
        this.datas = [];
        this.onFilter = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.configFilterGroup = [];
        this.configFilterGlobal = '';
        this.filterConfigRefresh = "";
    }
    ngOnInit() {
        setTimeout(() => {
            this.filterConfigRefresh = JSON.stringify(this.filterConfig);
        }, 2000);
    }
    onFilterData(e) {
        if (this.searchType === 'search-full') {
            if (e.type === 'group') {
                this.configFilterGroup = e.filterConfig;
                const results = searchGlobal(e.datas, this.configFilterGlobal);
                this.onFilter.emit({ ...results, filterConfig: e.filterConfig });
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit({ ...results, filterConfig: e.filterConfig });
            }
        }
        else {
            this.onFilter.emit(e);
        }
    }
    refresh(e) {
        if (this.searchType === 'search-full') {
            if (e.type === 'group') {
                this.configFilterGroup = [];
                this.onFilterData(e);
                this.onRefresh.emit(e);
                this.filterConfig = JSON.parse(this.filterConfigRefresh);
            }
            else {
                this.configFilterGlobal = "";
                this.onFilterData(e);
            }
        }
        else {
            this.onRefresh.emit({ ...e, datas: this.datas });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "ngx-filter-container"], [4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", 4, "ngIf"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "ngx-filter-content-left"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AppComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
        i0.ɵɵtemplate(2, AppComponent_ngx_filter_group_2_Template, 1, 4, "ngx-filter-group", 2);
        i0.ɵɵtemplate(3, AppComponent_ngx_expandable_search_3_Template, 1, 3, "ngx-expandable-search", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-full");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-group");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-text");
    } }, styles: [".ngx-filter-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container[_ngcontent-%COMP%]   .ngx-filter-content-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
    }], null, { filterConfig: [{
            type: Input
        }], lang: [{
            type: Input
        }], withRefresh: [{
            type: Input
        }], withGlobalSearch: [{
            type: Input
        }], placeholder: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ01oRCxnREFDNEU7SUFEZCxzTkFBWSxlQUFBLDJCQUFvQixDQUFBLElBQUMsMk1BQ3BELGVBQUEsc0JBQWUsQ0FBQSxJQURxQztJQUUvRixpQkFBd0I7OztJQUZ3QixrQ0FBYSxtQ0FBQSx1QkFBQTs7OztJQU5qRSw2QkFBaUQ7SUFDL0MsMkNBQzRFO0lBRGQsd0xBQVksZUFBQSwyQkFBb0IsQ0FBQSxJQUFDLDZLQUNoRixlQUFBLHNCQUFlLENBQUEsSUFEaUU7SUFFL0YsaUJBQW1CO0lBQ25CLDhCQUFxQztJQUNuQyxrQkFBeUI7SUFDekIsZ0hBRXdCO0lBQzFCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQVRLLGVBQTZCO0lBQTdCLGtEQUE2QixxQkFBQSx1QkFBQSxtQ0FBQTtJQUtyQixlQUFzQjtJQUF0Qiw4Q0FBc0I7Ozs7SUFLbEQsMkNBQzhHO0lBQTVHLDhMQUFZLGVBQUEsNEJBQW9CLENBQUEsSUFBQyxtTEFBYyxlQUFBLHVCQUFlLENBQUEsSUFBN0I7SUFDbkMsaUJBQW1COzs7SUFGbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBR25GLGdEQUM0RTtJQURKLHdNQUFZLGVBQUEsNEJBQW9CLENBQUEsSUFBQyw2TEFDOUQsZUFBQSx1QkFBZSxDQUFBLElBRCtDO0lBRXpHLGlCQUF3Qjs7O0lBRmtDLGtD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ZTtRQUNmLHVGQUVtQjtRQUNuQixpR0FFd0I7UUFDMUIsaUJBQU07O1FBakJXLGVBQWdDO1FBQWhDLHVEQUFnQztRQVc1QixlQUFpQztRQUFqQyx3REFBaUM7UUFHNUIsZUFBZ0M7UUFBaEMsdURBQWdDOzt1RkRKN0MsWUFBWTtjQUx4QixTQUFTOzJCQUNFLFlBQVk7Z0JBS2IsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvbkFwcGx5LCBzZWFyY2hHbG9iYWwgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxyXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9IFwiZnJcIlxyXG4gIEBJbnB1dCgpIHdpdGhSZWZyZXNoID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIHdpdGhHbG9iYWxTZWFyY2ggPSB0cnVlXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgQElucHV0KCkgc2VhcmNoVHlwZTogJ3NlYXJjaC1ncm91cCcgfCAnc2VhcmNoLXRleHQnIHwgJ3NlYXJjaC1mdWxsJyA9ICdzZWFyY2gtZnVsbCdcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uZmlnRmlsdGVyR3JvdXAgPSBbXTtcclxuICBjb25maWdGaWx0ZXJHbG9iYWwgPSAnJztcclxuICBmaWx0ZXJDb25maWdSZWZyZXNoID0gXCJcIlxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQ29uZmlnUmVmcmVzaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyQ29uZmlnKVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG4gIG9uRmlsdGVyRGF0YShlKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUeXBlID09PSAnc2VhcmNoLWZ1bGwnKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gZS5maWx0ZXJDb25maWc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEdsb2JhbChlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiBlLmZpbHRlckNvbmZpZyB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRmlsdGVyR2xvYmFsID0gZS5maWx0ZXJDb25maWc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IG9uQXBwbHkoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHcm91cCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiBlLmZpbHRlckNvbmZpZyB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWZyZXNoKGUpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ2dyb3VwJykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRmlsdGVyR3JvdXAgPSBbXTtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxyXG4gICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoZSlcclxuICAgICAgICB0aGlzLmZpbHRlckNvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXJDb25maWdSZWZyZXNoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRmlsdGVyR2xvYmFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHsgLi4uZSwgZGF0YXM6IHRoaXMuZGF0YXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuZ3gtZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1mdWxsJ1wiPlxyXG4gICAgPG5neC1maWx0ZXItZ3JvdXAgW2ZpbHRlckNvbmZpZ109XCJmaWx0ZXJDb25maWdcIiBbbGFuZ109XCJsYW5nXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCJcclxuICAgICAgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICAgIDwvbmd4LWZpbHRlci1ncm91cD5cclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZmlsdGVyLWNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxuZ3gtZXhwYW5kYWJsZS1zZWFyY2ggKm5nSWY9XCJ3aXRoR2xvYmFsU2VhcmNoXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIj5cclxuICAgICAgPC9uZ3gtZXhwYW5kYWJsZS1zZWFyY2g+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmd4LWZpbHRlci1ncm91cCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLWdyb3VwJ1wiIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgICAob25GaWx0ZXIpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiIFt3aXRoUmVmcmVzaF09XCJ3aXRoUmVmcmVzaFwiPlxyXG4gIDwvbmd4LWZpbHRlci1ncm91cD5cclxuICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtdGV4dCdcIiBbbGFuZ109XCJsYW5nXCIgKG9uU2VhcmNoKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgPC9uZ3gtZXhwYW5kYWJsZS1zZWFyY2g+XHJcbjwvZGl2PiJdfQ==