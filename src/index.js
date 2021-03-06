const express = require('express')

const app = express()

// app.get('/', (request, response) => {
//    return response.json({ message: 'E aee Isra !!! - Fundamentos Node JS' })
// })

app.get('/courses', (request, response) => {
   return response.json({ courses: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'] })
})

app.post('/courses', (request, response) => {
   return response.json({ courses: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5'] })
})

app.put('/courses/:id', (request, response) => {
   return response.json({ courses: ['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5'] })
})

app.patch('/courses/:id', (request, response) => {
   return response.json({ courses: ['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4', 'Curso 5'] })
})

app.delete('/courses/:id', (request, response) => {
   return response.json({ courses: ['Curso 6', 'Curso 7', 'Curso 4', 'Curso 5'] })
})

app.listen(3333)