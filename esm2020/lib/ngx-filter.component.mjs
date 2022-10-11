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
                this.onFilter.emit({ ...results, filterConfig: this.configFilterGroup, searchInput: this.searchInput });
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                this.searchInput = e?.searchText || '';
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit({ ...results, filterConfig: this.configFilterGroup, searchInput: this.searchInput });
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
NgxFilterLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: NgxFilterLibraryComponent, selector: "ngx-filter", inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngImport: i0, template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.FilterComponent, selector: "ngx-filter-group", inputs: ["filterConfig", "lang", "withRefresh", "datas"], outputs: ["onSort", "onFilter", "onRefresh"] }, { kind: "component", type: i3.ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: ["datas", "searchsKey", "placeholder", "expandedWitdh", "icon", "closeIcon"], outputs: ["closed", "onSearch", "onRefresh"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyL3NyYy9saWIvbmd4LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyL3NyYy9saWIvbmd4LWZpbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN0RCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTVcsaUJBQVksR0FBMkIsRUFBRSxDQUFBO1FBQ3pDLFNBQUksR0FBVyxJQUFJLENBQUE7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUE7UUFDbEIscUJBQWdCLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGVBQVUsR0FBbUQsYUFBYSxDQUFBO1FBQzFFLFVBQUssR0FBUSxFQUFFLENBQUE7UUFDZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUM3QyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQTtLQXlDekI7SUF2Q0MsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUUvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3pHO2lCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxVQUFVLElBQUksRUFBRSxDQUFBO2dCQUN0QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUN6RztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBTTtRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3JCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0gsQ0FBQzs7c0hBbkRVLHlCQUF5QjswR0FBekIseUJBQXlCLDZTQ1Z0QywwcENBa0JNOzJGRFJPLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxZQUFZOzhCQUtiLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb25BcHBseSwgc2VhcmNoR2xvYmFsIH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ25neC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd4LWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEZpbHRlckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcbiAgQElucHV0KCkgd2l0aFJlZnJlc2ggPSB0cnVlXG4gIEBJbnB1dCgpIHdpdGhHbG9iYWxTZWFyY2ggPSB0cnVlXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJcIlxuICBASW5wdXQoKSBzZWFyY2hUeXBlOiAnc2VhcmNoLWdyb3VwJyB8ICdzZWFyY2gtdGV4dCcgfCAnc2VhcmNoLWZ1bGwnID0gJ3NlYXJjaC1mdWxsJ1xuICBASW5wdXQoKSBkYXRhczogYW55ID0gW11cbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIGNvbmZpZ0ZpbHRlckdyb3VwID0gW107XG4gIGNvbmZpZ0ZpbHRlckdsb2JhbCA9ICcnO1xuICBmaWx0ZXJDb25maWdSZWZyZXNoID0gXCJcIlxuICBzZWFyY2hJbnB1dDogYW55O1xuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyQ29uZmlnUmVmcmVzaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyQ29uZmlnKVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgb25GaWx0ZXJEYXRhKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IGUuZmlsdGVyQ29uZmlnO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoR2xvYmFsKGUuZGF0YXMsIHRoaXMuY29uZmlnRmlsdGVyR2xvYmFsKTtcblxuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoeyAuLi5yZXN1bHRzLCBmaWx0ZXJDb25maWc6IHRoaXMuY29uZmlnRmlsdGVyR3JvdXAsIHNlYXJjaElucHV0OiB0aGlzLnNlYXJjaElucHV0IH0pO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IGUuZmlsdGVyQ29uZmlnO1xuICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gZT8uc2VhcmNoVGV4dCB8fCAnJ1xuICAgICAgICBjb25zdCByZXN1bHRzID0gb25BcHBseShlLmRhdGFzLCB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwKTtcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgLi4ucmVzdWx0cywgZmlsdGVyQ29uZmlnOiB0aGlzLmNvbmZpZ0ZpbHRlckdyb3VwLCBzZWFyY2hJbnB1dDogdGhpcy5zZWFyY2hJbnB1dCB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KGUpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnNlYXJjaFR5cGUgPT09ICdzZWFyY2gtZnVsbCcpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IFtdO1xuICAgICAgICB0aGlzLm9uRmlsdGVyRGF0YShlKVxuICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KGUpXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2gpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZ0ZpbHRlckdsb2JhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyAuLi5lLCBkYXRhczogdGhpcy5kYXRhcyB9KVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250YWluZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZnVsbCdcIj5cclxuICAgIDxuZ3gtZmlsdGVyLWdyb3VwIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCIgW2xhbmddPVwibGFuZ1wiIChvbkZpbHRlcik9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICAgIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbiAgICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZpbHRlci1jb250ZW50LWxlZnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmd4LWV4cGFuZGFibGUtc2VhcmNoICpuZ0lmPVwid2l0aEdsb2JhbFNlYXJjaFwiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCI+XHJcbiAgICAgIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5neC1maWx0ZXItZ3JvdXAgKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC1ncm91cCdcIiBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiIFtsYW5nXT1cImxhbmdcIlxyXG4gICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBbd2l0aFJlZnJlc2hdPVwid2l0aFJlZnJlc2hcIj5cclxuICA8L25neC1maWx0ZXItZ3JvdXA+XHJcbiAgPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLXRleHQnXCIgW2xhbmddPVwibGFuZ1wiIChvblNlYXJjaCk9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gIDwvbmd4LWV4cGFuZGFibGUtc2VhcmNoPlxyXG48L2Rpdj4iXX0=