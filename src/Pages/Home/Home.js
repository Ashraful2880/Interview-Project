import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import useProducts from '../../Context/UseProducts/UseProducts';
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Home = () => {
    const [products]=useProducts();
    const [visible,setVisible]=useState(10);
    const [search,setSearch]=useState("");

    const showMoreItems=()=>{
        setVisible((prevValue)=>prevValue+10);
    }
    const handleChange=event=>{
        setSearch(event.target.value);
        console.log(search);
    }
    return (
        <Container>
            <Paper component="form" 
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, margin:'auto', marginTop:'20px',marginBottom:'20px' }}>
                {<InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Products"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Search Products' }}
                />}
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>            
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>Brand Name</TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>Age</TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>rating</TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>Special Price</TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: 18 }}>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.docs?.slice(0,visible).map((product) => (
                        <TableRow key={product._id}>
                            <TableCell component="th" scope="row">
                                {product.name.en}
                            </TableCell>
                            <TableCell>{product.brand}</TableCell>
                            <TableCell>{product.age}</TableCell>
                            <TableCell>{product.rating}</TableCell>
                            <TableCell>{product.specialPrice}</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" sx={{marginTop:'25px'}} onClick={showMoreItems}>Load More</Button>
        </Container>
    );
};

export default Home;