<template>
    <div>
      <ul class="list">
        <li v-for="item in data" @click="getTitleHandle(item.title)">{{item.title}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
      methods:{
        getTitleHandle(title){
          this.$store.commit('changeTitle',{title:title})
        }
      },
      computed:{
            data(){
                return this.$store.state.list
            }
      },
      created(){
        this.$store.dispatch('getListAction')
      }

    }
</script>

<style>

</style>
