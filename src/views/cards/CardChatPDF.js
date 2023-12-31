// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardChatPDF= () => {
  return (
    <Link href='/chatPDF'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#A367B1', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            ChatPDF
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            By uploading your PDF file to the platform, Our ChatPDF ensures summary and potential questions you could ask, to help you learn more from your document.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardChatPDF
