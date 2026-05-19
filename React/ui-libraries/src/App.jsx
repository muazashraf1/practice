import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




function App() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>


      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
    </div>
  )
}

export default App