import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NowboardIconModule } from "nowboard-icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExpandableSearchComponent, FilterComponent } from '../public-api';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
import * as i2 from "@angular/common";
export class FilterModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('FilterModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: FilterModule,
            providers: []
        };
    }
}
FilterModule.ɵfac = function FilterModule_Factory(t) { return new (t || FilterModule)(i0.ɵɵinject(FilterModule, 12)); };
FilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FilterModule });
FilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [MatDatepickerModule], imports: [[
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            MatChipsModule,
            MatGridListModule,
            MatRadioModule,
            MatPaginatorModule,
            CdkTableModule,
            MatSortModule,
            MatTableModule,
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            NowboardIconModule.forRoot({
                disabled_color: "#5E7290",
                primary: "#001B66"
            }),
            MatTooltipModule,
            MatTabsModule,
            MatSlideToggleModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FilterComponent,
                    ExpandableSearchComponent,
                    AppComponent
                ],
                imports: [
                    FormsModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatSelectModule,
                    MatInputModule,
                    MatChipsModule,
                    MatGridListModule,
                    MatRadioModule,
                    MatPaginatorModule,
                    CdkTableModule,
                    MatSortModule,
                    MatTableModule,
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule,
                    MatProgressBarModule,
                    NowboardIconModule.forRoot({
                        disabled_color: "#5E7290",
                        primary: "#001B66"
                    }),
                    MatTooltipModule,
                    MatTabsModule,
                    MatSlideToggleModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatBottomSheetModule
                ],
                providers: [MatDatepickerModule],
                exports: [
                    AppComponent,
                ]
            }]
    }], function () { return [{ type: FilterModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterComponent,
        ExpandableSearchComponent,
        AppComponent], imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatGridListModule,
        MatRadioModule,
        MatPaginatorModule,
        CdkTableModule,
        MatSortModule,
        MatTableModule,
        DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule,
        MatProgressBarModule, i1.NowboardIconModule, MatTooltipModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule], exports: [AppComponent] }); })();
i0.ɵɵsetComponentScope(AppComponent, [i2.NgIf, FilterComponent,
    ExpandableSearchComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1B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QUFDO3dCQUN6QixjQUFjLEVBQUUsU0FBUzt3QkFDekIsT0FBTyxFQUFFLFNBQVM7cUJBQ25CLENBQUM7b0JBQ0YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLE9BQU8sRUFDTDtvQkFDRSxZQUFZO2lCQUNiO2FBQ0o7c0NBR29ELFlBQVk7c0JBQWxELFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixZQUFZLG1CQS9DckIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixZQUFZLGFBR1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQkFBb0IseUJBS3BCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBS2xCLFlBQVk7dUJBekNkLFlBQVksWUFGWixlQUFlO0lBQ2YseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTm93Ym9hcmRJY29uTW9kdWxlLCBOb3dib2FyZEljb25TZXJ2aWNlIH0gZnJvbSBcIm5vd2JvYXJkLWljb25cIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0U3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBFeHBhbmRhYmxlU2VhcmNoQ29tcG9uZW50LCBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgRXhwYW5kYWJsZVNlYXJjaENvbXBvbmVudCxcclxuICAgIEFwcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBkaXNhYmxlZF9jb2xvcjogXCIjNUU3MjkwXCIsXHJcbiAgICAgIHByaW1hcnk6IFwiIzAwMUI2NlwiXHJcbiAgICB9KSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtNYXREYXRlcGlja2VyTW9kdWxlXSxcclxuICBleHBvcnRzOlxyXG4gICAgW1xyXG4gICAgICBBcHBDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBGaWx0ZXJNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdGaWx0ZXJNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEZpbHRlck1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZpbHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==