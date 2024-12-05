import { Fab, Tooltip } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import React from 'react'

function Add() {
    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)", md: 30 } }}>
                <Fab color="primary" aria-label='add'>
                    <AddIcon color='primary' />
                </Fab>
            </Tooltip>
        </>
    )
}

export default Add