import {
    Container,
    Typography,
    TextField,
    Button,
  } from "@mui/material";
import { makeStyles, withStyles } from 'tss-react/mui'
import React, {useState} from 'react';
import { useForm } from "react-hook-form";


// const Usestyles = makeStyles((theme: any) => ({
//     heading: {
//       textAlign: "center",
//       margin: theme.spacing(1, 0, 4),
//     },
//     submitButton: {
//       marginTop: theme.spacing(4),
//     },
// }));
//vdff

function Login(){
    // const {heading, submitButton} = Usestyles();
    const [name, setName] = useState<string>();
    return (
        <Container maxWidth='xs'>
       <Typography variant="h4">
        Log In 
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          label="UserName"
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          fullWidth
          required
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Log In
        </Button>
        </form>
        </Container>
    );
    
};

export default Login;