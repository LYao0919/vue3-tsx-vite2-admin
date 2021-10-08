/*
 * @Author: luyao
 * @Date: 2021-10-06 16:00:23
 * @LastEditTime: 2021-10-06 21:25:10
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/views/table/index1.tsx
 */

import { defineComponent, Fragment, reactive } from "vue-demi";

export default defineComponent({
    name: 'Table',
    setup() {
        let state = reactive({
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                },
            ],
        })


        function handleClick(params: any) {
            console.log(params, 12345678);

        }

        return () => (
            <el-table data={state.tableData} border  >
                <el-table-column prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="province" label="省份" width="120">
                </el-table-column>
                <el-table-column prop="city" label="市区" width="120"></el-table-column>
                <el-table-column prop="address" label="地址" width="600"></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100"
                    v-slots={{
                        default: (scope: { row: any }) => {
                            return <Fragment>
                                <el-button onClick={handleClick(scope.row)} type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </Fragment>
                        }
                    }}
                ></el-table-column>
            </el-table >

        )
    },
})