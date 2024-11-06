const {z} = require("zod")

const validarNascimento = (data) => {
    const hoje = new Date();
    return data <= hoje; 
};


const usuarioSchema = z.object({
    nome: z.string({message: "Campo obrigatório."}).min(5, "Deve ter no mínimo 05 caracteres."),
    email: z.string({message: "Campo obrigatório."}).email("Deve preencher um e-mail válido."),
    senha: z.string({message: "Campo obrigatório"}).min(6, "Deve ter no mínimo 06 caracteres."),
    cpf: z.string({message: "Campo obrigatório"}).min(11, "Deve ter no mínomo 11 caracteres."),
    nascimento: z.string()
        .transform((nascimento) => new Date(nascimento)) 
        .refine(validarNascimento, { message: "A data de nascimento não pode ser uma data futura." })
});

module.exports = usuarioSchema