import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";
import {Location} from "@angular/common";

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { WelcomeComponent } from './welcome.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        WelcomeComponent,
        ContactComponent,
        NotFoundComponent
      ],
    }).compileComponents();
  }));

  it('navigation works', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const location = TestBed.get(Location); 
    const links = fixture.debugElement.queryAll(By.css('a'));
    
    const leftclickevent = {button: 0};
    links[0].triggerEventHandler('click',leftclickevent);
    //links[0].nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(location.path()=='/welcome').toBeTruthy();
    });
  });

//   it(`should have as title 'Test'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('Test');
//   });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to Test!');
//   });
});
