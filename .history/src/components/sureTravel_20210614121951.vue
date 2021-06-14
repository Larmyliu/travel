<template>
    <div>
        <el-container>
            <el-header>
                <div style="display:flex">
                    <el-input placeholder="请输入" style="width:200px; margin-right:10px" v-model="value"></el-input>
                    <el-button type="primary" size="mini">搜索</el-button>
                </div>
            </el-header>
            <el-main>
                <el-table :data="$store.state.aboutTravel.sureTravel">
                    <el-table-column label="序号" type="index" width="100">
                    </el-table-column>
                    <el-table-column label="旅游团代码" prop="c_id"></el-table-column>
                    <el-table-column label="负责人姓名" prop="c_name"></el-table-column>
                    <el-table-column label="负责人电话" prop="c_phone"></el-table-column>
                    <el-table-column label="出发地" prop="c_start"></el-table-column>
                    <el-table-column label="旅行地" prop="c_end"></el-table-column>
                    <el-table-column label="限制人数" prop="c_limit"></el-table-column>
                    <el-table-column label="已报人数" prop="c_current"></el-table-column>
                    <el-table-column label="截止时间" prop="c_deadTime"></el-table-column>
                    <el-table-column label="出发时间" prop="c_goTime"></el-table-column>
                    <el-table-column label="成人价格" prop="c_auditPrice"></el-table-column>
                    <el-table-column label="儿童价格" prop="c_childPrice"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="props">
                            <el-button type="text" @click="openDialog(props.row)">入团</el-button>
                            <el-button type="text" @click="cancelTravel(props.row)">取消</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            
        </el-container>
        <el-dialog :visible="joinTravelDialog" :show-close="false" title="申请入团">
            <el-form :model="joinForm" label-width="100px" :rules="joinFormRule" ref="joinForm">
                <el-form-item label="申请人姓名" prop="a_name">
                    <el-input v-model="joinForm.a_name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="a_sex">
                    <!-- <el-input v-model="joinForm.a_sex"></el-input> -->
                    <el-radio label="男" v-model="joinForm.a_sex"></el-radio>
                    <el-radio label="女" v-model="joinForm.a_sex"></el-radio>
                </el-form-item>
                <el-form-item label="电话" prop="a_phone">
                    <el-input v-model="joinForm.a_phone"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="a_mail">
                    <el-input v-model="joinForm.a_mail"></el-input>
                </el-form-item>
                <el-form-item label="邮编" prop="a_youbian">
                    <el-input v-model="joinForm.a_youbian"></el-input>
                </el-form-item>
                <el-form-item label="联系地址" prop="a_address">
                    <el-input v-model="joinForm.a_address"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" prop="a_birth">
                    <el-date-picker
                        value-format="yyyy-MM-dd"
                        v-model="joinForm.a_birth"
                        type="date"
                        placeholder="选择日期"
                        style="float:left">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="大人数" prop="a_audit">
                    <el-input v-model="joinForm.a_audit" style="width:200px">
                        <template slot="append">人</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="小孩数" prop="a_child">
                    <el-input v-model="joinForm.a_child" style="width:200px">
                        <template slot="append">人</template>
                    </el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer">
                <el-button @click="joinTravelDialog = false">关闭</el-button>
                <el-button type="primary" @click="joinTravel">确定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible="payDialog" :show-close="false" title="支付">
            <div style="margin:0 auto">
                <img src="../assets/pay.png" alt="" width="300px" style="display:block; margin:0 auto">
                <div style="text-align:center; font-size:20px">应付定金：<span style="color:red"> {{payCount}} </span> 元</div>
            </div>
            <div slot="footer">
                <el-button @click="payDialog = false">关闭</el-button>
                <el-button type="primary" @click="surePay">确定</el-button>
            </div>
        </el-dialog>
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
            value: '',
            joinForm:{
                a_name:'',
                a_sex:'',
                a_phone:'',
                a_mail:'',
                a_youbian:'',
                a_birth:'',
                a_audit:'',
                a_child:'',
                a_address: ''
            },
            joinFormRule:{
                a_name:[{required: true, trigger:'change'}],
                a_sex:[{required: true, trigger:'change'}],
                a_phone:[{required: true, trigger:'change'}],
                a_mail:[{required: true, trigger:'change'}],
                a_youbian: [{required: true, trigger:'change'}],
                a_birth:[{required: true, trigger:'change'}],
                a_audit:[{required: true, trigger:'change'}],
                a_child:[{required: true, trigger:'change'}],
                a_address:[{required: true, trigger:'change'}]
            },
            currentItem:{}
        };
    },
    mounted() {
        
    },
    methods: {
        cancelTravel(row){
            const self = this
            let req = Object.assign(row)
            this.$prompt('请输入取消原因', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                req['c_cancelReason'] = value
                self.$store.dispatch('cancelTravel',req)
            }).catch(() => {
                
            });
        },
        openDialog(row){
            this.joinTravelDialog = true
            this.currentItem = row
        },
        joinTravel(){
            let limit = parseInt( this.currentItem.c_limit ) - parseInt( this.currentItem.c_current)
            if(limit < parseInt(this.joinForm.a_audit) + parseInt(this.joinForm.a_child)){
                alert("超出人数限制")
                return
            }
            this.$refs['joinForm'].validate((valid) => {
            if (valid) {
                this.payDialog = true;
                let pay = Math.ceil(parseFloat(this.joinForm.a_audit) * parseFloat(this.currentItem.c_auditPrice) + parseFloat(this.joinForm.a_child) * parseFloat(this.currentItem.c_childPrice))
                this.shouldPay = pay
                // 计算时间差
                let deadTime = new Date(this.currentItem.c_deadTime).getTime()
                let nowTime = new Date().getTime()
                let diff = (deadTime - nowTime) / 1000
                let day = parseInt(diff/86400);
                if(day > 60){
                    pay *= 0.1
                }else if(day >= 30 && day <= 60){
                    pay *= 0.2
                }
                this.payCount = pay
                this.shouldPay -= pay
            } else {
                console.log('error submit!!');
                return false;
            }
            });
            
        },
        surePay(){
            const self = this
            this.$confirm('确认已付款？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let req = Object.assign({}, this.joinForm)
                    req['payTime'] = new Date()
                    req['hasPay'] = self.payCount
                    req['shouldPay'] = self.shouldPay
                    self.currentItem['c_current'] = self.currentItem['c_current'] + parseInt(self.joinForm.a_audit) + parseInt(self.joinForm.a_child)
                    self.$store.dispatch('updateNumber', self.currentItem);
                    let apply = Object.assign({},self.currentItem,req)
                    self.$store.dispatch('addOrder', apply);
                    self.joinTravelDialog = false;
                    self.payDialog = false
                });
            
        }
    },
};
</script>

<style lang="less" scoped>

</style>