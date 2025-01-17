/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import ImageListComponent from "./components/ImageListComponent";
import ModalComponent from "./components/modal-img";

window.Vue = require('vue');
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent,
        },
        {
            path: '/tasks/:taskId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        },
        {
            path: '/images',
            name: 'image.list',
            component: ImageListComponent,
            props: true
        },

    ]
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);
Vue.component('modal-component', ModalComponent);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});

// $(function () {
//   // モーダルのボタンをクリックした時
//   $('.modal_trigger .modal_btn').on('click', function() {
//     var btnIndex = $(this).index(); // 何番目のモーダルボタンかを取得
//     $('.modal_area .modal_box').eq(btnIndex).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
//   });

//   // ×やモーダルの背景をクリックした時
//   $('.modal_close , .modal_bg').click(function(){
//     $('.modal_box').fadeOut(); // モーダルを非表示にする
//   });
// });