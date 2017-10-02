{
    'use strict';

    let vm = new Vue({
        // L'élément définissant le périmètre d'action de l'application Vue.js
        el: 'main#app',
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
            remove: function (task) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
            },
        }
    })
}