import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllTodosComponent } from './delete-all-todos.component';

describe('DeleteAllTodosComponent', () => {
  let component: DeleteAllTodosComponent;
  let fixture: ComponentFixture<DeleteAllTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAllTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
