// onClick
var clickBox = document.getElementById('box')
clickBox.addEventListener('click', () => {
    var checkColor = document.getElementById('box').style.backgroundColor;
    checkColor === 'red' ? clickBox.style.backgroundColor = '#234' : clickBox.style.backgroundColor = 'red';
    // clickBox.style.backgroundColor = 'red'
})

var addBtn = document.getElementById('addBtn');

var boxesContainer = document.getElementById('square-container');
addBtn.addEventListener('click', () => {
    var li = document.createElement('li')
    li.id = 'empty-box'
    // li.className = 'box'
    boxesContainer.appendChild(li)
})

var deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener('click', () => {
    // if(boxesContainer.getelemen)
    if (boxesContainer.childElementCount > 0) {
        var getChild = boxesContainer.lastChild;
        boxesContainer.removeChild(getChild)
    } else {
        alert('No child elements')
    }
})

class person {
    constructor(name, residence, hobby, work) {
        this.name = name;
        this.residence = residence;
        this.hobby = hobby;
        this.work = work;
    }
}

function getForm () {
    var persons = [];
    var fName = document.getElementById('name').value;
    var fResidence = document.getElementById('residence').value;
    var fHobby = document.getElementById('hobby').value;
    var fWork = document.getElementById('work').value;
    if(fName && fResidence && fHobby && fWork) {
        alert(`${fName} ${fResidence} ${fHobby} ${fWork}`);
    } else {
        alert('All fields are mandatory')
    }
}

var sendBtn = document.getElementById('formSendBtn')
sendBtn.addEventListener('click', getForm)