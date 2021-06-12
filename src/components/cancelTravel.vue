<template>
    <div>
        <el-container>
            <el-header>
                <div style="display:flex">
                    <el-input placeholder="请输入" style="width:200px; margin-right:10px"></el-input>
                    <el-button type="primary" size="mini">搜索</el-button>
                </div>
            </el-header>
            <el-main>
                <el-table :data="$store.state.aboutTravel.cancelTravel">
                    <el-table-column label="序号" type="index" width="100">
                    </el-table-column>
                    <el-table-column label="旅行团代码" prop="c_id"></el-table-column>
                    <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
                    <el-table-column label="负责人电话" prop="c_phone"></el-table-column>
                    <el-table-column label="出发地" prop="c_start"></el-table-column>
                    <el-table-column label="旅行地" prop="c_end"></el-table-column>
                    <el-table-column label="限制人数" prop="c_limit"></el-table-column>
                    <el-table-column label="截止时间" prop="c_deadTime"></el-table-column>
                    <el-table-column label="出发时间" prop="c_goTime"></el-table-column>
                    <el-table-column label="成人价格" prop="c_auditPrice"></el-table-column>
                    <el-table-column label="儿童价格" prop="c_childPrice"></el-table-column>
                    <el-table-column label="取消原有" prop="c_cancelReason">
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