import { ResolveFn } from '@angular/router';
import { ApiClient } from '../../services/api-client';
import { inject } from '@angular/core';

// Resolve<> is deprecated
export const resolve: ResolveFn<any> = () => {
  return inject(ApiClient).get('posts/1');
};
