let isMobile = false
let isFirefox = false
let isSafari = false

// check mobile
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isMobile = true
}

// check firefox
if (/Firefox/i.test(navigator.userAgent)) {
  isFirefox = true
}

// check safari
if (/^((?!Chrome|Android).)*Safari/i.test(navigator.userAgent)) {
  isSafari = true
}

export default class Misc {
  static isMobile = isMobile
  static isFirefox = isFirefox
  static isSafari = (window as any).safari !== undefined || isSafari
  static isWalletConnect = isFirefox || this.isSafari
}
