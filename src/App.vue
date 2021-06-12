<template>
  <div id="app">
    <el-container id="main" >
      <el-header id="header">
        <div class="el-col el-col-24" style="display:flex; justify-content: space-between;">
          <div class="tit">旅游管理系统</div>
          <div class="tit" style="font-size:16px" >{{ $store.state.login.loginState }}</div>
        </div>
      </el-header>
      <el-container>
        <el-aside >
          <el-menu
            id="nav"
            @select="handleOpen"
            :default-active="$route.path"
            class="el-menu-vertical-demo">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>旅行团相关</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/createTravel">创建旅行团</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/sureTravel">已开团</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/cancelTravel">已取消</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>申请相关</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/confirmOrder">完善信息</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/hasPayOrder">已完成</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/cancelOrder">已取消</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>申请相关</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/createTravel">待完善信息</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/sureTravel">已完成</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/cancelTravel">已取消</el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
            <!-- <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">申请相关</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <img v-if="$router.path == '/'" src="https://www.hoki888.com/admin/editor/upload/images/20151016160445937.jpg" alt="" width="300px"> -->
          
          <router-view/>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(keyPath)
      this.$router.push(key)
    },
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#main{
  width: 100%;
  height: 100%;
}
#header{
  height: 60px;
  -webkit-box-shadow: 1px 3px 5px #eee;
  box-shadow: 1px 3px 5px #eee;
  background-color: white;
  z-index: 1000;
}
.tit{
  text-align: left;
  line-height: 60px;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-size: 20px;
  color: #333333;
}
#nav{
  width: 250px;
  height: calc(100vh - 60px);
}
</style>
