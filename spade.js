
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

			//all of the words where a spade should be called a spade
            var replacedText = text.replace(/alt-right/gi, 'neo nazi');
			var replacedText = replacedText.replace(/alternative right/gi, 'neo nazi');
			var replacedText = replacedText.replace(/identitarian/gi, 'neo nazi');


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
