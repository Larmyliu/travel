<template>
    <div>
        <!-- <el-header>
                <div style="display:flex">
                    <el-input placeholder="请输入" style="width:200px; margin-right:10px"></el-input>
                    <el-button type="primary" size="mini">搜索</el-button>
                </div>
            </el-header> -->
        <el-container id="main">
            <el-button type="primary" @click="createTravel">创建旅游团</el-button>
            
        </el-container>
        
        <el-table :data="$store.state.aboutTravel.createTravel" border style="margin:20px auto">
            <el-table-column label="序号" type="index" width="100">
            </el-table-column>
            <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
            <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
            <el-table-column label="负责人电话" prop="c_phone"></el-table-column>
            <el-table-column label="出发地" prop="c_start"></el-table-column>
            <el-table-column label="旅行地" prop="c_end"></el-table-column>
            <el-table-column label="限制人数" prop="c_limit"></el-table-column>
            <el-table-column label="截止时间" prop="c_deadTime"></el-table-column>
            <el-table-column label="出发时间" prop="c_goTime"></el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="props">
                    <el-button type="text" @click="updateDialog(props.row)">发团</el-button>
                    <el-button type="text" @click="updateCreateDialog(props.row)">更新</el-button>
                    <!-- <el-button type="text" @>取消</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="旅游团发团" :visible.sync="updateDialogVisible" width="800px">
            <el-form :model="createFrom" :rules="ruleForm" label-position="right" label-width="100px">
                <el-form-item label="负责人姓名" prop="c_name" >
                    <el-input v-model="createFrom.c_name" disabled></el-input>
                </el-form-item>
                <el-form-item label="负责人电话" prop="c_phone">
                    <el-input v-model="createFrom.c_phone" disabled></el-input>
                </el-form-item>
                <el-form-item label="出发地" prop="c_start">
                    <el-input v-model="createFrom.c_start" disabled></el-input>
                </el-form-item>
                <el-form-item label="旅游地" prop="c_end">
                    <el-input v-model="createFrom.c_end" disabled></el-input>
                </el-form-item>
                <el-form-item label="限制人数" prop="c_limit" style="width:200px">
                    <el-input v-model="createFrom.c_limit" disabled>
                        <template slot="append">人</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="截止时间" prop="c_deadTime">
                    <el-date-picker
                        disabled
                        value-format="yyyy-MM-dd"
                        v-model="createFrom.c_deadTime"
                        type="date"
                        placeholder="选择日期"
                        style="float:left">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="出发时间" prop="c_goTime" >
                     <el-date-picker
                        disabled
                        value-format="yyyy-MM-dd"
                        v-model="createFrom.c_goTime"
                        type="date"
                        placeholder="选择日期"
                        style="float:left">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="成人价格" prop="c_auditPrice">
                    <el-input v-model="createFrom.c_auditPrice" style="width:200px">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="儿童价格" prop="c_childPrice">
                    <el-input v-model="createFrom.c_childPrice"  style="width:200px">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="updateDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sendTravel">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="创建旅游团" :visible.sync="dialogFormVisible" width="800px">
            <el-form :model="createFrom" :rules="ruleForm" label-position="right" label-width="100px">
                <el-form-item label="负责人姓名" prop="c_name">
                    <el-input v-model="createFrom.c_name"></el-input>
                </el-form-item>
                <el-form-item label="负责人电话" prop="c_phone">
                    <el-input v-model="createFrom.c_phone"></el-input>
                </el-form-item>
                <el-form-item label="出发地" prop="c_start">
                    <el-input v-model="createFrom.c_start"></el-input>
                </el-form-item>
                <el-form-item label="旅游地" prop="c_end">
                    <el-input v-model="createFrom.c_end"></el-input>
                </el-form-item>
                <el-form-item label="限制人数" prop="c_limit" style="width:300px">
                    <el-input v-model="createFrom.c_limit">
                        <template slot="append">人</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="截止时间" prop="c_deadTime">
                    <el-date-picker
                        value-format="yyyy-MM-dd"
                        v-model="createFrom.c_deadTime"
                        type="date"
                        placeholder="选择日期"
                        style="float:left">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="出发时间" prop="c_goTime" >
                     <el-date-picker
                        value-format="yyyy-MM-dd"
                        v-model="createFrom.c_goTime"
                        type="date"
                        placeholder="选择日期"
                        style="float:left">
                    </el-date-picker>
                </el-form-item>
                <!-- <el-form-item label="成人价格" prop="c_auditPrice">
                    <el-input v-model="createFrom.c_auditPrice"></el-input>
                </el-form-item>
                <el-form-item label="儿童价格" prop="c_childPrice">
                    <el-input v-model="createFrom.c_childPrice"></el-input>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handInTravel">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'TravelprojectNewtravel',
    data() {
        return {
            dialogFormVisible:false,
            updateDialogVisible: false,
            dialogTit: '创建旅游团',
            createFrom:{
                c_name: '',
                c_phone: '',
                c_start: '',
                c_end: '',
                c_deadTime:'',
                c_goTime:'',
                c_auditPrice:'',
                c_childPrice:'',
                c_limit:''
            },
            ruleForm:{
                c_name:[{
                    required: true
                }],
                c_phone:[{
                    required: true
                }],
                c_start:[{
                    required: true
                }],
                c_end:[{
                    required: true
                }],
                c_deadTime:[{
                    required: true
                }],
                c_goTime:[{
                    required: true
                }],
                c_auditPrice:[{
                    required: true
                }],
                c_childPrice:[{
                    required: true
                }],
                c_limit:[{
                    required: true
                }],
            },

        };
    },
    mounted() {
        
    },
    methods: {
        handInTravel(){
            let req = Object.assign(this.createFrom)
            req["c_id"] = Math.floor(Math.random()*(9999 - 1000) + 1000);
            console.log(this.$store.state)
            if(this.dialogTit == '创建旅游团'){
                this.$store.dispatch('addTravel', req)
            }else{
                this.$store.dispatch('updateTravel', req)
            }
            
            this.dialogFormVisible = false
            this.createTable = this.$store.state.aboutTravel.createTravel
            
        },
        createTravel(){
            this.dialogTit = '创建旅游团'
            this.dialogFormVisible = true
        },
        updateCreateDialog(row){
            this.createFrom = row
            this.dialogTit = '旅游团信息更新'
            this.dialogFormVisible = true
        },
        updateDialog(row){
            
            this.createFrom = row
            this.updateDialogVisible = true
        },
        sendTravel(){
            const self = this;
            this.$confirm('确认发团，价格确定后无法修改', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    self.$store.dispatch('sureTravel', self.createFrom)
                    self.$store.dispatch('removeTravelItem', self.createFrom)
                    this.updateDialogVisible = false
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    },
};
</script>

<style lang="less" scoped>

</style>