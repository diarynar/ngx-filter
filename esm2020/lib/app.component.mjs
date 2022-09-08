import { Component, EventEmitter, Input, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';
import * as i0 from "@angular/core";
function AppComponent_ng_container_1_ngx_expandable_search_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("lang", ctx_r3.lang)("datas", ctx_r3.datas);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ngx-filter-group", 4);
    i0.ɵɵlistener("onFilter", function AppComponent_ng_container_1_Template_ngx_filter_group_onFilter_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_Template_ngx_filter_group_onRefresh_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.refresh($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵprojection(3);
    i0.ɵɵtemplate(4, AppComponent_ng_container_1_ngx_expandable_search_4_Template, 1, 2, "ngx-expandable-search", 3);
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
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onFilterData($event); })("onRefresh", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r1.filterConfig)("lang", ctx_r1.lang)("datas", ctx_r1.datas)("withRefresh", ctx_r1.withRefresh);
} }
function AppComponent_ngx_expandable_search_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onFilterData($event); })("onRefresh", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("lang", ctx_r2.lang)("datas", ctx_r2.datas);
} }
const _c0 = ["*"];
export class AppComponent {
    constructor() {
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.withGlobalSearch = true;
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
                this.onFilter.emit(results);
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit(results);
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
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "ngx-filter-container"], [4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", 4, "ngIf"], [3, "lang", "datas", "onSearch", "onRefresh", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "ngx-filter-content-left"], [3, "lang", "datas", "onSearch", "onRefresh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AppComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
        i0.ɵɵtemplate(2, AppComponent_ngx_filter_group_2_Template, 1, 4, "ngx-filter-group", 2);
        i0.ɵɵtemplate(3, AppComponent_ngx_expandable_search_3_Template, 1, 2, "ngx-expandable-search", 3);
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
        args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
    }], null, { filterConfig: [{
            type: Input
        }], lang: [{
            type: Input
        }], withRefresh: [{
            type: Input
        }], withGlobalSearch: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ01oRCxnREFDZ0Q7SUFEYyxzTkFBWSwyQkFBb0IsSUFBQywyTUFDaEYsc0JBQWUsSUFEaUU7SUFFL0YsaUJBQXdCOzs7SUFGd0Isa0NBQWEsdUJBQUE7Ozs7SUFOakUsNkJBQWlEO0lBQy9DLDJDQUM0RTtJQURkLHdMQUFZLDJCQUFvQixJQUFDLDZLQUNoRixzQkFBZSxJQURpRTtJQUUvRixpQkFBbUI7SUFDbkIsOEJBQXFDO0lBQ25DLGtCQUF5QjtJQUN6QixnSEFFd0I7SUFDMUIsaUJBQU07SUFDUiwwQkFBZTs7O0lBVEssZUFBNkI7SUFBN0Isa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBO0lBS3JCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQUtsRCwyQ0FDOEc7SUFBNUcsOExBQVksNEJBQW9CLElBQUMsbUxBQWMsdUJBQWUsSUFBN0I7SUFDbkMsaUJBQW1COzs7SUFGbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBR25GLGdEQUNnRDtJQUR3Qix3TUFBWSw0QkFBb0IsSUFBQyw2TEFDMUYsdUJBQWUsSUFEMkU7SUFFekcsaUJBQXdCOzs7SUFGa0Msa0NBQWEsdUJBQUE7OztBREp6RSxNQUFNLE9BQU8sWUFBWTtJQUx6QjtRQU1XLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQTtRQUN6QyxTQUFJLEdBQVcsSUFB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SztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvbkFwcGx5LCBzZWFyY2hHbG9iYWwgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxyXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9IFwiZnJcIlxyXG4gIEBJbnB1dCgpIHdpdGhSZWZyZXNoID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIHdpdGhHbG9iYWxTZWFyY2ggPSB0cnVlXHJcbiAgQElucHV0KCkgc2VhcmNoVHlwZTogJ3NlYXJjaC1ncm91cCcgfCAnc2VhcmNoLXRleHQnIHwgJ3NlYXJjaC1mdWxsJyA9ICdzZWFyY2gtZnVsbCdcclxuICBASW5wdXQoKSBkYXRhczogYW55W10gPSBbXVxyXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY29uZmlnRmlsdGVyR3JvdXAgPSBbXTtcclxuICBjb25maWdGaWx0ZXJHbG9iYWwgPSAnJztcclxuICBmaWx0ZXJDb25maWdSZWZyZXNoID0gXCJcIlxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQ29uZmlnUmVmcmVzaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyQ29uZmlnKVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG4gIG9uRmlsdGVyRGF0YShlKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUeXBlID09PSAnc2VhcmNoLWZ1bGwnKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gZS5maWx0ZXJDb25maWc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEdsb2JhbChlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHJlc3VsdHMpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwgPSBlLmZpbHRlckNvbmZpZztcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gb25BcHBseShlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwKTtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQocmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25GaWx0ZXIuZW1pdChlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVmcmVzaChlKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUeXBlID09PSAnc2VhcmNoLWZ1bGwnKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gW107XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlckRhdGEoZSlcclxuICAgICAgICB0aGlzLmZpbHRlckNvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXJDb25maWdSZWZyZXNoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRmlsdGVyR2xvYmFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KHsgLi4uZSwgZGF0YXM6IHRoaXMuZGF0YXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuZ3gtZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1mdWxsJ1wiPlxyXG4gICAgPG5neC1maWx0ZXItZ3JvdXAgW2ZpbHRlckNvbmZpZ109XCJmaWx0ZXJDb25maWdcIiBbbGFuZ109XCJsYW5nXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCJcclxuICAgICAgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICAgIDwvbmd4LWZpbHRlci1ncm91cD5cclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZmlsdGVyLWNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxuZ3gtZXhwYW5kYWJsZS1zZWFyY2ggKm5nSWY9XCJ3aXRoR2xvYmFsU2VhcmNoXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIj5cclxuICAgICAgPC9uZ3gtZXhwYW5kYWJsZS1zZWFyY2g+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmd4LWZpbHRlci1ncm91cCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLWdyb3VwJ1wiIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgICAob25GaWx0ZXIpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiIFt3aXRoUmVmcmVzaF09XCJ3aXRoUmVmcmVzaFwiPlxyXG4gIDwvbmd4LWZpbHRlci1ncm91cD5cclxuICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtdGV4dCdcIiBbbGFuZ109XCJsYW5nXCIgKG9uU2VhcmNoKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCJcclxuICAgIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgPC9uZ3gtZXhwYW5kYWJsZS1zZWFyY2g+XHJcbjwvZGl2PiJdfQ==