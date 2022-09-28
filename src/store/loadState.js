import { toast } from "components/shared/Toast/Toast";

function loadState() {
  try {
    const serializedState = localStorage.getItem("calendar");
    if (!serializedState) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    toast("Failed to load calendar data", {
      type: "error",
    });
  }
}

export default loadState;
