import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  public roles = {
    admin: 'admin',
    user: 'user',
  };

  private currentUserRole = this.roles.user;

  public getUserRole(): string {
    return this.currentUserRole;
  }

  public setUserRole(role: 'admin' | 'user'): void {
    if (role === 'admin' || role === 'user') {
      this.currentUserRole = this.roles[role];
    } else {
      console.error('Неправильное значение роли:', role);
    }
  }
}
