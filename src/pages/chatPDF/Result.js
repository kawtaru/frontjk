import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const FormLayoutsResult = ({result }) => {
 
  return (
    <Card>
        <CardHeader title='Answer' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div dangerouslySetInnerHTML={{ __html: result }} />
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
};

export default FormLayoutsResult;
