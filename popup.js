const $ = (id) => document.getElementById(id);

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

async function render() {
  const s = await chrome.storage.local.get({ day: "", seen: [], limit: 20 });
  const count = s.day === todayKey() ? s.seen.length : 0;
  $("count").textContent = count;
  $("limitShown").textContent = s.limit;
  $("limit").value = s.limit;
}

$("save").addEventListener("click", async () => {
  const n = parseInt($("limit").value, 10);
  if (!n || n < 1) {
    $("msg").textContent = "enter a number above 0";
    return;
  }
  await chrome.storage.local.set({ limit: n });
  $("msg").textContent = "saved";
  render();
});

$("reset").addEventListener("click", async () => {
  await chrome.storage.local.set({ day: todayKey(), seen: [] });
  $("msg").textContent = "count reset";
  render();
});

render();
