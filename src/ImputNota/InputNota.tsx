import React from 'react';
import './ImputNota.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ImputNota (){

const [Nota, SetNota] = React.useState("")

    function ObtenerValorNota (trigger: React.ChangeEvent<HTMLInputElement>){
        SetNota(trigger.target.value);
        console.log(Nota);
    }

    function GuardarNota (){
        const NuevaNota = Nota;
        console.log(`esta es la nota guardada ${NuevaNota}`)
    }

    return(
        <div>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                onChange={ObtenerValorNota}
            />
             <Button onClick={GuardarNota} variant="outlined">Guardar</Button>
        </div>
    )
}

export default ImputNota;