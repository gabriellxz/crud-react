import React, {useRef} from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
`;

const Input = styled.input`
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 5px
`;

const Label = styled.label``

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
    height: 42px;
`

const Form = ({onEdit, setOnEdit, getUsers}) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.curso.value = onEdit.curso;
            user.data_nascimento.value = onEdit.data_nascimento;
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.curso.value ||
            !user.data_nascimento.value
        ) {
           return toast.warn("Preencha todos os dados!")
        }

        if (onEdit) {
            await axios 
                .put('http://localhost:8080/' + onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    curso: user.curso.value,
                    data_nascimento: user.data_nascimento.value
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
        } else {
            await axios
                .post('http://localhost:8080', {
                    nome: user.nome.value,
                    email: user.email.value,
                    curso: user.curso.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
        }

        user.nome.value = "";
        user.email.value = "";
        user.curso.value = "";
        user.data_nascimento.value = "";

        setOnEdit(null);
        getUsers();
    }

    return(
        <>
            <FormContainer ref={ref} onSubmit={handleSubmit}>
                <InputArea>
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder='Digite seu nome'/>
                </InputArea>
                <InputArea>
                    <Label>E-mail</Label>
                    <Input type="email" name="email" placeholder='Digite seu e-mail'/>
                </InputArea>
                <InputArea>
                    <Label>Curso</Label>
                    <Input type="text" name="curso" placeholder='Digite seu curso'/>
                </InputArea>
                <InputArea>
                    <Label>Data de nascimento</Label>
                    <Input type="date" name="data_nascimento"/>
                </InputArea>

                <Button type="submit">Register</Button>
            </FormContainer>
        </>
    )
}

export default Form;