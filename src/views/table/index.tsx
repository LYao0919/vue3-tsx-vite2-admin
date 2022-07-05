/*
 * @Author: luyao
 * @Date: 2021-10-02 23:59:43
 * @LastEditTime: 2022-07-04 17:02:36
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/table/index.tsx
 */

import { defineComponent, Fragment, reactive, } from "vue-demi";
import { h } from "vue";

export default defineComponent({
    name: 'Table',
    setup() {
        let state = reactive({
            // 全局配置
            configFlag: {
                selection: true,
                pagination: true, // 需要分页
                index: true, // 需要序号
                border: true,
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
                    key: "date",
                    minWidth: "100px",
                    title: "日期",
                },
                {

                    minWidth: "150px",
                    title: "mc",
                    // slot: 'slotName',
                    render: (params: any, $index: any) => {
                        return h('div', `${$index} - ${params.date}`)
                    }
                },
                {
                    title: "操作",
                    width: "200px",
                    slot: 'action',
                },

            ]
        })

        function handleClick(scope: any, index: any) {
            console.log(scope, index);
        }

        function selArrFun(params: any) {
            console.log('选中数据：', params[0]);
        }

        function handlePageChange(pages: any) {
            console.log('翻页数据：', pages);
        }

        let hendlerSlot = {
            action: ({ scope }: any) => {
                return <Fragment>
                    <el-button onClick={() => {
                        handleClick(scope.row, scope.$index)
                    }} type="text" size="small">查看 </el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </Fragment>
            },
            slotName: ({ scope }: any) => {
                return <Fragment>
                    {scope.row.name} - {scope.row.province} -{scope.$index}
                </Fragment>
            }

        }
        return () => (

            <dbsTable
                autoHeight
                configFlag={state.configFlag}
                data={state.tableData}
                columns={state.columns}
                onHandlePageChange={handlePageChange}
                onHandleSelectionChange={
                    selArrFun
                }
                v-slots={
                    hendlerSlot
                }
            >
            </dbsTable >
        )
    },
})