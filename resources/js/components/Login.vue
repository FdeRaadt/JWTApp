<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" name="email" class="form-control" v-model="user.email">
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" class="form-control" v-model="user.password">
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        
        methods: {
            login() {
                this.axios
                    .post('api/login', {
                        email: this.user.email,
                        password: this.user.password
                    })

                    // 
                    .then(response => {
                        console.log(response),
                            this.$router.push({
                                name: 'tasks'
                            })
                    })  
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }

</script>
