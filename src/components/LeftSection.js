import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
export default function LeftSection() {
    return (
        <Box sx={{ pl: 15, pt: 20, m: 3, textDecoration: "bold", textAlign: 'left', width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" component="div" gutterBottom>
                Make your exam easier by solving previous year paper
            </Typography>
            <Typography variant='h5' component="div" sx={{ mt: 4, color: 'rgba(255, 254, 254, 0.83)' }}>
                It's about drive, it's about power
                We stay hungry, we devour
                Put in the work, put in the hours and take what's ours (ahoo)
            </Typography>
            <Button sx={{
                mt: 11, mr: 3, backgroundColor: 'white', textTransform: "revert", border: '1px solid rgba(134, 134, 134, 1)'
                , color: 'rgba(134, 134, 134, 1)'
            }} startIcon={<FileUploadIcon />} variant="contained">Upload</Button>
            <Button sx={{ mt: 11, backgroundColor: 'white', textTransform: "revert", border: '1px solid rgba(134, 134, 134, 1)', color: 'rgba(134, 134, 134, 1)' }} startIcon={<DownloadIcon />} variant="contained">Download</Button>
        </Box>
    );
}
