import React, { Component } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default class FetchData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
        };
    }

    componentDidMount() {

        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const data = res.data;
                setTimeout(() => {
                    this.setState({ data, loading: false })
                }, 500)

            }, (error) => {
                console.log(error);
        });
    }


    render() {
        return (
            <Container maxWidth="xs" >
                {this.state.loading ? 
                
                <Box sx={{ display: 'block'}}>
                    <CircularProgress />
                </Box> 
                :
                 <Container maxWidth='lg'>
                    <TableContainer  component={Paper} variant="outlined" square >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Username</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((person) => (
                                    <TableRow key={person.id}>
                                        <TableCell align="center">{person.username}</TableCell>
                                        <TableCell align="center">{person.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>}
            </Container>
        )
    }
}
