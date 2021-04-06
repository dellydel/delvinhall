
export default class {
    
    static getText() {
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
        if (selectedText.length) {
            alert(selectedText);
        }
    }

    static formatSelectedText(color) {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);

        let newNode = document.createElement('span');
        newNode.style.color = color;
        try {
            range.surroundContents(newNode);
        } catch (e) { alert(e) }
    }

    static makeParagraphLink() {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);
        let anchorTag = document.createElement('a');
        anchorTag.href = '';
        anchorTag.title = 'updated ' + new Date().toLocaleDateString();

        var el = range.commonAncestorContainer;

        el.parentNode.insertBefore(anchorTag, el);
        anchorTag.appendChild(el);
    }

    static makeSelectionLink() {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);

        let anchorTag = document.createElement('a');
        anchorTag.href = '';
        anchorTag.title = 'updated ' + new Date().toLocaleDateString();
        try {
            range.surroundContents(anchorTag);
        } catch (e) { alert(e) }
    }

    static formatText(text) {
        alert('text formatted: ' + text);
    }

    static init(options){
        window.onload = function() {
            document.querySelectorAll(options.selector).forEach(element => {
                element.addEventListener(options.event, () => {
                    let selectedText = "";
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
                    if (selectedText.length) {
                        alert(selectedText);
                    }
                })
            })
        }
    }
}

