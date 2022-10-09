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
    ngOnChanges() {
        console.log('-------------TURBO---------------', this.filterConfig);
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
NgxFilterLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: NgxFilterLibraryComponent, selector: "ngx-filter", inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FilterComponent, selector: "ngx-filter-group", inputs: ["filterConfig", "lang", "withRefresh", "datas"], outputs: ["onSort", "onFilter", "onRefresh"] }, { kind: "component", type: i3.ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: ["datas", "searchsKey", "placeholder", "expandedWitdh", "icon", "closeIcon"], outputs: ["closed", "onSearch", "onRefresh"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWx0ZXItbGlicmFyeS9zcmMvbGliL25neC1maWx0ZXItbGlicmFyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLWxpYnJhcnkvc3JjL2xpYi9uZ3gtZmlsdGVyLWxpYnJhcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTdEQsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1XLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQTtRQUN6QyxTQUFJLEdBQVcsSUFBSSxDQUFBO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLHFCQUFnQixHQUFHLElBQUksQ0FBQTtRQUN2QixnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixlQUFVLEdBQW1ELGFBQWEsQ0FBQTtRQUMxRSxVQUFLLEdBQVEsRUFBRSxDQUFBO1FBQ2QsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDbEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDN0Msc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qix3QkFBbUIsR0FBRyxFQUFFLENBQUE7S0F5Q3pCO0lBeENDLFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzlELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUNELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUNsRTtpQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGFBQWEsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7U0FDakQ7SUFDSCxDQUFDOztzSEFuRFUseUJBQXlCOzBHQUF6Qix5QkFBeUIsa1VDVnRDLDBwQ0FrQk07MkZEUk8seUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLFlBQVk7OEJBS2IsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvbkFwcGx5LCBzZWFyY2hHbG9iYWwgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnbmd4LWZpbHRlci1saWJyYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25neC1maWx0ZXItbGlicmFyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEZpbHRlckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcbiAgQElucHV0KCkgd2l0aFJlZnJlc2ggPSB0cnVlXG4gIEBJbnB1dCgpIHdpdGhHbG9iYWxTZWFyY2ggPSB0cnVlXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJcIlxuICBASW5wdXQoKSBzZWFyY2hUeXBlOiAnc2VhcmNoLWdyb3VwJyB8ICdzZWFyY2gtdGV4dCcgfCAnc2VhcmNoLWZ1bGwnID0gJ3NlYXJjaC1mdWxsJ1xuICBASW5wdXQoKSBkYXRhczogYW55ID0gW11cbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIGNvbmZpZ0ZpbHRlckdyb3VwID0gW107XG4gIGNvbmZpZ0ZpbHRlckdsb2JhbCA9ICcnO1xuICBmaWx0ZXJDb25maWdSZWZyZXNoID0gXCJcIlxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyQ29uZmlnUmVmcmVzaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyQ29uZmlnKVxuICAgIH0sIDIwMDApO1xuICB9XG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tVFVSQk8tLS0tLS0tLS0tLS0tLS0nLCB0aGlzLmZpbHRlckNvbmZpZyk7XG5cbiAgfVxuICBvbkZpbHRlckRhdGEoZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVHlwZSA9PT0gJ3NlYXJjaC1mdWxsJykge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gZS5maWx0ZXJDb25maWc7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoeyAuLi5yZXN1bHRzLCBmaWx0ZXJDb25maWc6IGUuZmlsdGVyQ29uZmlnIH0pO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IGUuZmlsdGVyQ29uZmlnO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gb25BcHBseShlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwKTtcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiBlLmZpbHRlckNvbmZpZyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IFtdO1xuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KGUpXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2gpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyAuLi5lLCBkYXRhczogdGhpcy5kYXRhcyB9KVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250YWluZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZnVsbCdcIj5cclxuICAgIDxuZ3gtZmlsdGVyLWdyb3VwIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiIChvbkZpbHRlcik9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250ZW50LWxlZnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwid2l0aEdsb2JhbFNlYXJjaFwiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgICAgIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5neC1maWx0ZXItZ3JvdXAgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1ncm91cCdcIiBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiIFtsYW5nXT1cImxhbmdcIlxyXG4gICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLXRleHQnXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG48L2Rpdj4iXX0=