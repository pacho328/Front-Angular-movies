import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetComponent } from './article-det.component';

describe('ArticleDetComponent', () => {
  let component: ArticleDetComponent;
  let fixture: ComponentFixture<ArticleDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
