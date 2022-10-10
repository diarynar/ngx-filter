import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExpandableSearchComponent } from './components/expandable-search/expandable-search.component';
import { FilterComponent } from './components/filter-group/filter.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxFilterLibraryComponent } from './ngx-filter.component';
import { NowboardIconModule } from "nowboard-icon";
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
export class NgxFilterModule {
    static forRoot() {
        return {
            ngModule: NgxFilterModule,
            providers: []
        };
    }
}
NgxFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, declarations: [NgxFilterLibraryComponent,
        FilterComponent,
        ExpandableSearchComponent], imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule, i1.NowboardIconModule, MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule], exports: [NgxFilterLibraryComponent] });
NgxFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        NowboardIconModule.forRoot({
            disabled_color: "#5E7290",
            primary: "#001B66"
        }),
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxFilterLibraryComponent,
                        FilterComponent,
                        ExpandableSearchComponent,
                    ],
                    imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatSelectModule,
                        MatInputModule,
                        NowboardIconModule.forRoot({
                            disabled_color: "#5E7290",
                            primary: "#001B66"
                        }),
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatBottomSheetModule
                    ],
                    exports: [
                        NgxFilterLibraryComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyL3NyYy9saWIvbmd4LWZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWdDbkQsTUFBTSxPQUFPLGVBQWU7SUFFbkIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxFQUNWO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQVJVLGVBQWU7NkdBQWYsZUFBZSxpQkE1QnhCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YseUJBQXlCLGFBR3pCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWMseUJBS2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBR3BCLHlCQUF5Qjs2R0FHaEIsZUFBZSxZQXZCeEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDO1FBQ0YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9COzJGQU1YLGVBQWU7a0JBOUIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLGVBQWU7d0JBQ2YseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7NEJBQ3pCLGNBQWMsRUFBRSxTQUFTOzRCQUN6QixPQUFPLEVBQUUsU0FBUzt5QkFDbkIsQ0FBQzt3QkFDRixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXhwYW5kYWJsZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHBhbmRhYmxlLXNlYXJjaC9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE5neEZpbHRlckxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL25neC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vd2JvYXJkSWNvbk1vZHVsZSB9IGZyb20gXCJub3dib2FyZC1pY29uXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neEZpbHRlckxpYnJhcnlDb21wb25lbnQsXG4gICAgRmlsdGVyQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVTZWFyY2hDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgZGlzYWJsZWRfY29sb3I6IFwiIzVFNzI5MFwiLFxuICAgICAgcHJpbWFyeTogXCIjMDAxQjY2XCJcbiAgICB9KSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4RmlsdGVyTGlicmFyeUNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGaWx0ZXJNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEZpbHRlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4RmlsdGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19