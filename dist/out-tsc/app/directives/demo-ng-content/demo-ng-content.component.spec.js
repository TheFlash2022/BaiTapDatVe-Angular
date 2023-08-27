import { TestBed } from '@angular/core/testing';
import { DemoNgContentComponent } from './demo-ng-content.component';
describe('DemoNgContentComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DemoNgContentComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(DemoNgContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=demo-ng-content.component.spec.js.map