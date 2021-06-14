<!--
 * @Author: army liu
 * @Date: 2021-06-14 12:04:02
 * @LastEditors: army liu
 * @LastEditTime: 2021-06-14 12:18:26
 * @FilePath: \travel\src\components\cancelOrder.vue
-->
<template>
    <div>
            <!-- <el-table :data="$store.state.aboutOrder.cancelOrder">
                <el-table-column label="序号" type="index" width="100">
                </el-table-column>
                <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
                <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
                <el-table-column label="路线">
                    <template slot-scope="props">
                        {{props.row.c_start}} - {{props.row.c_end}}
                    </template>
                </el-table-column>
                <el-table-column label="申请人信息">
                    <el-table-column label="姓名" prop="a_name"></el-table-column>
                    <el-table-column label="性别" prop="a_name"></el-table-column>
                    <el-table-column label="出生日期" prop="a_birth"></el-table-column>
                    <el-table-column label="电话号码" prop="a_phone"></el-table-column>
                    <el-table-column label="联系地址" prop="a_address"></el-table-column>
                    <el-table-column label="Email" prop="a_mail"></el-table-column>
                    <el-table-column label="邮政编码" prop="a_youbian"></el-table-column>
                </el-table-column>
                
            </el-table> -->
        <el-container>
            <el-header>
                <div style="display:flex">
                    <el-input placeholder="请输入" style="width:200px; margin-right:10px" v-model="value"></el-input>
                    <el-button type="primary" size="mini">搜索</el-button>
                </div>
            </el-header>
            
            <el-main>
                <el-table :data="$store.state.aboutOrder.cancelOrder">
                <el-table-column label="序号" type="index" width="100">
                </el-table-column>
                <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
                <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
                <el-table-column label="路线">
                    <template slot-scope="props">
                        {{props.row.c_start}} - {{props.row.c_end}}
                    </template>
                </el-table-column>
                <el-table-column label="申请人信息">
                    <el-table-column label="姓名" prop="a_name"></el-table-column>
                    <el-table-column label="性别" prop="a_name"></el-table-column>
                    <el-table-column label="出生日期" prop="a_birth"></el-table-column>
                    <el-table-column label="电话号码" prop="a_phone"></el-table-column>
                    <el-table-column label="联系地址" prop="a_address"></el-table-column>
                    <el-table-column label="Email" prop="a_mail"></el-table-column>
                    <el-table-column label="邮政编码" prop="a_youbian"></el-table-column>
                </el-table-column>
                
            </el-table>
            </el-main>
            
            
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'TravelprojectSuretravel',
    data() {
        return {
            value:''
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>