import * as React from 'react';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useProducts from '../../Context/UseProducts/UseProducts';
import {Container} from '@mui/material';
import ReactPaginate from 'react-paginate';
import './Products.css';

const Products = () => {
    const [products]=useProducts();
    const [pageNumber,setPageNumber]=useState(0);

    const productsPerPage=10;
    const pagesVisited=pageNumber*productsPerPage;

    const displayProducts=products?.docs?.slice(pagesVisited, pagesVisited+productsPerPage)
        .map((product) => (
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
        ))
        const pageCount=Math.ceil(products?.docs?.length/productsPerPage);
        const changePage=({selected})=>{
            setPageNumber(selected)
        };
    return (
        <Container>
            <h1>Our Products</h1>
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
                    {displayProducts}                       
                    </TableBody>
                </Table>
            </TableContainer>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </Container>
    );
};

export default Products;