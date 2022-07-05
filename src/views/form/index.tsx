/*
 * @Author: luyao
 * @Date: 2021-10-03 00:25:31
 * @LastEditTime: 2022-07-05 21:27:32
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
                size: 'small',
                labelWidth: '100px',
                formItemWidth: "100%",
                isShowFilter: false, // 是否显示收起按钮
                isHandle: true,
            },
        )

        const searchHandle = reactive(
            [
                // {
                //     label: "提交",
                //     width: "100px",
                //     type: "primary",
                //     // controlClick: pageType === 'watch' ? true : submitClick,
                //     handle: () => (submit as any),
                // },
                // {
                //     label: "提交",
                //     width: "100px",
                //     type: "primary",
                //     // controlClick: pageType === 'watch' ? true : submitClick,
                //     handle: () => (submit as any)(),
                // }, {
                //     label: "提交",
                //     width: "100px",
                //     type: "primary",
                //     // controlClick: pageType === 'watch' ? true : submitClick,
                //     handle: () => (submit as any)(),
                // }, {
                //     label: "提交",
                //     width: "100px",
                //     type: "primary",
                //     // controlClick: pageType === 'watch' ? true : submitClick,
                //     handle: () => (submit as any)(),
                // }, {
                //     label: "提交",
                //     width: "100px",
                //     type: "primary",
                //     // controlClick: pageType === 'watch' ? true : submitClick,
                //     handle: () => (submit as any)(),
                // },
            ],
        )

        async function submit() {
            console.log(formRef.value, 23456);
            let isValidate = await formRef?.value?.validate();
            console.log('验证结果为：', isValidate,);
        }

        let is400PX = ref(false);

        return () => (
            < Fragment>
                <el-date-picker
                    v-model={formData.date}
                    type="date"
                    placeholder="选择日期"
                >
                </el-date-picker>

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
            </Fragment >
            // <el-form
            //     model={formData}
            //     ref={formRef.value}
            //     label-width={'100px'}
            //     class="demo-ruleForm"
            // >
            //     <el-form-item label="活动名称" prop="name">
            //         <el-input v-model={formData.name}></el-input>
            //     </el-form-item>
            //     <el-form-item label="活动区域" prop="region">
            //         <el-select v-model={formData.region} placeholder="请选择活动区域">
            //             <el-option label="区域一" value="shanghai"></el-option>
            //             <el-option label="区域二" value="beijing"></el-option>
            //         </el-select>
            //     </el-form-item>
            //     <el-form-item label="即时配送">
            //         <el-switch v-model={formData.delivery}></el-switch>
            //     </el-form-item>
            //     <el-form-item label="活动性质">
            //         <el-checkbox-group v-model={formData.type}>
            //             <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            //             <el-checkbox label="地推活动" name="type"></el-checkbox>
            //             <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            //             <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            //         </el-checkbox-group>
            //     </el-form-item>
            //     <el-form-item label="特殊资源">
            //         <el-radio-group v-model={formData.resource}>
            //             <el-radio label="线上品牌商赞助"></el-radio>
            //             <el-radio label="线下场地免费"></el-radio>
            //         </el-radio-group>
            //     </el-form-item>
            //     <el-form-item label="活动形式">
            //         <el-input type="textarea" v-model={formData.desc}></el-input>
            //     </el-form-item>

            //     <el-form-item label="活动时间">
            //         <el-col span={11}>
            //             {/* <el-date-picker type={'date'} placeholder="选择日期" v-model={formData.date1} style="width: 100%;"></el-date-picker> */}
            //         </el-col>
            //         <el-col class="line" span={2}>
            //             -
            //         </el-col>
            //         <el-col span={11}>
            //             {/* <el-time-picker placeholder="选择时间" v-model={formData.date2} style="width: 100%;"></el-time-picker> */}
            //         </el-col>
            //     </el-form-item>
            // </el-form >
        )
    },
})