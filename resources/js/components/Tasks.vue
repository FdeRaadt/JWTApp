<template>
    <div>
        <h3 class="text-center">All Tasks</h3>
        
        <table class="table table-bordered text-white">
            <thead>
                <tr>
                    <th>taskID</th>
                    <th>Host ID</th>
                    <th>LobbyName</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.title }} </td>
                    <td>{{ task.description }}</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Tasks Component mounted')
        },
    
        data() {
            return {
                tasks: []
            }
        },
        created() {
            this.axios
                .get('api/tasks')
                .then(response => {
                    console.log(response);
                    this.tasks = response.data.tasks;
                });
        },
    }
</script>