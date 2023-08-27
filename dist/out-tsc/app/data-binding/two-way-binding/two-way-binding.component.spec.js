import { TestBed } from '@angular/core/testing';
import { TwoWayBindingComponent } from './two-way-binding.component';
describe('TwoWayBindingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TwoWayBindingComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TwoWayBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=two-way-binding.component.spec.js.map