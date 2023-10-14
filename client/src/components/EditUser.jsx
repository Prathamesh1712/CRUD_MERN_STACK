import { FormGroup, FormControl, InputLabel, Input,Button, styled, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import {getUser,editUser} from '../service/api';
import { useNavigate,useParams } from 'react-router-dom';
const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditUser=()=>{

    const [user, setUser]=useState(initialValue);
    const { name, username, email, phone } = user;
    let navigate = useNavigate();
    const { id } = useParams();
    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})

    }
    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }
    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }



    return(
        <Container injectFirst>
        <Typography variant="h4">Edit Information</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <Button variant="contained" color="primary" onClick={() => editUserDetails()} >Edit User</Button>
        </FormControl>
    </Container>
    )
}

export default EditUser;