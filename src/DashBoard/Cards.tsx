import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, CardHeader, Grid, makeStyles } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const card = (
    <React.Fragment >
        {/* <CardHeader
            subheader='start date:12/07/2021'
            action={
                <div style={{ height: 20, width: 20, backgroundColor: 'orange', borderRadius: '100%' }}></div>
            }
        /> */}
        <CardContent >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 14, color: 'inherit' }} color="text.secondary" gutterBottom>
                    start date:12/07/2021
                </Typography>
                <div style={{ height: 20, width: 20, backgroundColor: 'orange', borderRadius: '100%' }}></div>
            </div>

            <Typography variant="h4" component="div" sx={{ mb: 1.5, mt: 1 }} >
                12
            </Typography>

            <Typography variant="body2">
                Mapping of Make in progress
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: 'center', display: 'block', mb: 2 }} >
            <Button size="small"
                variant='outlined'
                color='inherit'
                sx={{ textTransform: 'none', p: 1, pl: 1.5 }}
            >
                Resume Working  <ArrowForwardIcon fontSize='small' sx={{ ml: 1 }} />
            </Button>
        </CardActions>
    </React.Fragment >
);

export default function Cards() {
    return (
        <Box sx={{ minWidth: 275, textAlign: 'center', mb: 4 }} >
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={4}>
                <Grid item>
                    <Card sx={{ width: 350, backgroundColor: '#050c6e', color: 'white' }}>{card}</Card>
                </Grid>
                <Grid item>
                    <Card sx={{ width: 350, backgroundColor: '#056e52', color: 'white' }}>{card}</Card>
                </Grid>
                <Grid item>
                    <Card sx={{ width: 350, backgroundColor: '#5e056e', color: 'white' }}>{card}</Card>
                </Grid>
            </Grid>
        </Box>
    );
}