let selector = '.images > img'
let n
let size = $(selector).length

initSlidesStatus(() => {
  setInterval(() => {
    slidesPlay()
  }, 2000)
})

function slidesPlay() {
  makeStatus(getImage(n), 'leave')
    .one('transitionend', (e) => {
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  makeStatus(getImage(n < size ? n + 1 : 1), 'current')
  n < size ? n += 1 : n = 1
}

function getImage(n){
  return $(`${selector}:nth-child(${n})`)
}

function initSlidesStatus(cb) {
  n = 1
  makeStatus(getImage(n), 'current')
      .siblings().addClass('enter')
  cb && cb()
}

function makeStatus($node, status) {
  return $node.removeClass('current enter leave').addClass(status)
}
