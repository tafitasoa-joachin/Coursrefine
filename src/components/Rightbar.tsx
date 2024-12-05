import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" width={300} mt={2}>
                <Typography variant='h6' fontWeight={100}>
                    Online Friends
                </Typography>

                <AvatarGroup max={6}>
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="User" src="" />
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                </AvatarGroup>

                <Typography variant='h6' fontWeight={100}>
                    Latest Photos
                </Typography>

                <ImageList cols={2} rowHeight={100} gap={3}>
                    <ImageListItem>
                        <img
                            src="/static/images/1.jpg"
                            alt=""
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="/static/images/2.jpg"
                            alt=""
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="/static/images/3.jpg"
                            alt=""
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="/static/images/4.jpg"
                            alt=""
                            loading='lazy'
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Remy" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" - I'll be in your neightborhood doing errands this-"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Remy" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {"- I'll be in your neightborhood doing errands this-"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar