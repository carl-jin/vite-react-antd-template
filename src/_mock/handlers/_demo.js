import { DemoApi } from "@/api/services/demoService";
import { http, HttpResponse } from "msw";

const mockTokenExpired = http.post(`/api${DemoApi.TOKEN_EXPIRED}`, () => {
  return new HttpResponse(null, { status: 401 });
});

export default [mockTokenExpired];
