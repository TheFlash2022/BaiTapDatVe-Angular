import { TestBed } from '@angular/core/testing';
import { OneWayBindingComponent } from './one-way-binding.component';
describe('OneWayBindingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OneWayBindingComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(OneWayBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=one-way-binding.component.spec.js.map