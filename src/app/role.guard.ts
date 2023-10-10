import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from './services/role.service';
import { inject } from '@angular/core';

export function roleGuard(): CanActivateFn {
  return () => {
    const router: Router = inject(Router);
    const roleService: RoleService = inject(RoleService);

    console.log(roleService.getUserRole());
    if (roleService.getUserRole() === 'admin') {
      return true;
    }

    router.navigateByUrl('error');
    return false;
  };
}
