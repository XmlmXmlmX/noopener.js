(function () {
    var elements = document.querySelectorAll('[target="_blank"]');

    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('rel', 'noopener noreferrer');
    }
})();