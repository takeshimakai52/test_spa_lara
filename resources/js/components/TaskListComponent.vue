<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.title }}</td>
                <td>{{ task.content }}</td>
                <td>{{ task.person_in_charge }}</td>
                <td>
                    <router-link v-bind:to="{name: 'task.show', params: {taskId: task.id }}">
                        <button class="btn btn-primary">Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id }}">
                        <button class="btn btn-success">Edit</button>
                    </router-link>
                </td>
                <td>
                    <button class="btn btn-danger" v-on:click="deleteTask(task.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            tasks: []
        }
    },
    methods: {
        getTasks() {
            axios.get('/api/tasks')
            // axios は Promise オブジェクトを返すので 
            // .done()、.catch()、.then() などで結果を受け取ります。
                .then((res) => {
                    this.tasks = res.data;
                });
                // 引数 res の中にステータス、ステータステキスト、データが格納されています。
                // res.status、res.statusText、res.data で取得します。
        },
        deleteTask(id){
          axios.delete('/api/tasks/' + id)
          //apiで削除
            .then((res)=>{
              this.getTasks();
              //削除後一覧を読みこみ直す。
            })
        }
    },
    mounted() {
        this.getTasks();
    }
}
</script>