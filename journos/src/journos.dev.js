function showPopup() {
    alert('testing');
}

function getText() {
    var selectedText = getSelectedText();
    if (selectedText.length) {
        alert(selectedText);
    }
}

function formatSelectedText(color) {
    var selectedText = window.getSelection();
    let range = selectedText.getRangeAt(0);

    let newNode = document.createElement('span');
    newNode.style.color = color;
    try {
        range.surroundContents(newNode);
    } catch (e) { alert(e) }
}

function makeParagraphLink() {
    var selectedText = window.getSelection();
    let range = selectedText.getRangeAt(0);
    let anchorTag = document.createElement('a');
    anchorTag.href = '';
    anchorTag.title = 'updated ' + new Date().toLocaleDateString();

    var el = range.commonAncestorContainer;

    el.parentNode.insertBefore(anchorTag, el);
    anchorTag.appendChild(el);
    //el.classList.add('challengeLink');
}

function makeSelectionLink() {
    var selectedText = window.getSelection();
   let range = selectedText.getRangeAt(0);

    let anchorTag = document.createElement('a');
    anchorTag.href = '';
    anchorTag.title = 'updated ' + new Date().toLocaleDateString();
    try {
        range.surroundContents(anchorTag);
    } catch (e) { alert(e) }
}

function formatText(text) {
    alert('text formatted: ' + text);
}

function getSelectedText() {
    var selectedText = ""
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    else if (document.selection) {
        selectedText =
            document.selection.createRange().text;
    }
    return selectedText;
}
