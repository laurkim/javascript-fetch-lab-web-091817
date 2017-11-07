const route = "https://api.github.com/repos/laurkim/javascript-fetch-lab";
const token = "";

function getIssues() {
  fetch(`${route}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json);
  const issues = document.getElementById('issues');
  json.forEach((issue) => {
    let newIssue = document.createElement('li');
    newIssue.innerHTML = `
        <strong>${issue.title}</strong>: ${issue.body}
    `;
    issues.appendChild(newIssue);
  });
}

function createIssue() {
  let issue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`${route}/issues`, {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
  console.log(json);
  let forkedRepo = document.getElementById('results');
  forkedRepo.innerHTML = `
    <ul>
      <li><a href=${json.html_url}>${json.full_name}</li>
    </ul>
  `
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '';
}
