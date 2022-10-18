const textarea = document.getElementById('textarea');

textarea.addEventListener('change', count);

function count() {
    const text = textarea.value;
    const words = text.split(' ');
    const characterCount = text.length;
    const wordCount = words.length;
    const sentenceCount = text.match(/[\w|\)][.?!]+(\s|$)/g).length;
    document.getElementById('character-count').innerHTML = characterCount;
    document.getElementById('word-count').innerHTML = wordCount;
    document.getElementById('sentence-count').innerHTML = sentenceCount;
}

