import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import React from 'react'

export const NewEntry = () => {
  return (
    <>
      <Button>
        
      </Button>
      <TextField 
        fullWidth
        sx={{ marginTop:2, marginBottom:1 }}
        placeholder="Nueva entrada"
        autoFocus
        multiline
        label="Nueva entrada"
        helperText='Ingrese un valor'
      />
      <Box display='flex' justifyContent='space-between'>
        <Button
          variant='text'
        >
          Cancelar
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          endIcon={ <SaveOutlinedIcon /> }
        >
          Guardar
        </Button>
      </Box>
      
    </>
  )
}
