import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Subject } from 'rxjs';
import { searchGlobal } from '../../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "nowboard-icon";
export class ExpandableSearchComponent {
    constructor() {
        this.datas = [];
        this.searchsKey = [];
        this.placeholder = '';
        this.expandedWitdh = '396px';
        this.icon = 'search_1';
        this.closeIcon = 'close';
        this.closed = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.showField = false;
        this.searchText = "";
        this.searchUpdate = new Subject();
        // Debounce search.
        this.searchUpdate.pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(value => {
            this.search(value);
        });
    }
    ngOnInit() {
    }
    onExpand() {
        this.showField = !this.showField;
        if (!this.showField) {
            this.searchText = "";
            this.search('');
        }
        else {
            setTimeout(() => {
                this.searchElement?.nativeElement?.focus();
            }, 500);
        }
    }
    search(text) {
        const results = searchGlobal(this.datas, text);
        this.onSearch.emit(results);
    }
}
ExpandableSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ExpandableSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpandableSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch", onRefresh: "onRefresh" }, viewQueries: [{ propertyName: "searchElement", first: true, predicate: ["search"], descendants: true }], ngImport: i0, template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ExpandableSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-expandable-search', template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { datas: [{
                type: Input
            }], searchsKey: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], expandedWitdh: [{
                type: Input
            }], icon: [{
                type: Input
            }], closeIcon: [{
                type: Input
            }], closed: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onRefresh: [{
                type: Output
            }], searchElement: [{
                type: ViewChild,
                args: ['search']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9leHBhbmRhYmxlLXNlYXJjaC9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtc2VhcmNoL2V4cGFuZGFibGUtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPakQsTUFBTSxPQUFPLHlCQUF5QjtJQTJCcEM7UUF4Qk8sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHaEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsa0JBQWEsR0FBVyxPQUFPLENBQUM7UUFHaEMsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUcxQixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBRXpCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUluQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FBQzthQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ2hCO2FBQU07WUFDTCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQzdDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBRUgsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdCLENBQUM7O3NIQXpEVSx5QkFBeUI7MEdBQXpCLHlCQUF5QiwyWUNYdEMsdWhCQVVNOzJGRENPLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx1QkFBdUI7MEVBTzFCLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxVQUFVO3NCQURoQixLQUFLO2dCQUlDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJQyxJQUFJO3NCQURWLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUdJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBSWMsYUFBYTtzQkFBakMsU0FBUzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc2VhcmNoR2xvYmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZXhwYW5kYWJsZS1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRhdGFzID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlYXJjaHNLZXkgPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBleHBhbmRlZFdpdGRoOiBzdHJpbmcgPSAnMzk2cHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnc2VhcmNoXzEnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjbG9zZUljb246IHN0cmluZyA9ICdjbG9zZSc7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc2hvd0ZpZWxkID0gZmFsc2U7XHJcbiAgc2VhcmNoVGV4dCA9IFwiXCJcclxuICBzZWFyY2hVcGRhdGUgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxlbWVudDogRWxlbWVudFJlZiB8IHVuZGVmaW5lZDtcclxuICBjb25zdHJ1Y3RvcihcclxuICApIHtcclxuICAgIC8vIERlYm91bmNlIHNlYXJjaC5cclxuICAgIHRoaXMuc2VhcmNoVXBkYXRlLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaCh2YWx1ZSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uRXhwYW5kKCkge1xyXG4gICAgdGhpcy5zaG93RmllbGQgPSAhdGhpcy5zaG93RmllbGQ7XHJcbiAgICBpZiAoIXRoaXMuc2hvd0ZpZWxkKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuc2VhcmNoKCcnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwodGhpcy5kYXRhcywgdGV4dClcclxuICAgIHRoaXMub25TZWFyY2guZW1pdChyZXN1bHRzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNlYXJjaC10ZXh0LWNvbnRhaW5lclwiPlxyXG5cdDxkaXYgY2xhc3M9XCJleHBhbmRlZC1zZWFyY2hcIiAqbmdJZj1cInNob3dGaWVsZFwiPlxyXG5cdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgI3NlYXJjaCAobmdNb2RlbENoYW5nZSk9XCJzZWFyY2hVcGRhdGUubmV4dCgkZXZlbnQpXCJcclxuXHRcdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgdHlwZT1cInRleHRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImNsb3NlSWNvblwiIFtzaXplXT1cIjEuNVwiIChjbGljayk9XCJvbkV4cGFuZCgpXCI+PC9uYi1pY29uPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJub3QtZXhwYW5kZWQtc2VhcmNoXCIgKGNsaWNrKT1cIm9uRXhwYW5kKClcIiAqbmdJZj1cIiFzaG93RmllbGRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImljb25cIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=