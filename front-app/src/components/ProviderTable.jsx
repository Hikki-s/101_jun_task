import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material/';

const ProviderTable = ({providers}) => {
    return (
        <Box mt={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>№</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>ID</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>ID Региона</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Название</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {providers.map((provider, index) => (
                        <TableRow key={provider.id} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f5f5f5' }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{provider.id}</TableCell>
                            <TableCell>{provider.region_id}</TableCell>
                            <TableCell>{provider.name}</TableCell>
                            <TableCell>{provider.url_name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default ProviderTable;
