import httpUtils from '@/utils/http-utils';

export function getList() {
  return httpUtils.get('/feeds');
}