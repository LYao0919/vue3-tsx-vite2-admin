/*
 * @Author: luyao
 * @Date: 2021-10-06 15:54:58
 * @LastEditTime: 2021-10-10 15:38:42
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/components/dbsTable/index.tsx
 */

import { defineComponent, Fragment, onMounted, ref } from "vue-demi";

export default defineComponent({
    props: {
        columns: {
            // 表头数据  文案和绑定值，以及需要特殊处理的slot
            type: Array,
            default: () => [],
        },

        data: {
            type: Array, // 后台数据
            default: () => [],
        },
        // totalNum: {
        //     type: Number,
        //     default: () => 0,
        // },
        pageInfo: {
            // 分页数据
            type: Object,
            default: () => {
                return {
                    pageNum: 1,
                    pageSize: 20,
                    total: 1000
                };
            },
        },
        configFlag: {
            // 配置  其他table配置依次添加
            type: Object,
            default: () => {
                return {
                    pagination: true, // 是否需要分页
                    selection: false, // 是否需要多选
                    index: false, // 是否需要序号
                    border: true,
                    color: "#333",
                    highlightCurrentRow: true,
                    tableHeight: '100%',
                    tableMaxHeight: '100%',
                    indexName: '',
                    headerRowStyle: {
                        color: "#333",
                        background: 'red'
                    }
                }
            },
        },

        headerRowStyle: {
            type: Object,
            default: () => {
                return {
                    color: "#333",
                    background: 'red'
                };
            },
        },

        selecTableFun: {
            type: Function,
            default: () => {
                return true;
            },
        },
        objectSpanMethod: {
            type: Function,
            default: () => {
                return true;
            },
        },
        key: {
            type: String,
            default: () => {
                return "";
            },
        },
        rowKey: {
            type: String,
            default: () => {
                return "";
            },
        },
    },
    emits: ['selArr', 'handlePageChange'],
    setup(props, ctx) {
        let tableMaxHeight = ref();
        function handleSelectionChange(selArr: any) {
            console.log(selArr);
            ctx.emit('selArr', selArr)
        }

        // 设置条数
        function sizeChange(pageSize: any) {
            console.log("设置条数:", pageSize);
            props.pageInfo.pageSize = pageSize;
            ctx.emit("handlePageChange", { pageSize: pageSize })
        }

        // 翻页
        function currentChange(pageNum: any) {
            console.log("翻页:", pageNum);
            props.pageInfo.pageNum = pageNum;
            ctx.emit("handlePageChange", { pageNum: pageNum });
        }

        function setHeight() {
            let dom = document.querySelector(".dbs-table");
            if (dom) {
                let th = window.innerHeight - dom?.getBoundingClientRect().top - 42;
                tableMaxHeight.value = th;
            }
        }

        onMounted(() => {
            setHeight();

            window.addEventListener("resize", (e) => {
                setHeight();
            });
        })

        return () => (
            <Fragment>
                <div class="PublicTable">
                    <el-table
                        ref="tableRef"
                        class="dbs-table"
                        border={props.configFlag.border}
                        header-row-style={props.headerRowStyle}
                        data={props.data}
                        max-height={tableMaxHeight.value}
                        highlight-current-row={props.configFlag.highlightCurrentRow}
                        span-method={props.objectSpanMethod}
                        key={props.key}
                        row-key={(row: { [x: string]: any; }) => row[props.rowKey]}
                        onSelectionChange={handleSelectionChange}
                    >
                        {/* 选择 */}
                        {props.configFlag.selection && <el-table-column
                            align="center"
                            width="40"
                            type="selection"
                            fixed="left"
                        />}

                        {/* 序号列  */}
                        {props.configFlag.index && <el-table-column
                            align="center"
                            width="100"
                            type="index"
                            index={1}
                            label={props.configFlag.indexName || '序号'}
                        />
                        }

                        {
                            props.columns.map((item: any, index) => {
                                // return item.slot ?
                                return <el-table-column
                                    show-overflow-tooltip={item.tooltip}
                                    key={item.value}
                                    width={item.width || ''}
                                    height={item.height || ''}
                                    max-height={item.maxHeight || ''}
                                    min-width={item.minWidth || ''}
                                    prop={item.value}
                                    label={item.label}
                                    align={item.align || 'center'}
                                    sortable={item.sortable}
                                    sort-method={item.sortMethod}
                                    header-align="center"
                                    fixed={item.fixed}
                                    v-slots={{
                                        default: item.slot && ctx.slots[item.slot]
                                    }}
                                ></el-table-column>
                            }
                            )
                        }
                    </el-table>
                </div>
                {
                    props.configFlag.pagination && <el-pagination
                        small background
                        style="margin-top:3px;padding: 3px 10px; background:#fff"
                        layout={'total, sizes, prev, pager, next'}
                        onSizeChange={sizeChange}
                        onCurrentChange={currentChange}
                        page-sizes={[10, 20, 30, 50, 100]}
                        page-size={100}
                        current-page={props.pageInfo.pageNum}
                        total={props.pageInfo.total}
                    />
                }
            </Fragment>
        )
    }
})
