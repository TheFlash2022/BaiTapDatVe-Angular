import { TestBed } from '@angular/core/testing';
import { Baitap5Component } from './baitap5.component';
describe('Baitap5Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Baitap5Component]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(Baitap5Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=baitap5.component.spec.js.map