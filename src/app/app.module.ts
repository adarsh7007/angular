import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { NoteModule } from './user/user.module';
import { UserNoteComponent } from './user-note/user-note.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { MenuNoteModule } from './menu-note/menu-note.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserNoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuNoteModule,
    NoteModule,
    HttpClientModule,
    MenuRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
