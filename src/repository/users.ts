import httpUtils from "@/utils/http-utils";

export function getLogin() {
  return httpUtils.get('/users/login')
}