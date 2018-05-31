const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

require('update-electron-app')({
  repo: 'myronwoody/Password-Box',
  updateInterval: '5 minutes',
  logger: require('electron-log')
})


let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    height: 920,
    width: 1350,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: "#D6D8DC",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,
    autoHideMenuBar: true

  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})
