<template>
  <div id="note-editor">
    <textarea
        :value="activeTodo.text"
        @input="editTodo"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'editTodo'
            ])
        },
        computed: {
            ...mapGetters([
                'activeTodo'
            ])
        }
    }
</script>

<style>
	#note-editor {
	  height: 100%;
	  margin-left: 480px;
	}

	#note-editor textarea {
	  height: 100%;
	  border: 0;
	  border-radius: 0;
	}
</style>
