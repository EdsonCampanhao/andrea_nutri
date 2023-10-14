import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Article.css'

export default function Article(props) {


    return (


        <Card sx={{ maxWidth: 345 }} className='article' >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {props.intro}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}