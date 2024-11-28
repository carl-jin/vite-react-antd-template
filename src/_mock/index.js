import demoMockApi from "./handlers/_demo";
import orgMockApi from "./handlers/_org";
import userMockApi from "./handlers/_user";
import { setupWorker } from "msw/browser";

const handlers = [...userMockApi, ...orgMockApi, ...demoMockApi];
const worker = setupWorker(...handlers);

export default worker;
