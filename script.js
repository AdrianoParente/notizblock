let titles = [];
let notices = [];

/**
 * add a new notice to zhe board
 */
function addNotice() {
    checkTitle();
    checkNotice();
    let noticeBox = document.getElementById('noticeBox');
    noticeBox.innerHTML = '';
    for (let i = 0; i < titles.length; i++) {
        noticeBox.innerHTML += `
        <div class ="noticeSheet">
            <div class ="noticeForm">
            <div class ="title"> ${titles[i]}</div>
            <div class ="notice"> ${notices[i]}</div>
            </div>
            <a href = "#"  onclick ="deleteNotice(${i})">Löschen<a/>
            </div>
        `;
    }
    document.getElementById('title').value = '';
    document.getElementById('notice').value = '';
}

/**
 * check if the user has inserted a title
 * if yes, than push to the array an store it
 * if no, than show an alert
 */
function checkTitle() {
    let title = document.getElementById('title').value;
    if (title.length > 0) {
        titles.push(title);
        localStorage.setItem("titles", JSON.stringify(titles));
    } else { alert('Trage einen Titel ein') }
}

/**
 * check if the user has inserted a notice
 * if yes, than push to the array and store it
 * if no, than show an alert
 */
function checkNotice() {
    let notice = document.getElementById('notice').value;
    if (notice.length > 0) {
        notices.push(notice);
        localStorage.setItem("notices", JSON.stringify(notices));
    } else { alert('Trage eine Notiz ein') }
}

/**
 * delete the selected item from the array and save the new array in the local storage
 * at the end the new array is been drawn
 * @param {integer} position is the index of the selected item
 */
function deleteNotice(position) {
    titles.splice(position, 1);
    localStorage.setItem("titles", JSON.stringify(titles));
    notices.splice(position, 1);
    localStorage.setItem("notices", JSON.stringify(notices));
    let noticeBox = document.getElementById('noticeBox');
    noticeBox.innerHTML = '';
    for (let i = 0; i < titles.length; i++) {
        noticeBox.innerHTML += `
            <div class ="noticeSheet">
            <div class ="noticeForm">
            <div class ="title"> ${titles[i]}</div>
            <div class ="notice"> ${notices[i]}</div>
            </div>
            <a href = "#"  onclick ="deleteNotice(${i})">Löschen<a/>
            </div>
              `;
    }
}

/**
 * takes the array values out of the local storage and draw it
 */
function getNotices() {
    titles = JSON.parse(localStorage.getItem("titles")) || [];
    notices = JSON.parse(localStorage.getItem("notices")) || [];
    noticeBox = document.getElementById('noticeBox');
    noticeBox.innerHTML = '';
    for (let i = 0; i < titles.length; i++) {
        noticeBox.innerHTML += `
<div class ="noticeSheet">
<div class ="noticeForm">
<div class ="title"> ${titles[i]}</div>
<div class ="notice"> ${notices[i]}</div>
</div>
<a href = "#"  onclick ="deleteNotice(${i})">Löschen<a/>
</div>
`;
    }
}