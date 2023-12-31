// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import { useState } from 'react'

const FormLayoutsChatPDF = ({ onCheck, loading, result }) => {
  const [text, setText] = useState('')
  const [question, setQuestion] = useState('')
  const [pdfUrl, setPdfUrl] = useState(null)

  const getTextFromPdf = event => {
    var formData = new FormData()
    formData.append('file', event.target.files[0])
    axios
      .post('http://localhost:8000/uploadpdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        setText(res.data.text)
        setPdfUrl(URL.createObjectURL(event.target.files[0])) // Set the PDF URL for display
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const composeRequest = () => {
    onCheck(`Use this text '${text}' to answer this question '${question}'`)
  }

  return (
    <Card>
      <CardHeader title='Upload your PDF file to the platform!' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <input
                accept='application/pdf'
                style={{ display: 'none' }}
                id='openai-button-file'
                type='file'
                onChange={file => getTextFromPdf(file)}
              />

              <label htmlFor='openai-button-file'>
                <Button
                  variant='raised'
                  component='span'
                  sx={{
                    backgroundColor: '#4CAF50', // Set your desired background color
                    color: 'white', // Set your desired text color
                    padding: '20px', // Add padding for a larger button
                    width: '100%', // Set the button to 100% width
                    textAlign: 'center', // Center the text
                    display: 'block', // Display as block to take up full width
                    border: '2px dashed #ffffff', // Add a dashed border for drag-and-drop appearance
                    cursor: 'pointer', // Change cursor on hover
                    '&:hover': {
                      backgroundColor: '#B6D8F2' // Set your desired background color on hover
                    }
                  }}
                >
                  Upload PDF
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              {pdfUrl && (
                <div style={{ width: '100%', height: '100vh' }}>
                  <iframe title='PDF Viewer' src={pdfUrl}type='application/pdf' style={{ width: '100%', height: '100%' }} />
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={2}
                label='Question'
                placeholder='Give me your question'
                value={question}
                onChange={event => setQuestion(event.target.value)}
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' onClick={() => composeRequest()} variant='contained' size='large'>
                Submit
              </Button>
              {loading ? ' loading ...' : ''}
            </Grid>
          </Grid>
        </form>
      </CardContent>
      
      
    </Card>
    
  )
}

export default FormLayoutsChatPDF
