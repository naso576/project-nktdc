import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useLoginStore from '../../store/mainStore';
import { useNavigate } from 'react-router-dom';


interface CopyrightProps {
    [key: string]: any;
}

function Copyright(props: CopyrightProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://nasosolutions.com/">
                Nasosolutions
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const LoginPage: React.FC = ()=>{
interface FormDataShape {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}
const navigate = useNavigate();
const loginStore = useLoginStore((state) => state.login);
const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
const username = useLoginStore((state) => state.username);
const [email, setEmail] = React.useState<string>('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginStore(data.get('email') as string);
    setEmail(data.get('email') as string);
    const formData: FormDataShape = {
        email: data.get('email'),
        password: data.get('password'),
    };
    console.log(formData);

  if(    validateLogin(formData.email as string, formData.password as string))
  {
    console.log('Login successful!');
    navigate('/')
    // Redirect to home page or perform any other action
  } else {
    alert('Login failed!');
    // Show error message or perform any other action
  }
};

const validateLogin = (email: string, password: string): boolean => {
  if (email === 'admin' && password === 'admin') {
    loginStore(email);
    return true;
}
else return false;
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid 
        
          
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.neutral : t.palette.neutral[800],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid  xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth 
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 1, mb: 1, mr: 1 }}
              >
                Sign In
              </Button>
              <Button
                type="button"
                
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Grid container>
                <Grid  xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid >
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;