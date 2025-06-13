import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function RegistreraForm(){

    return(
        <>
        <Container maxWidth="sm" style={{marginTop:'40px'}}>

        <Stack spacing={2} direction="column">

        <TextField id="outlined" label="Namn" defaultValue=""/>
        <TextField id="outlined" label="E-mail" defaultValue=""/>

        <Button variant="contained">Registrera</Button>



        <Alert severity="success">Kursen är registrerad.</Alert>

        </Stack>
        </Container>

        </>
    )

}