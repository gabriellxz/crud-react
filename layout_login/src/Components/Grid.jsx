import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px:
    box-shadow: 0px 0px 5px #ccc;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
    color: black;
`;

export const Thead = styled.thead``
export const Tr = styled.tr``
export const Tbody = styled.tbody``

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && 'display: none'}
    }
`

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
    width: ${(props) => (props.width ? props.width : 'auto')};

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && 'display:none'}
    }
`;


const Grid = ({users, setUsers,  setOnEdit}) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios 
            .delete('http://localhost:8080/' + id)
            .then(({data}) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({data}) => toast.error(data));

        setOnEdit(null);
    }

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyweb>Curso</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width='30%'>{item.nome}</Td>
                        <Td width='30%'>{item.email}</Td>
                        <Td width='20%' onlyweb>{item.curso}</Td>
                        <Td alignCenter width='5%'>
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width='5%'>
                            <FaTrash onClick={() => handleDelete(item.id)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid;