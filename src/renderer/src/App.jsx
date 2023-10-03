import { useState } from 'react'
import FileInput from './components/FileInput'
import DisplayTIF from './components/DisplayTIF'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileSelected = (file) => {
    setSelectedFile(file)
  }

  return (
    <div>
      {selectedFile && <DisplayTIF imageUrl={URL.createObjectURL(selectedFile)} />}
      <div style={{ textAlignLast: 'center', margin: 'auto' }}>
        <FileInput onFileSelected={handleFileSelected} />
      </div>
    </div>
  )
}

export default App
