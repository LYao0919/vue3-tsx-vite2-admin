/*
 * @Author: luyao
 * @Date: 2021-10-02 23:59:43
 * @LastEditTime: 2021-10-06 21:35:42
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/views/table/index.tsx
 */

import { defineComponent, Fragment, reactive } from "vue-demi";

export default defineComponent({
    name: 'Table',
    setup() {
        let state = reactive({
            // 全剧配置
            configFlag: {
                selection: true,
                pagination: true, // 需要分页
                index: false, // 需要序号
                border: true,
                indexr: true,
                indexName: '序号啊'
            },
            // 分页相关配置
            pageInfo: {
                pageNum: 1,
                pageSize: 50,
                total: 1000
            },
            // table数据
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
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                },
            ],
            // 表头
            columns: [
                {
                    value: "date",
                    width: "100px",
                    label: "日期",
                },
                {
                    value: "name",
                    width: "150px",
                    label: "mc",
                    slot: 'slotName',
                },
                {
                    label: "操作",
                    width: "100px",
                    slot: 'action',
                },

            ]
        })

        function handleClick(scope: any, index: any) {
            console.log(scope, index);
        }

        function selArrFun(params: any) {
            console.log(params, 2345678);

        }

        function handlePageChange(pages: any) {
            console.log(pages);
        }
        return () => (
            <dbsTable
                configFlag={state.configFlag}
                data={state.tableData}
                columns={state.columns}
                pageInfo={state.pageInfo}
                onHandlePageChange={handlePageChange}
                onSelArr={selArrFun}
                v-slots={{
                    action: (scope: { row: any; $index: any; }) => {
                        return <Fragment>
                            <el-button onClick={() => handleClick(scope.row, scope.$index)} type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </Fragment>
                    },
                    slotName: (scope: { row: { name: any; province: any; }; $index: any; }) => {
                        return <Fragment>
                            {scope.row.name} - {scope.row.province} -{scope.$index}
                        </Fragment>
                    }
                }}
            >
            </dbsTable>
        )
    },
})