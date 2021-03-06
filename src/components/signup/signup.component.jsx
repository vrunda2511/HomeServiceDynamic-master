import React,{useState} from "react"
import { useHistory} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const eye = <FontAwesomeIcon icon={faEye} />;

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
    const history = useHistory();
    const classes = useStyles();
    const [firstName,setfistname]=useState();
    const [lastName,setlastname]=useState();
    const [gender,setgender]=useState();
    const [mobileno,setmobileno]=useState();
    const [address,setaddres]=useState();
    const [area,setarea]=useState();
    const [city,setcity]=useState();
    const [email,setemail]=useState();

    const [password,setpassword]=useState(false);
    const [cpassword,setcpassword]=useState();

 
    function handleSubmit(event){
        
        if(firstName==null || lastName==null||gender==null||mobileno==null||address==null||area==null||city==null||email==null||password==null||cpassword==null){
            toast.error(' All Field are required!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else if(password!==cpassword){
            toast.error(' Your Password Does not matched!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            // alert(firstName+lastName+gender+mobileno+address+area+city+email+password+cpassword)
             var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
            var urlencoded = new URLSearchParams();
            urlencoded.append("firstname", firstName);
            urlencoded.append("lastname", lastName);
            urlencoded.append("gender", gender);
            urlencoded.append("mobile_no", mobileno);
            urlencoded.append("email", email);
            urlencoded.append("password", password);
            urlencoded.append("address", address);
            urlencoded.append("image", "");
            urlencoded.append("area", area);
            urlencoded.append("city", city);
    
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };
    
            fetch("http://localhost:4000/api/Signup", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result.status)
                if(result.status==="Success"){
                    toast.success('You have Succesfully Registerd!! ', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                       history.push("/signin")
                }
            
            })
            .catch(error => console.log('error', error));
                }
    }


    return(
        <div>
         <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                 Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    onChange={e => setfistname(e.target.value)}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    onChange={e => setlastname(e.target.value)}
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    autoComplete="gender"
                    name="Gender"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={e => setgender(e.target.value)}
                    id="gender"
                    label="Gender"
                />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="mno"
                    type="number"
                    label="Mobile No"
                    name="mno"
                    onChange={e => setmobileno(e.target.value)}
                    autoComplete="mno"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    rows={5}
                    id="Address"
                    label="Address"
                    name="Address"
                    onChange={e => setaddres(e.target.value)}
                    autoComplete="Address"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="area"
                    name="Area"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={e => setarea(e.target.value)}
                    id="Area"
                    label="Area"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
           

                   
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="City"
                    label="City"
                    name="city"
                    onChange={e => setcity(e.target.value)}
                    autoComplete="City"/>
                      
                
                </Grid>

                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={e => setemail(e.target.value)}
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={6} className="pass-wrapper">
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                   
                    label="Password"
                    type="password"
                    id="password"
                    onChange={e => setpassword(e.target.value)}
                   
                />
                  {/* <i>{eye}</i> */}
                </Grid>
                <Grid item xs={6} className="pass-wrapper">
                
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                   
                    label="Confirm Password"
                    type="password"
                   
                    onChange={e => setcpassword(e.target.value)}
                  
                />

                {/* <i>{eye}</i> */}
              
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={(e)=>{e.preventDefault();register(firstName,lastName,gender,mobileno,address,area,city,email,password,cpassword)}}
            >
                Sign Up
            </Button>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
        </div>
    )
  }