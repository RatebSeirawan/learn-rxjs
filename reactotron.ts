/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  networking,
} from "reactotron-react-native";

const reactotron = Reactotron.configure({
  name: "rxjs",
})
  .configure({ port: 9999 })
  .useReactNative()
  .use(trackGlobalErrors({}))
  .use(openInEditor())
  .use(overlay())
  .use(networking())
  .connect();

console.tron = Reactotron.logImportant;

reactotron.clear();
export default reactotron;
