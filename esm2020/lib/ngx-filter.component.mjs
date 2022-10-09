import { Component, EventEmitter, Input, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/filter-group/filter.component";
import * as i3 from "./components/expandable-search/expandable-search.component";
export class NgxFilterLibraryComponent {
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
NgxFilterLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFilterLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: NgxFilterLibraryComponent, selector: "ngx-filter", inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngImport: i0, template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FilterComponent, selector: "ngx-filter-group", inputs: ["filterConfig", "lang", "withRefresh", "datas"], outputs: ["onSort", "onFilter", "onRefresh"] }, { kind: "component", type: i3.ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: ["datas", "searchsKey", "placeholder", "expandedWitdh", "icon", "closeIcon"], outputs: ["closed", "onSearch", "onRefresh"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
        }], propDecorators: { filterConfig: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyL3NyYy9saWIvbmd4LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyL3NyYy9saWIvbmd4LWZpbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN0RCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTVcsaUJBQVksR0FBMkIsRUFBRSxDQUFBO1FBQ3pDLFNBQUksR0FBVyxJQUFJLENBQUE7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUE7UUFDbEIscUJBQWdCLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGVBQVUsR0FBbUQsYUFBYSxDQUFBO1FBQzFFLFVBQUssR0FBUSxFQUFFLENBQUE7UUFDZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUM3QyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQTtLQXNDekI7SUFyQ0MsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUNsRTtpQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGFBQWEsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7U0FDakQ7SUFDSCxDQUFDOztzSEFoRFUseUJBQXlCOzBHQUF6Qix5QkFBeUIsNlNDVnRDLDBwQ0FrQk07MkZEUk8seUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLFlBQVk7OEJBS2IsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvbkFwcGx5LCBzZWFyY2hHbG9iYWwgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnbmd4LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3gtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4RmlsdGVyTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9IFwiZnJcIlxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcbiAgQElucHV0KCkgd2l0aEdsb2JhbFNlYXJjaCA9IHRydWVcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSBcIlwiXG4gIEBJbnB1dCgpIHNlYXJjaFR5cGU6ICdzZWFyY2gtZ3JvdXAnIHwgJ3NlYXJjaC10ZXh0JyB8ICdzZWFyY2gtZnVsbCcgPSAnc2VhcmNoLWZ1bGwnXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnkgPSBbXVxuICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgY29uZmlnRmlsdGVyR3JvdXAgPSBbXTtcbiAgY29uZmlnRmlsdGVyR2xvYmFsID0gJyc7XG4gIGZpbHRlckNvbmZpZ1JlZnJlc2ggPSBcIlwiXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJDb25maWdSZWZyZXNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJDb25maWcpXG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBvbkZpbHRlckRhdGEoZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVHlwZSA9PT0gJ3NlYXJjaC1mdWxsJykge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gZS5maWx0ZXJDb25maWc7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoeyAuLi5yZXN1bHRzLCBmaWx0ZXJDb25maWc6IGUuZmlsdGVyQ29uZmlnIH0pO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IGUuZmlsdGVyQ29uZmlnO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gb25BcHBseShlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwKTtcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiBlLmZpbHRlckNvbmZpZyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IFtdO1xuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KGUpXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2gpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyAuLi5lLCBkYXRhczogdGhpcy5kYXRhcyB9KVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250YWluZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZnVsbCdcIj5cclxuICAgIDxuZ3gtZmlsdGVyLWdyb3VwIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiIChvbkZpbHRlcik9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250ZW50LWxlZnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwid2l0aEdsb2JhbFNlYXJjaFwiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgICAgIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5neC1maWx0ZXItZ3JvdXAgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1ncm91cCdcIiBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiIFtsYW5nXT1cImxhbmdcIlxyXG4gICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLXRleHQnXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG48L2Rpdj4iXX0=