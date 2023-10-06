const { ipcRenderer } = require('electron')

const CloseButton = () => {
  const handleCloseApp = () => {
    ipcRenderer.invoke('close-me')
  }

  return (
    <div>
      <button style={{ padding: '0px 6px' }} onClick={handleCloseApp}>
        Close App
      </button>
    </div>
  )
}

export default CloseButton
