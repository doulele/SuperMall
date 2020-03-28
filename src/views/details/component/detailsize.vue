<template>
  <div class="detailsize" v-if='Object.keys(detailsizedata).length !== 0'>
    <div class="sizeDes">
      <p class="detailsizeTitle">{{detailsizedata.rule.key}}</p>
      <table v-for='(tableitem,index) in detailsizedata.rule.tables' :key='index' class="sizeTable" cellpadding="0" cellspacing="0">
        <tr v-for='(item,tri) in tableitem' :key='tri'> 
          <td>{{item[0]}}</td>
          <td>{{item[1]}}</td>
          <td>{{item[2]}}</td>
          <td>{{item[3]}}</td>
          <td>{{item[4]}}</td>
        </tr>
      </table>
      <p>{{detailsizedata.rule.disclaimer||detailsizedata.rule.desc}}</p>
    </div>
    <div class="ruleDes">
      <p class="detailsizeTitle">{{detailsizedata.info.key}}</p>
      <table class="sizeTable productParameters">
        <tr v-for='(item,index) in detailsizedata.info.set' :key='index'>
          <td>{{item.key}}</td>
          <td class="productParametersValue">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div v-if='detailsizedata.info.images' >
      <img :src="detailsizedata.info.images[0]" class="detailsizeendshowimg">
    </div>
  </div>
</template>
<script>
  export default {
    name:'DetailSize',
    props:{
      detailsizedata:{
        type:Object,
        default:{}
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .detailsize
    margin 20px 
  .detailsizeTitle
    font-size 16px
    margin 40px 0 10px 0
    color #000
  .sizeTable
    width 100%
    tr>td
      padding 20px 0
      border-bottom 1px solid #ddd
  .productParameters
    tr>td
      min-width 80px
  .productParametersValue
    color deepPink  
  .detailsizeendshowimg
    width 100%
</style>