import { body, param } from "express-validator"

export const produtoValidator = [
    body('nome').isString().withMessage("Nome é obrigatório"),
    body('preco').isNumeric().withMessage("Preco é obrigatório"),
    body('descricao').isString().withMessage("Descrição é obrigatória")
]

export const produtoUptadeValidator = [
    param('id').isInt().withMessage("ID é obrigatório"),
    body('nome').isString().withMessage("Nome é obrigatório"),
    body('preco').isNumeric().withMessage("Preco é obrigatório"),
    body('descricao').isString().withMessage("Descrição é obrigatória")
]

export const produtoIdValidator = [
    param('id').isInt().withMessage("ID é obrigatório")
]