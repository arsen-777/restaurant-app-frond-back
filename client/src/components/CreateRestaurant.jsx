import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CreateRestaurant() {
const [nameInputValue, setNameInputValue] = useState('')
const [descInputValue, setDescInputValue] = useState('')

const createRestaurantSubmit = async(ev) =>{
    ev.preventDefault()
    if(nameInputValue && descInputValue){
        try{
            const newRest = {name:nameInputValue,description:descInputValue }
            const res = await fetch(`http://localhost:9000/restaurants`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify(newRest)
            })
            const data = await res.json()
            setNameInputValue('')
            setDescInputValue('')
        
        }catch(err){
            console.log(err);
        }
    }
    
}
  return (    
    <form onSubmit={createRestaurantSubmit}>
        <Grid container spacing={2} p={4}>
            <Stack spacing={2} direction="column" >
                <TextField 
                    value={nameInputValue}  
                    onChange={(e)=>setNameInputValue(e.target.value)} 
                    id="standard-basic" 
                    label="Res. Name" 
                    variant="standard" 
                />
                <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value = {descInputValue}
                onChange={(e)=>setDescInputValue(e.target.value)}
                />
                <Button  type='submit' variant="contained" disableElevation>
                    Add
                </Button>
            </Stack>
        </Grid>
    </form>
  )
}
