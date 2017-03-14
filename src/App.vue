<template>
    <div id='app'>
        <toobar></toobar>
        <note-list></note-list>
        <editor></editor>
    </div>
</template>

<script>
    import Toobar from './components/Toobar.vue'
    import NoteList from './components/NoteList.vue'
    import Editor from './components/Editor.vue'

    export default {
        components: {
            Toobar,
            NoteList,
            Editor
        }
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);


    #app {
        margin: 0;
        padding: 0;
        border: 0;
        height: 100%;
        max-height: 100%;
        position: relative;
    }

</style>

