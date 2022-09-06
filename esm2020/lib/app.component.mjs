import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
function AppComponent_ngx_filter_group_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-filter-group", 2);
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onApplyFilter($event); })("onRefresh", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onRefresh_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onRefresh(); })("onSort", function AppComponent_ngx_filter_group_0_Template_ngx_filter_group_onSort_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSortChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
} }
function AppComponent_ngx_expandable_search_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 3);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_1_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFilterData($event); });
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
        this.filterConfigBackup = [];
    }
    ngOnInit() {
        this.filterConfigBackup = _.cloneDeep(this.filterConfig);
    }
    onFilterData(e) {
        this.onFilter.emit(e);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter(this.filterConfig);
    }
    onRefresh() {
        this.filterConfig = _.cloneDeep(this.filterConfigBackup);
        this.onApplyFilter(this.filterConfig);
    }
    onApplyFilter(filterConfig) {
        const filterResultEquality = {};
        const filterResultDate = {};
        const filterResultSort = {};
        for (const { filterData } of filterConfig) {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter" }, decls: 2, vars: 2, consts: [[3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", "onSort", 4, "ngIf"], [3, "lang", "datas", "onSearch", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", "onSort"], [3, "lang", "datas", "onSearch"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AppComponent_ngx_filter_group_0_Template, 1, 4, "ngx-filter-group", 0);
        i0.ɵɵtemplate(1, AppComponent_ngx_expandable_search_1_Template, 1, 2, "ngx-expandable-search", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-group");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-text");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter', template: "<ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n  (onFilter)=\"onApplyFilter($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\" (onRefresh)=\"onRefresh()\"\r\n  (onSort)=\"onSortChange($event)\">\r\n</ngx-filter-group>\r\n<ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n  [datas]=\"datas\">\r\n</ngx-expandable-search>", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7SUNIdEIsMkNBRWtDO0lBRGhDLDRMQUFZLDRCQUFxQixJQUFDLDJLQUEwRCxrQkFBVyxJQUFyRSwyS0FDeEIsMkJBQW9CLElBREk7SUFFcEMsaUJBQW1COzs7SUFIbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBSW5GLGdEQUNrQjtJQURzRCxzTUFBWSwyQkFBb0IsSUFBQztJQUV6RyxpQkFBd0I7OztJQUZrQyxrQ0FBYSx1QkFBQTs7QURNdkUsTUFBTSxPQUFPLFlBQVk7SUFMekI7UUFNVyxpQkFBWSxHQUEyQixFQUFFLENBQUE7UUFDekMsU0FBSSxHQUFXLElBQUksQ0FBQTtRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNsQixlQUFVLEdBQW1DLGNBQWMsQ0FBQTtRQUMzRCxVQUFLLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQzVDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQTtLQW9FeEI7SUFuRUMsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQ0QsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2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QUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtJQUNqRixDQUFDOzt3RUF6RVUsWUFBWTsrREFBWixZQUFZO1FDVnpCLHVGQUdtQjtRQUNuQixpR0FFd0I7O1FBTkwsd0RBQWlDO1FBSTVCLGVBQWdDO1FBQWhDLHVEQUFnQzs7dUZETTNDLFlBQVk7Y0FMeEIsU0FBUzsyQkFDRSxZQUFZO2dCQUtiLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSBzZWFyY2hUeXBlOiAnc2VhcmNoLWdyb3VwJyB8ICdzZWFyY2gtdGV4dCcgPSAnc2VhcmNoLWdyb3VwJ1xyXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnlbXSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBmaWx0ZXJDb25maWdCYWNrdXAgPSBbXVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5maWx0ZXJDb25maWdCYWNrdXAgPSBfLmNsb25lRGVlcCh0aGlzLmZpbHRlckNvbmZpZylcclxuICB9XHJcbiAgb25GaWx0ZXJEYXRhKGUpIHtcclxuICAgIHRoaXMub25GaWx0ZXIuZW1pdChlKVxyXG4gIH1cclxuXHJcbiAgb25Tb3J0Q2hhbmdlKGl0ZW0pIHtcclxuICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlID09PSAnYXNjJyA/IFwiZGVzY1wiIDogJ2FzYydcclxuICAgIHRoaXMuZGF0YXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGFbaXRlbS5rZXldID4gYltpdGVtLmtleV0gPyAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAxIDogLTEpIDogKGl0ZW0udmFsdWUgPT09ICdhc2MnID8gLTEgOiAxKSlcclxuICAgIHRoaXMub25BcHBseUZpbHRlcih0aGlzLmZpbHRlckNvbmZpZylcclxuICB9XHJcblxyXG4gIG9uUmVmcmVzaCgpIHtcclxuICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gXy5jbG9uZURlZXAodGhpcy5maWx0ZXJDb25maWdCYWNrdXApO1xyXG4gICAgdGhpcy5vbkFwcGx5RmlsdGVyKHRoaXMuZmlsdGVyQ29uZmlnKVxyXG4gIH1cclxuXHJcbiAgb25BcHBseUZpbHRlcihmaWx0ZXJDb25maWcpIHtcclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdEVxdWFsaXR5ID0ge31cclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdERhdGUgPSB7fVxyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0U29ydCA9IHt9XHJcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyRGF0YSB9IG9mIGZpbHRlckNvbmZpZykge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJEYXRhKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWx0ZXJEYXRhLCBrZXkpICYmIGZpbHRlckRhdGFba2V5XSkge1xyXG4gICAgICAgICAgaWYgKGZpbHRlckRhdGFbXCJ0eXBlXCJdID09PSAnZGF0ZScpIHtcclxuICAgICAgICAgICAgZmlsdGVyUmVzdWx0RGF0ZVtgJHtmaWx0ZXJEYXRhW1wia2V5XCJdfS0ke2ZpbHRlckRhdGFbXCJvcGVyYXRvclwiXX1gXSA9IHtcclxuICAgICAgICAgICAgICBvcGVyYXRvcjogZmlsdGVyRGF0YVtcIm9wZXJhdG9yXCJdLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXJEYXRhW1widmFsdWVcIl0sXHJcbiAgICAgICAgICAgICAga2V5OiBmaWx0ZXJEYXRhW1wia2V5XCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyRGF0YVtcInR5cGVcIl0gPT09ICdzb3J0Jykge1xyXG4gICAgICAgICAgICBmaWx0ZXJSZXN1bHRTb3J0W2ZpbHRlckRhdGFbXCJrZXlcIl1dID0gZmlsdGVyRGF0YVtcInZhbHVlXCJdXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCEhZmlsdGVyRGF0YVtcInZhbHVlXCJdIHx8IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZmlsdGVyUmVzdWx0RXF1YWxpdHlbZmlsdGVyRGF0YVtcImtleVwiXV0gPSBmaWx0ZXJEYXRhW1widmFsdWVcIl1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGFGaWx0ZXJlZEJ5RXF1YWxpdHkgPSBfLmZpbHRlcih0aGlzLmRhdGFzLCBmaWx0ZXJSZXN1bHRFcXVhbGl0eSk7XHJcbiAgICBjb25zdCBkYXRhRmlsdGVyZWRCeURhdGUgPSBfLmNoYWluKGRhdGFGaWx0ZXJlZEJ5RXF1YWxpdHkpLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyUmVzdWx0RGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFEYXRlID0gbmV3IERhdGUoZGF0YVtmaWx0ZXJSZXN1bHREYXRlW2tleV1bJ2tleSddXSlcclxuICAgICAgICBjb25zdCBmaWx0ZXJEYXRlID0gbmV3IERhdGUoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1widmFsdWVcIl0pXHJcbiAgICAgICAgZGF0YURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICBmaWx0ZXJEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgICAgICAgaWYgKGZpbHRlclJlc3VsdERhdGVba2V5XVtcInZhbHVlXCJdKSB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdndGUnICYmIGRhdGFEYXRlLmdldFRpbWUoKSA8IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2x0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpID4gZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdlcScgJiYgZGF0YURhdGUuZ2V0VGltZSgpICE9PSBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc1RydWVcclxuICAgIH0pLnZhbHVlKClcclxuICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7IGZpbHRlcjogZmlsdGVyUmVzdWx0RXF1YWxpdHksIGRhdGFzOiBkYXRhRmlsdGVyZWRCeURhdGUgfSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZ3gtZmlsdGVyLWdyb3VwICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZ3JvdXAnXCIgW2ZpbHRlckNvbmZpZ109XCJmaWx0ZXJDb25maWdcIiBbbGFuZ109XCJsYW5nXCJcclxuICAob25GaWx0ZXIpPVwib25BcHBseUZpbHRlcigkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCIgKG9uUmVmcmVzaCk9XCJvblJlZnJlc2goKVwiXHJcbiAgKG9uU29ydCk9XCJvblNvcnRDaGFuZ2UoJGV2ZW50KVwiPlxyXG48L25neC1maWx0ZXItZ3JvdXA+XHJcbjxuZ3gtZXhwYW5kYWJsZS1zZWFyY2ggKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC10ZXh0J1wiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gIFtkYXRhc109XCJkYXRhc1wiPlxyXG48L25neC1leHBhbmRhYmxlLXNlYXJjaD4iXX0=