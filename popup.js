document.addEventListener('DOMContentLoaded', () => {
  const dialogBox =  document.getElementById('dialog-box');
  const result = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    dialogBox.innerHTML = tabTitle(tabs[0].title);
  });
});

const tabTitle =  (tabTitle) => {
  const title = `💁🏻‍♀️ You have ${tabTitle} open`;
  return title;
}