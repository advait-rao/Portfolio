import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import profilePicture from '../media/pfp.png';

const AboutCard = (props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '2vh',
                display: 'inline-flex',
                backgroundColor: '#101B2B',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={0}>
                <Grid
                    container
                    xs
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    padding='1rem'
                >
                    <img className='av' src={profilePicture} alt='me' />
                </Grid>
                <Grid
                    container
                    xs
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    padding='1rem'
                >
                    <Paper
                        elevation={0}
                        sx={{
                            width: 'auto',
                            color: '#FFFFFF',
                            backgroundColor: 'inherit',
                            paddingRight: '1rem',
                        }}
                    >
                        <Typography
                            variant={'subtitle1'}
                            fontFamily={'JetBrains Mono'}
                        >
                            <p>
                                Kia ora! <br />
                                I'm Advait! It's pronounced{' '}
                                <b className='accent'>ād–vay-t</b>.
                            </p>
                            <p>
                                I'm a Graduate Software Engineer at{' '}
                                <b className='accent'>Xero</b>, where I work on
                                the backend of Subscriptions and Billing for the
                                Xero product.
                            </p>
                            <p>
                                I enjoy playing guitar, writing{' '}
                                <a
                                    href='https://soundcloud.com/advait_rao'
                                    className='link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <b>songs</b>
                                </a>
                                , and <s>losing at</s> Chess. I also enjoy
                                reading about history, science, wildlife and
                                sci-fi.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

AboutCard.propTypes = {};

export default AboutCard;
