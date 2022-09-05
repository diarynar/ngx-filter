import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "nowboard-icon";
const _c0 = ["search"];
function ExpandableSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.searchText = $event; })("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.searchUpdate.next($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 6);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_1_Template_nb_icon_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onExpand(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText)("placeholder", ctx_r0.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.closeIcon)("size", 1.5);
} }
function ExpandableSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onExpand(); });
    i0.ɵɵelement(1, "nb-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r1.icon)("size", 1.5);
} }
export class ExpandableSearchComponent {
    constructor() {
        this.placeholder = '';
        this.expandedWitdh = '396px';
        this.icon = 'search_1';
        this.closeIcon = 'close';
        this.closed = new EventEmitter();
        this.onSearch = new EventEmitter();
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
                this.searchElement.nativeElement.focus();
            }, 1000);
        }
    }
    search(text) {
        const results = this.datas.filter((data) => Object.values(data).some((val) => String(val).toLowerCase().includes(text.toLowerCase())));
        this.onSearch.emit({ datas: results, searchText: text });
    }
}
ExpandableSearchComponent.ɵfac = function ExpandableSearchComponent_Factory(t) { return new (t || ExpandableSearchComponent)(); };
ExpandableSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableSearchComponent, selectors: [["ngx-expandable-search"]], viewQuery: function ExpandableSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchElement = _t.first);
    } }, inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch" }, decls: 3, vars: 2, consts: [[1, "search-text-container"], ["class", "expanded-search", 4, "ngIf"], ["class", "not-expanded-search", 3, "click", 4, "ngIf"], [1, "expanded-search"], ["type", "text", 1, "search-input", 3, "ngModel", "placeholder", "ngModelChange"], ["search", ""], [3, "icon", "size", "click"], [1, "not-expanded-search", 3, "click"], [3, "icon", "size"]], template: function ExpandableSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ExpandableSearchComponent_div_1_Template, 4, 4, "div", 1);
        i0.ɵɵtemplate(2, ExpandableSearchComponent_div_2_Template, 2, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showField);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NowboardIconComponent], styles: ["[_nghost-%COMP%]{position:relative}.search-text-container[_ngcontent-%COMP%]{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{display:inline-flex}.search-text-container[_ngcontent-%COMP%]   .not-expanded-search[_ngcontent-%COMP%]{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;height:100%;outline:none;background:inherit}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{width:20px;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableSearchComponent, [{
        type: Component,
        args: [{ selector: 'ngx-expandable-search', template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"] }]
    }], function () { return []; }, { datas: [{
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
        }], searchElement: [{
            type: ViewChild,
            args: ['search']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyL3NyYy9saWIvY29tcG9uZW50cy9leHBhbmRhYmxlLXNlYXJjaC9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtc2VhcmNoL2V4cGFuZGFibGUtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBK0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNGbkUsOEJBQStDLGtCQUFBO0lBQ2xCLHlOQUF3Qiw4S0FBMEIsZ0NBQXlCLElBQW5EO0lBQXBELGlCQUN5QztJQUN6QyxrQ0FBOEQ7SUFBckIsdUtBQVMsaUJBQVUsSUFBQztJQUFDLGlCQUFVLEVBQUE7OztJQUY1QyxlQUF3QjtJQUF4QiwyQ0FBd0IsbUNBQUE7SUFFM0MsZUFBa0I7SUFBbEIsdUNBQWtCLGFBQUE7Ozs7SUFFNUIsOEJBQXlFO0lBQXhDLG1LQUFTLGlCQUFVLElBQUM7SUFDcEQsNkJBQThDO0lBQy9DLGlCQUFNOzs7SUFESSxlQUFhO0lBQWIsa0NBQWEsYUFBQTs7QURHeEIsTUFBTSxPQUFPLHlCQUF5QjtJQTBCcEM7UUFqQk8sZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsa0JBQWEsR0FBVyxPQUFPLENBQUM7UUFHaEMsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUcxQixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBRXpCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUluQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FBQzthQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ2hCO2FBQU07WUFDTCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBRUgsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDM0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7O2tHQXhEVSx5QkFBeUI7NEVBQXpCLHlCQUF5Qjs7Ozs7O1FDVnRDLDhCQUFtQztRQUNsQywwRUFJTTtRQUNOLDBFQUVNO1FBRVAsaUJBQU07O1FBVHlCLGVBQWU7UUFBZixvQ0FBZTtRQUtVLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZESTNELHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLHVCQUF1QjtzQ0FPMUIsS0FBSztrQkFEWCxLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSztZQUlDLFdBQVc7a0JBRGpCLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsSUFBSTtrQkFEVixLQUFLO1lBSUMsU0FBUztrQkFEZixLQUFLO1lBR0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUljLGFBQWE7a0JBQWpDLFNBQVM7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZXhwYW5kYWJsZS1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRhdGFzOiBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2VhcmNoc0tleTogW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZXhwYW5kZWRXaXRkaDogc3RyaW5nID0gJzM5NnB4JztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NlYXJjaF8xJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY2xvc2VJY29uOiBzdHJpbmcgPSAnY2xvc2UnO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzaG93RmllbGQgPSBmYWxzZTtcclxuICBzZWFyY2hUZXh0ID0gXCJcIlxyXG4gIHNlYXJjaFVwZGF0ZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICkge1xyXG4gICAgLy8gRGVib3VuY2Ugc2VhcmNoLlxyXG4gICAgdGhpcy5zZWFyY2hVcGRhdGUucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25FeHBhbmQoKSB7XHJcbiAgICB0aGlzLnNob3dGaWVsZCA9ICF0aGlzLnNob3dGaWVsZDtcclxuICAgIGlmICghdGhpcy5zaG93RmllbGQpIHtcclxuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gXCJcIjtcclxuICAgICAgdGhpcy5zZWFyY2goJycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZWFyY2godGV4dDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5kYXRhcy5maWx0ZXIoKGRhdGEpID0+IE9iamVjdC52YWx1ZXMoZGF0YSkuc29tZSgodmFsOiBhbnkpID0+IFN0cmluZyh2YWwpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSkpXHJcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoeyBkYXRhczogcmVzdWx0cywgc2VhcmNoVGV4dDogdGV4dCB9KVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNlYXJjaC10ZXh0LWNvbnRhaW5lclwiPlxyXG5cdDxkaXYgY2xhc3M9XCJleHBhbmRlZC1zZWFyY2hcIiAqbmdJZj1cInNob3dGaWVsZFwiPlxyXG5cdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgI3NlYXJjaCAobmdNb2RlbENoYW5nZSk9XCJzZWFyY2hVcGRhdGUubmV4dCgkZXZlbnQpXCJcclxuXHRcdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgdHlwZT1cInRleHRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImNsb3NlSWNvblwiIFtzaXplXT1cIjEuNVwiIChjbGljayk9XCJvbkV4cGFuZCgpXCI+PC9uYi1pY29uPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJub3QtZXhwYW5kZWQtc2VhcmNoXCIgKGNsaWNrKT1cIm9uRXhwYW5kKClcIiAqbmdJZj1cIiFzaG93RmllbGRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImljb25cIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=