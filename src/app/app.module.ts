import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Test2Component } from './test2/test2.component';
import { StudentComponent } from './student/student.component';
import { PassgenratorComponent } from './passgenrator/passgenrator.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforAssignComponent } from './ngfor-assign/ngfor-assign.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { AssigndirictiveComponent } from './assigndirictive/assigndirictive.component';
import { TempletformComponent } from './templetform/templetform.component';
import { RagistrationformComponent } from './ragistrationform/ragistrationform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmEqualValidatorDirective } from './model/confirmEqualValidator.directive';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveformAssignComponent } from './reactiveform-assign/reactiveform-assign.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { StateComponent } from './state/state.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CricketinfoComponent } from './cricketinfo/cricketinfo.component';
import { GifComponent } from './gif/gif.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UtilityModule } from './model/utility/utility.module';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DatabindingComponent,
    Test2Component,
    StudentComponent,
    PassgenratorComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgforAssignComponent,
    NgstyleComponent,
    NgclassComponent,
    AssigndirictiveComponent,
    TempletformComponent,
    RagistrationformComponent,
    ConfirmEqualValidatorDirective,
    ReactiveformComponent,
    ReactiveformAssignComponent,
    Service1Component,
    Service2Component,
    PostComponent,
    TodoComponent,
    RapidapiComponent,
    StateComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    CricketinfoComponent,
    GifComponent,
    WikipediaComponent,
    PostlistComponent,
    PostdetailsComponent,
    PipeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    UtilityModule
  ],
  // we Register Our Services in Provider Properties. 
  // will create single Instance of Register Service
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( ) {
    console.log('App Module Called.');
    
  }
 }
