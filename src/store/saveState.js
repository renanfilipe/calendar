import { toast } from "components/shared/Toast/Toast";

async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("calendar", serializedState);
  } catch (e) {
    toast("Failed to save calendar data", {
      type: "error",
    });
  }
}

export default saveState;
