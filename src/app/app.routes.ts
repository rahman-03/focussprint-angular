import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { EditTodoComponent } from './components/todo/edit-todo/edit-todo.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UpdateProfileComponent } from './components/user/update-profile/update-profile.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { DeleteAllTodosComponent } from './components/todo/delete-all-todos/delete-all-todos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'update-profile', component: UpdateProfileComponent, canActivate: [authGuard] },
    { path: 'change-password', component: ChangePasswordComponent, canActivate: [authGuard] },
    {path: 'delete-todos',component: DeleteAllTodosComponent, canActivate: [authGuard] },
    { path: 'todos', component: TodoListComponent, canActivate: [authGuard] },
    { path: 'todos/add', component: AddTodoComponent, canActivate: [authGuard] },
    { path: 'todos/:id', component: EditTodoComponent, canActivate: [authGuard] },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    {path:'**', component:PageNotFoundComponent}
];