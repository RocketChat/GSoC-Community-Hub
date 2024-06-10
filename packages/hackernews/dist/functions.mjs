import {
  __async
} from "./chunk-DO6NXZSM.mjs";

// src/functions.tsx
var getHackerNewsPosts = (tag) => __async(void 0, null, function* () {
  const topStories = yield fetchHackerNewsPosts(tag, "points");
  const newStories = yield fetchHackerNewsPosts(tag, "created_at");
  const bestStories = yield fetchHackerNewsPosts(tag, "points");
  const askHN = yield fetchHackerNewsPosts(tag, "search_by_date", "ask_hn");
  const showHN = yield fetchHackerNewsPosts(tag, "created_at", "show_hn");
  return { topStories, newStories, bestStories, askHN, showHN };
});
var fetchHackerNewsPosts = (query, sort, storyType) => __async(void 0, null, function* () {
  let res;
  const tags = storyType ? `story,${storyType}` : "story";
  const response = yield fetch(`https://hn.algolia.com/api/v1/${sort === "created_at" ? "search_by_date" : "search"}?query=${query}&tags=${tags}&page=1&hitsPerPage=8`);
  const results = yield response.json();
  return results.hits;
});
function openInNewTab(url) {
  var _a;
  (_a = window.open(url, "_blank")) == null ? void 0 : _a.focus();
}
function timeAgo(utcTime) {
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - utcTime * 1e3;
  const seconds = Math.floor(diff / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return `${seconds}s ago`;
  }
}
export {
  getHackerNewsPosts,
  openInNewTab,
  timeAgo
};
