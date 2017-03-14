<template>
	<div id="notes-list">
		<div id="list-header">
		  <h2>TodoList</h2>
		  <div class="btn-group btn-group-justified" role="group">
		    <!-- All todos button -->
		    <div class="btn-group" role="group">
		      <button type="button" class="btn btn-default" @click="show='all'" :class="{active: show === 'all'}">
		        All todos
		      </button>
		    </div>
		    <!-- Completes Button -->
		    <div class="btn-group" role="group">
		      <button type="button" class="btn btn-default" @click="show='completed'" :class="{active: show === 'completed'}">
		        Completed
		      </button>
		    </div>
            <!-- Incompleted Button -->
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default" @click="show='incompleted'" :class="{active: show === 'incompleted'}">
                Incompleted
              </button>
            </div>
		  </div>
		</div>
		<!-- render notes in a list -->
		<div class="container">
            <transition-group tag="div" name="fade" class="list-group">
    		    <a v-for="todo in filterTodo" :key="todo" class="list-group-item" href='#' :class="{active: !todo.done && activeTodo === todo, 'list-group-item-success': todo.done}" @click="setActiveTodo(todo)">
    		      <h4 class="list-group-item-heading">
                  {{todo.text.trim().substring(0, 30)}}
    		      </h4>
    		    </a>
            </transition-group>
		</div>

	</div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                show: 'all'
            }
        },
        methods: {
            ...mapActions([
                'setActiveTodo'
            ])
        },
        computed: {
            todos () {
                return this.$store.state.todos
            },
            activeTodo () {
                return this.$store.state.activeTodo
            },
            filterTodo () {
                if (this.show === 'all') {
                    return this.todos
                } else if (this.show === 'completed') {
                    return this.todos.filter(todo => todo.done)
                } else {
                    return this.todos.filter(todo => !todo.done)
                }
            }
        }

    }
</script>

<style>
	#notes-list {
	  float: left;
	  width: 400px;
	  height: 100%;
	  background-color: #F5F5F5;
	  font-family: 'Raleway', sans-serif;
	  font-weight: 400;
	}

	#list-header {
	  padding: 5px 25px 25px 25px;
	}

	#list-header h2 {
	  font-weight: 300;
	  text-transform: uppercase;
	  text-align: center;
	  font-size: 22px;
	  padding-bottom: 8px;
	}

	#notes-list .container {
	  height: calc(100% - 137px);
	  max-height: calc(100% - 137px);
	  overflow: auto;
	  width: 100%;
	  padding: 0;
	}

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .fade-move, .fade-enter-active, .fade-leave-active {
        transition: all 0.5s;
    }

	#notes-list .container .list-group-item {
	  border: 0;
	  border-radius: 0;
	}

	.list-group-item-heading {
	  font-weight: 300;
	  font-size: 15px;
	}
</style>
