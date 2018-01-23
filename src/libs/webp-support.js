const WEBP_NAME = 'can_use_webp'

export function detectWebp () {
  if (typeof window === 'undefined') return
  if (!window.localStorage || typeof localStorage !== 'object') return
  if (!localStorage.getItem(WEBP_NAME) || (localStorage.getItem(WEBP_NAME) !==
      'available' && localStorage.getItem(WEBP_NAME) !== 'disable')) {
    var img = document.createElement('img')
    img.onload = function () {
      try {
        localStorage.setItem(WEBP_NAME, 'available')
      } catch (ex) {}
    }

    img.onerror = function () {
      try {
        localStorage.setItem(WEBP_NAME, 'disable')
      } catch (ex) {}
    }
    img.src =
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=='
  }
}

detectWebp()

export function isSupported (force = false) {
  if (force) {
    detectWebp()
  }
  return typeof window !== 'undefined' && !!window.localStorage && window.localStorage.getItem(WEBP_NAME) === 'available'
}

