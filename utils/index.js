export function removeChildren(container) {
    while (container.firstChild) { 
        container.removeChild(container.firstChild)
      }
}
export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2