/*
 * @Author: luyao
 * @Date: 2021-10-03 00:25:31
 * @LastEditTime: 2022-07-06 19:10:14
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/form/index.tsx
 */

import './index.less'
import { defineComponent, Fragment, reactive, ref } from "vue-demi";
export default defineComponent({
    name: 'Form',
    setup() {
        let formRef: any = ref(null);
        const formData = reactive({
            name: '',
            region: '',
            date: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            date1: '',
            date2: '',
            age: 0
        })

        const searchForm = reactive([
            {
                label: '活动名称',
                prop: 'name',
                type: 'Input',
                inputType: 'text',
                placeholder: "请输入活动名称",
                rules: [{ required: true, message: '请输入活动名称', trigger: 'change' }],
                width: '100%'
            },
            {
                label: '活动区域',
                prop: 'region',
                type: 'Select',
                placeholder: "请选择活动区域",
                itemName: 'name',
                itemValue: 'val',
                options: [
                    {
                        name: '北京',
                        val: 'bj',
                    },
                    {
                        name: '上海',
                        val: 'sh',
                    }
                ],
                // options: [
                //     { key: '厚款', value: '厚款' },
                //     { key: '薄款', value: '薄款' },
                // ],
                rules: [{ required: true, message: '活动区域必填', trigger: 'change' }],
                width: '100%'
            },
            {
                label: '即时配送',
                type: 'Switch',
                prop: 'delivery',
            },
            {
                label: '活动性质',
                prop: 'type',
                type: 'Checkbox',
                placeholder: "请选择活动性质",
                checkboxs: [
                    { label: '美食/餐厅线上活动', value: '1' },
                    { label: '地推活动', value: '2' },
                    { label: '线下主题活动', value: '3' },
                    { label: '单纯品牌曝光', value: '4' },
                ],
                rules: [{ required: true, message: '活动性质必填', trigger: 'change' }],
                width: '100%'
            },
            {
                label: '特殊资源',
                prop: 'resource',
                type: 'Radio',
                placeholder: "请选择特殊资源",
                radios: [
                    { label: '线上品牌商赞助', value: '1' },
                    { label: '线下场地免费', value: '2' },
                ],
                rules: [{ required: true, message: '特殊资源必填', trigger: 'change' }],
                width: '100%'
            },
            {
                label: '活动形式',
                prop: 'desc',
                type: 'Textarea',
                placeholder: "请输入活动形式",
                rules: [{ required: true, message: '活动形式必填', trigger: 'change' }],
                width: '100%'
            },
            {
                label: '年龄',
                prop: 'age',
                type: 'InputNumber',
                placeholder: "请输入年龄",
                min: 0,
                max: 150,
                rules: [{ required: true, message: '年龄必填', trigger: 'change' }],
                width: '100%'
            },
        ])

        const formConfig = reactive(
            {
                inline: true,
                size: 'mini',
                labelWidth: '100px',
                formItemWidth: "100%",
                isShowFilter: false, // 是否显示收起按钮
                isHandle: true,
            },
        )

        const searchHandle = reactive(
            [
                {
                    label: "提交",
                    width: "100px",
                    type: "primary",
                    // controlClick: pageType === 'watch' ? true : submitClick,
                    handle: () => (submit as any),
                },

            ],
        )

        async function submit() {
            let isValidate = await formRef.value.validateFun();
            console.log('验证结果为：', isValidate, formData);
        }

        let is400PX = ref(false);

        return () => (
            < Fragment>
                <div class='set-form'>
                    <p> form开启inline模式： <el-switch v-model={formConfig.inline}> </el-switch></p>
                    <p> form开启收起功能： <el-switch v-model={formConfig.isShowFilter}> </el-switch></p>
                    <p> formItem设置为400PX： <el-switch onChange={() => {
                        formConfig.formItemWidth = is400PX.value ? '400px' : '100%'
                    }} v-model={is400PX.value}> </el-switch></p>
                </div>
                <dbsForm
                    ref={formRef}
                    searchData={formData}
                    searchForm={searchForm}
                    formConfig={formConfig}
                    searchHandle={searchHandle}
                ></dbsForm>
            </Fragment>

        )
    },
})