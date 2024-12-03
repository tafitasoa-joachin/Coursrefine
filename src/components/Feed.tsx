import { Check, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function Feed() {
    return (
        <Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgColor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="/fjkldjfk.jpg"
                    alt="Image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae in maxime eveniet vero ratione perspiciatis ut temporibus. Voluptas necessitatibus fugiat sapiente perferendis at quisquam reprehenderit eum animi tempora accusantium.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed