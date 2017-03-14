<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="addTodo"></i>
        <i v-if="activeTodo.done === false" class= "glyphicon glyphicon-ok" @click="toggleTodo(activeTodo)"></i>
        <i v-else class= "glyphicon glyphicon-repeat" @click="toggleTodo(activeTodo)"></i>
        <i class="glyphicon glyphicon-remove" @click="deleteTodo(activeTodo)"></i>
        <i class="glyphicon glyphicon-trash" @click="clearCompleted"></i>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'activeTodo'
            ])
        },
        methods: {
            ...mapActions([
                'addTodo',
                'deleteTodo',
                'toggleTodo',
                'clearCompleted'
            ])
        }
    }
</script>

<style>
    #toolbar {
      float: left;
      width: 80px;
      height: 100%;
      background-color: #30414D;
      color: #767676;
      padding: 35px 25px 25px 25px;
    }
    #toolbar i {
      font-size: 30px;
      margin-bottom: 35px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.5s ease;
    }

    #toolbar i:hover {
      opacity: 1;
    }

    .starred {
      color: #F7AE4F;
    }
</style>
