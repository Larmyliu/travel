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
                <el-table :data="$store.state.aboutOrder.finishPay">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            
                            <el-form label-position="left" inline class="demo-table-expand" v-for="(item, index) in props.row.relateForm.joinForm" :key="index">
                                <el-form-item label="姓名">
                                    <span>{{ item.j_name }}</span>
                                </el-form-item>
                                <el-form-item label="与本人关系">
                                    <span>{{ item.j_reative }}</span>
                                </el-form-item>
                                <el-form-item label="联系地址">
                                    <span>{{ item.j_address  }}</span>
                                </el-form-item>
                                <el-form-item label="电话号码">
                                    <span>{{ item.j_phone  }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
                    <el-table-column label="出发时间" prop="c_goTime"></el-table-column>
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