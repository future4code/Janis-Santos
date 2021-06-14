import { app } from "./app"
import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/login'
import { getAllUsers } from "./controller/getAllUsers"

app.post('/user/signup', signup)
app.post('/user/login', login)
app.post('/user/all', getAllUsers)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)



