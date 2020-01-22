// auth routes
import Login from './components/Login.vue';
import Register from './components/Register.vue';

// how to logout route?

// tasksRoutes
import Tasks from './components/Tasks.vue';
import CreateTask from './components/CreateTask.vue';
import ShowTask from './components/ShowTask.vue';



export const routes = [

    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
   
    // tasks routes
    {
        name: 'Tasks',
        path: '/tasks',
        component: Tasks
    },
    // {
    //     name: 'CreateTask',
    //     path: '/createTask',
    //     component: CreateTask
    // },
    // {
    //     name: 'ShowTask',
    //     path: '/showtask',
    //     component: ShowTask
    // },



];  