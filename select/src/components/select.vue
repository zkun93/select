<template>
    <div class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </div>
</template>

<script>
  import selectInput from '@/components/selectInput'
  import list from '@/components/list'
    export default {
        data () {
            return {
              listShow : false
            }
        },
      components:{
        selectInput,
        list
      }
    }
</script>
<style>
</style>
