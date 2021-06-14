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
                <el-table :data="$store.state.aboutOrder.joinTravel" show-overflow-tooltip	>
                    <el-table-column label="序号" type="index" width="100">
                    </el-table-column>
                    <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
                    <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
                    <el-table-column label="负责人电话" prop="c_phone"></el-table-column>
                    <el-table-column label="出发地" prop="c_start"></el-table-column>
                    <el-table-column label="旅行地" prop="c_end"></el-table-column>
                    <el-table-column label="出发时间" prop="c_goTime"></el-table-column>
                    <el-table-column label="申请人姓名" prop="a_name"></el-table-column>
                    <el-table-column label="申请人电话" prop="a_phone"></el-table-column>
                    <el-table-column label="大人数" prop="a_audit"></el-table-column>
                    <el-table-column label="小孩数" prop="a_child"></el-table-column>
                    <el-table-column label="已交定金" prop="hasPay"></el-table-column>
                    <el-table-column label="代缴金额" prop="shouldPay"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="props">
                            <el-button type="text" @click="openDialog(props.row)">完善</el-button>
                            <el-button type="text" @click="surePay(props.row)">完成</el-button>
                            <el-button type="text" @click="cancelTravel(props.row)">取消</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            
        </el-container>
        <el-dialog :visible="joinTravelDialog" :show-close="false" title="完善信息">
            <el-form :model="relateForm" label-width="120px" ref="relateForm">
                <el-card v-for="(item, index) in relateForm.joinForm" :key="index" style="margin:10px 0">
                     <el-form-item label="姓名" :prop="'joinForm.' + index + '.j_name'" :rules="{required: true, trigger: 'blur'}">
                        <el-input v-model="item.j_name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" :prop="'joinForm.' + index + '.j_phone'" :rules="{required: true, trigger: 'blur'}">
                        <el-input v-model="item.j_phone"></el-input>
                    </el-form-item>
                    <el-form-item label="与申请人关系" :prop="'joinForm.' + index + '.j_reative'" :rules="{required: true, trigger: 'blur'}">
                        <el-input v-model="item.j_reative"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :prop="'joinForm.' + index + '.j_address'" :rules="{required: true, trigger: 'blur'}">
                        <el-input v-model="item.j_address"></el-input>
                    </el-form-item>
                    <el-button type="text" @click="delNum(index)">删除</el-button>
                </el-card>
                <el-button @click="addRelateNumber" icon="el-icon-plus">添加成员</el-button>
            </el-form>
            <div slot="footer">
                <el-button @click="close">关闭</el-button>
                <el-button type="primary" @click="updateRelate">确定</el-button>
            </div>
        </el-dialog>
        <!-- <el-dialog :visible="payDialog" :show-close="false" title="支付">
            <div style="margin:0 auto">
                <img src="../assets/pay.png" alt="" width="300px" style="display:block; margin:0 auto">
                <div style="text-align:center; font-size:20px">应付定金：<span style="color:red"> {{payCount}} </span> 元</div>
            </div>
            <div slot="footer">
                <el-button @click="payDialog = false">关闭</el-button>
                <el-button type="primary" @click="surePay">确定</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
export default {
    name: 'TravelprojectSuretravel',
    data() {
        return {
            joinTravelDialog:false,
            payDialog: false,
            payCount:0,
            shouldPay:0,
            relateForm:{
                joinForm:[{
                    j_name: '',
                    j_phone: '',
                    j_address: '',
                    j_reative: ''
                }],
            },
            joinFormRule:{
                a_name:[{required: true, trigger:'change'}],
                a_phone:[{required: true, trigger:'change'}],
                a_mail:[{required: true, trigger:'change'}],
                a_youbian: [{required: true, trigger:'change'}],
                a_birth:[{required: true, trigger:'change'}],
                a_audit:[{required: true, trigger:'change'}],
                a_child:[{required: true, trigger:'change'}]
            },
            currentItem:{}
        };
    },
    mounted() {
        
    },
    methods: {

        delNum(i){
            this.relateForm.joinForm.splice(i,1)
        },
        close(){
            this.joinTravelDialog = false
            // this.$refs.relateForm.resetFields()
        },
        addRelateNumber(){
            this.relateForm.joinForm.push({
                    j_name: '',
                    j_phone: '',
                    j_address: '',
                    j_reative: ''})
        },
        cancelTravel(row){
            const self = this
            let req = Object.assign(row)
            // 计算时间差
            // eslint-disable-next-line no-debugger
            debugger
            let deadTime = new Date(row.c_goTime).getTime()
            let nowTime = new Date().getTime()
            let diff = (deadTime - nowTime) / 1000
            let pay = row.hasPay
            let dedit = 0
            let day = parseInt(diff/86400);
            if(day < 30 && day > 10){
                dedit = pay * 0.2
                pay -= dedit
            }else if(day > 1 && day <= 10){
                dedit = pay * 0.5
                pay -= dedit
            }else if(day <= 1){
                dedit = pay;
                pay = 0
            }
            this.$confirm(`取消扣除违约金${dedit}元，返还${pay}元`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(() => {
                // eslint-disable-next-line no-debugger
                debugger
                self.$store.dispatch('cancelOrder',req)
            }).catch(() => {
                
            });
        },
        openDialog(row){
            this.joinTravelDialog = true
            this.currentItem = row
            this.relateForm = row.relateForm
        },
        updateRelate(){
            const self = this
            this.$refs['relateForm'].validate((valid) => {
                if (valid) {
                    self.currentItem['relateForm'] = Object.assign({}, self.relateForm)
                    let req = Object.assign({}, self.currentItem)
                    console.log(req)
                    self.$store.dispatch('updateNum', req);
                    this.joinTravelDialog = false
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        joinTravel(){
            let limit = parseInt( this.currentItem.c_limit ) - parseInt( this.currentItem.c_current)
            if(limit < parseInt(this.joinForm.a_audit) + parseInt(this.joinForm.a_child)){
                alert("超出人数限制")
                return
            }
            
            
        },
        surePay(row){
            const self = this
            this.$confirm(`确认已付代缴金额${row.shouldPay}元？`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    self.$store.dispatch('finishPay', row);
                }).catch(() => {
                
            });
            
        }
    },
};
</script>

<style lang="less" scoped>

</style>