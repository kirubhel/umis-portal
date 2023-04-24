import React from 'react';
import { makeStyles } from '@mui/styles';
import {

    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

import { LoginForm } from "../components/login-form";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import { Height } from '@mui/icons-material';


const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(/assets/loginbg.jpg)`,
        backgroundSize: "100% 100%",
        '@media (max-width: 600px)': {
            height: "auto"
        }
    },
    card: {
        minWidth: "43%",
        height:'100%',
        display: "flex",
        
        '@media (max-width: 600px)': {
            minWidth: "90%",flexDirection: "column",height:'100vh'
        }
    },
    media: {
        backgroundColor: "#007AFE",
        width: "35%",
        '@media (max-width: 600px)': {
            width: "100%",
            height:'20px'
        }
    },
    content: {
        width: "65%",
        
        '@media (max-width: 600px)': {
            width: "100%",
            padding:0,
            marginTop:'20px'
        }
    },
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        paddingLeft: "130px",
        '@media (max-width: 600px)': {
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
        }
    },

    logo: {
        marginBottom: "20px",
        marginTop: "50px",
        width: "170px",
        '@media (max-width: 600px)': {
            width: "120px",
            marginTop: "20px",
            marginBottom: "10px",
        }
    },
    welcome: {
        fontWeight: "bold",
        marginTop: '15px',
        '@media (max-width: 600px)': {
            fontSize: "1.5rem",
            marginTop: "10px",
            marginBottom: "5px",
        }
    },
    subtitle: {
        '@media (max-width: 600px)': {
            fontSize: "0.9rem"
        }
    },
    line: {
        width: "55%",
        height: "7px",
        backgroundColor: "primary.main",
        borderRadius: "50px",
        marginTop: "10px",
        marginBottom: "15px",
        '@media (max-width: 600px)': {
            width: "90%",
            marginTop: "5px",
            marginBottom: "10px",
            height: "4px"
        }
    },
    logos:{
        width:'100px',
        '@media (max-width: 600px)': {
            width: "60px",

        }
    }
});

function LoginPage() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia className={classes.media}>

                    <img src='/assets/loginbackground.png' width="100%" height="100%" />

                </CardMedia>
                <CardContent className={classes.content}>
                    <Box className={classes.box}>

                        <img
                            src="/assets/UMIS_logo.svg"
                            alt="umis logo"
                            className={classes.logo}
                        />

                        <Typography variant="h3" className={classes.welcome}>
                            Welcome back
                        </Typography>
                        <Typography variant="body1" className={`${classes.subtitle} text-neutral`} >
                            Sign in to your account to continue.
                        </Typography>
                        <Box
                            

                            sx={{
                                width: "75%",
                                height: "7px",
                                backgroundColor: "primary.main",
                                borderRadius: "50px",
                                marginTop: "20px",
                                marginLeft:"-150px",
                                marginBottom: "45px",
                                '@media (max-width: 600px)': {
           
                                    marginLeft: "0px",
                                }
                            }}
                        />

                        <LoginForm />





                        <div
                            style={{
                                display: "flex",
                                columnGap: "20px",
                                position: "absolute",                               
                                bottom: "0px",
                            }}
                        >

                            <img src="/assets/mowe_logo.svg" className={classes.logos} alt="Intaps"  />
                            <img src="/assets/Daf_Tech_Logo.svg" alt="Daf Tech" className={classes.logos} />
                            <img src="/assets/intaps_Logo.svg" alt="Intaps" className={classes.logos}  />
                            <img src="/assets/Yaybe_Logo.svg" alt="Yaybe" style={{width:'60px'}} />

                        </div>





                    </Box>

                </CardContent>

            </Card>


        </div>
    );
}

export default LoginPage;
