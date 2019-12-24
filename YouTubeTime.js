function createNewEl() {
    var element = document.querySelector('.newTime')
    const magEl = document.querySelector('.ytp-time-duration')
    var span = document.createElement('span')
    firstParagraph = text.firstElementChild
    if (!element) {
        magEl.insertBefore(span, firstParagraph)
        span.setAttribute('class', 'newTime')
    } else { 
        element.remove() 
        magEl.insertBefore(span, firstParagraph)
        span.setAttribute('class', 'newTime')
    }
}

function reCalcDur() {
    createNewEl()
    var seconds = document.querySelector('.ytp-time-duration').innerText.split(':').reverse().reduce((ss, n, i) => +ss + n * (60 ** i))
    var mult = document.querySelector('.vsc-controller').shadowRoot.children[1].innerText
    seconds /= mult
    document.querySelector('.newTime').innerText += ` (${toHhMmSs(seconds | 0)})`
}

function toHhMmSs(ss) {
    var left = ss % 3600
    var hours = (ss - left) / 3600
    var seconds = left % 60
    var minutes = (left - seconds) / 60
    // return {hours, minutes, seconds}
    if (hours) return hours + ':' + minutes.toString().padStart(2, 0) + ':' + seconds.toString().padStart(2, 0)
    return minutes + ':' + seconds.toString().padStart(2, 0)
}

document.body.onkeydown = function (event) {
    if (event.key == 'b') reCalcDur()
}
