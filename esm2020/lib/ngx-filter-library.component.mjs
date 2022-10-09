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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWx0ZXItbGlicmFyeS9zcmMvbGliL25neC1maWx0ZXItbGlicmFyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLWxpYnJhcnkvc3JjL2xpYi9uZ3gtZmlsdGVyLWxpYnJhcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTdEQsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1XLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQTtRQUN6QyxTQUFJLEdBQVcsSUFBSSxDQUFBO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLHFCQUFnQixHQUFHLElBQUksQ0FBQTtRQUN2QixnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixlQUFVLEdBQW1ELGFBQWEsQ0FBQTtRQUMxRSxVQUFLLEdBQVEsRUFBRSxDQUFBO1FBQ2QsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDbEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDN0Msc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qix3QkFBbUIsR0FBRyxFQUFFLENBQUE7S0FxQ3pCO0lBcENDLFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzlELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxZQUFZLENBQUMsQ0FBTTtRQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssYUFBYSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN4QyxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDbEU7aUJBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUNsRTtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBTTtRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3JCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0gsQ0FBQzs7c0hBL0NVLHlCQUF5QjswR0FBekIseUJBQXlCLDZTQ1Z0QywwcENBa0JNOzJGRFJPLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxZQUFZOzhCQUtiLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb25BcHBseSwgc2VhcmNoR2xvYmFsIH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ25neC1maWx0ZXItbGlicmFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3gtZmlsdGVyLWxpYnJhcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGaWx0ZXJMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gXCJmclwiXG4gIEBJbnB1dCgpIHdpdGhSZWZyZXNoID0gdHJ1ZVxuICBASW5wdXQoKSB3aXRoR2xvYmFsU2VhcmNoID0gdHJ1ZVxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiXCJcbiAgQElucHV0KCkgc2VhcmNoVHlwZTogJ3NlYXJjaC1ncm91cCcgfCAnc2VhcmNoLXRleHQnIHwgJ3NlYXJjaC1mdWxsJyA9ICdzZWFyY2gtZnVsbCdcbiAgQElucHV0KCkgZGF0YXM6IGFueSA9IFtdXG4gIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBjb25maWdGaWx0ZXJHcm91cCA9IFtdO1xuICBjb25maWdGaWx0ZXJHbG9iYWwgPSAnJztcbiAgZmlsdGVyQ29uZmlnUmVmcmVzaCA9IFwiXCJcbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlckNvbmZpZylcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBvbkZpbHRlckRhdGEoZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVHlwZSA9PT0gJ3NlYXJjaC1mdWxsJykge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwID0gZS5maWx0ZXJDb25maWc7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoeyAuLi5yZXN1bHRzLCBmaWx0ZXJDb25maWc6IGUuZmlsdGVyQ29uZmlnIH0pO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IGUuZmlsdGVyQ29uZmlnO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gb25BcHBseShlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwKTtcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiBlLmZpbHRlckNvbmZpZyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IFtdO1xuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KGUpXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2gpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyAuLi5lLCBkYXRhczogdGhpcy5kYXRhcyB9KVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250YWluZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZnVsbCdcIj5cclxuICAgIDxuZ3gtZmlsdGVyLWdyb3VwIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiIChvbkZpbHRlcik9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250ZW50LWxlZnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwid2l0aEdsb2JhbFNlYXJjaFwiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgICAgIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5neC1maWx0ZXItZ3JvdXAgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1ncm91cCdcIiBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiIFtsYW5nXT1cImxhbmdcIlxyXG4gICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLXRleHQnXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG48L2Rpdj4iXX0=