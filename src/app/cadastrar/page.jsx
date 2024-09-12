"use client";
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField, VStack, Heading, Image } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

export default function CadastroCurso() {
    const [formData, setFormData] = useState({
        imagem: '',
        nome: '',
        preco: '',
        cargaHoraria: '',
        precoComDesconto: '',
        conteudo: '',
    });

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Curso cadastrado:', formData);
        router.push("/")
        // Aqui você pode adicionar a lógica para enviar os dados para um backend
    };

    return (
        <Box p="6" maxW="container.md" mx="auto" bg="gray.50" borderRadius="md" boxShadow="md">
            <Heading as="h2" mb="6" fontSize="2xl" textAlign="center" color="teal.600">
                Cadastro de Curso
            </Heading>

            <form onSubmit={handleSubmit}>
                <VStack spacing="4" align="stretch">
                    <FormControl isRequired>
                        <FormLabel htmlFor="imagem">Imagem URL</FormLabel>
                        <Input
                            id="imagem"
                            name="imagem"
                            type="url"
                            value={formData.imagem}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="nome">Nome do Curso</FormLabel>
                        <Input
                            id="nome"
                            name="nome"
                            type="text"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="preco">Preço</FormLabel>
                        <NumberInput
                            id="preco"
                            name="preco"
                            value={formData.preco}
                            onChange={(value) => setFormData({ ...formData, preco: value })}
                            precision={2}
                            step={0.01}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="cargaHoraria">Carga Horária</FormLabel>
                        <Input
                            id="cargaHoraria"
                            name="cargaHoraria"
                            type="text"
                            value={formData.cargaHoraria}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="precoComDesconto">Preço com Desconto</FormLabel>
                        <NumberInput
                            id="precoComDesconto"
                            name="precoComDesconto"
                            value={formData.precoComDesconto}
                            onChange={(value) => setFormData({ ...formData, precoComDesconto: value })}
                            precision={2}
                            step={0.01}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="conteudo">Conteúdo (Descrição)</FormLabel>
                        <Textarea
                            id="conteudo"
                            name="conteudo"
                            type="text"
                            value={formData.conteudo}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" type="submit">
                        Cadastrar Curso
                    </Button>
                </VStack>
            </form>

            {/* Exemplo de visualização da imagem do curso */}
            {formData.imagem && (
                <Box mt="6" textAlign="center">
                    <Image src={formData.imagem} alt="Imagem do Curso" boxSize="200px" objectFit="cover" borderRadius="md" />
                </Box>
            )}
        </Box>
    );
}
