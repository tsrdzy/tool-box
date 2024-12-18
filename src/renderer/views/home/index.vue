<template>
  <div class="cards">
    <el-empty v-if="(lists.length == 0)" description="暂无收藏">
      <el-button type="primary" v-on:click="opentool()">添加工具</el-button>
    </el-empty>
    <div id="sortable">
      <div v-on:click="openurl(list)" class="card" :key="list" v-for="list in lists">
        <div class="icon iconfont" v-html="list.logo"></div>
        <div class="title">{{ list.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useStore } from "vuex";
import Sortable from "sortablejs";
const store = useStore();

const lists = ref([]);
const emptycard = ref({
  "title": "",
  "url": "",
  "logo": "",
  "tag": "",
  "intro": "",
  "time": ""
})
onMounted(() => {
  lists.value = JSON.parse(JSON.stringify(store.state.setting.config.collect))
  const el = document.getElementById("sortable");
  var sortable = new Sortable(el,
    {
      group: "name",
      // draggable: ".card",
      filter: "card_empty",
      animation: 150,
      onEnd: function (evt) {
        let item = lists.value.splice(evt.oldIndex, 1)[0];
        lists.value.splice(evt.newIndex, 0, item);
        store.commit("setting/setConfigCollect", JSON.parse(JSON.stringify(lists.value)))
      },
    })

});
function openurl(data) {
  store.commit("tool/setnowtool", data);
  router.push('/tool/' + data.url)
}
function opentool() {
  router.push('/tool')
}
</script>
<style lang=scss scoped>
.home {
  padding: 10px;
  margin: 20px;
  // display: grid;
  flex-flow: column wrap;
  // grid-template-columns: repeat(auto-fill 100%);
  // grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 10px;


  .cards {
    float: left;
    // border: 1px solid;
    padding: 10px;
    // display: grid;
    // grid-template-columns: repeat(auto-fill, 100px);
    // justify-content: space-between;
    // grid-gap: 10px;
    width: 100%;

    #sortable {
      display: grid;
      grid-template-columns: repeat(110px 110px);
      justify-content: space-between;
      grid-gap: 10px;

    }
  }
}

.card {
  float: left;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 4px;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  // font-size: 40px;
  margin: 10px;

  .icon {
    line-height: 100%;
    font-size: 40px;
    height: 50%;
  }

  .title {
    font-size: 12px;
    // line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 50%;
  }

  &:hover {
    box-shadow: 0 0 10px;
    backdrop-filter: blur(10px);
    background-color: #77777711;
  }
}

.card_empty {
  width: 100px;
  height: 100px;
  padding: 5px;
  margin: 10px;
  float: left;
}
</style>
