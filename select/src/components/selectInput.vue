<template>
    <div class="clearFix">
      <input type="text" readonly="readonly"
             class="keyWord"
             @click="showListHandle" :value="title">
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
    export default {
      props:['isShow'],
      computed:{
        initShow(){
          return this.isShow
        },
        title(){
            return this.$store.state.title
        }
      },
        data () {
            return {}
        },
      methods:{
            showListHandle(){
                this.$emit('update:isShow',!this.initShow)
            }
      }
    }
</script>

<style>

</style>
