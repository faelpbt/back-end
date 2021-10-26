import  express  from 'express'

const app = express()

app.get('/users', (resquest, response) => {
    return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users', (resquest, response) => {
    return response.json({ message: 'criando usuário' })
})

app.put('/users', (resquest, response) => {
    return response.json({ message: 'atualizando usuário' })
})

app.delete('/users', (resquest, response) => {
    return response.json({ message: 'excluindo usuário' })
})

app.listen('3333', () => {
    console.log('Back-end Started!')
})