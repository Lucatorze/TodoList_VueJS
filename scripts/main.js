{
    'use strict';

    const Task = {
        props:{
            tasks:{type:Array, required:true},
            task:{type:Object, required:true},
            i:{type:Number, required:true},
        },
        template: `
            <li class="collection-item">
                <input type="checkbox" :id="'t_' + (i+1)" v-model="task.isDone">
                <label :for="'t_' + (i+1)" >{{ task.title }}</label>
                <a href="#" class="link-delete" title="Supprimer cette tâche">
                    <i class="small material-icons" @click="remove(task)">delete_forever</i>
                </a>
            </li>
        `,
        methods: {
            remove: function (task) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
            },
        }
    };

    let vm = new Vue({
        // L'élément définissant le périmètre d'action de l'application Vue.js
        el: 'main#app',
        components: {"task" : Task},
        data:{
            tasks : [
                {title : "Nourrir le chat", isDone : false},
                {title : "Acheter un chiot", isDone: false},
                {title : "Revendre le chat", isDone: false}
            ],
            newTask: ''
        },
        filters: {
            checkPlural: function (value, text) {
                return value + (value <= 1 ? ' '+text : ' '+text+'s');
            }
        },
        computed: {
            countTasks: function () {
                return this.tasks.filter(task => !task.isDone).length;
            },
        },
        methods: {
            add: function () {
                var value = this.newTask && this.newTask.trim();
                if (!value) {
                    return
                }
                this.tasks.push({title: value, isDone: false});
                this.newTask = ''
            },

        }
    })
}