/*
 * @Author: luyao
 * @Date: 2021-10-12 15:53:57
 * @LastEditTime: 2021-10-14 19:51:14
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/components/dbsForm/index.tsx
 */

import { computed, defineComponent, Fragment, reactive, ref, SetupContext } from "vue-demi";
import './index.less'

export default defineComponent({
    name: 'DbsForm',

    props: {
        // ref: {
        //     type: String,
        //     default: "form",
        // },

        // 搜索项
        searchForm: {
            type: Array,
            default: [],
        },
        // 操作按钮组
        searchHandle: {
            type: Array,
            default: () => [],
        },

        // 搜索项对应字段
        searchData: {
            type: Object,
            default: {},
        },
        // 设置表格高度方法
        // containerEle: Object,
        allDisabled: {
            type: Boolean
        },
        formConfig: {
            type: Object,
            default: () => {
                return {
                    size: "small",
                    inline: true,
                    isHandle: true,
                    formItemWidth: "100%",
                    labelWidth: "110px",
                };
            },
        },
    },
    emits: ['validate'],

    setup(props, { expose }) {

        let dbsFormRef: any = ref(null);
        let open = ref(true);

        let searchFormList = computed(() => props.searchForm.filter((item: any) => {
            return !item.isHidden;
        }))


        function validate() {
            return new Promise((resolve, reject) => {
                dbsFormRef.value.validate((valid: unknown) => {
                    resolve(valid);
                });
            });
        }

        expose({
            validate
        })

        return () => (
            <Fragment>
                <el-form
                    class="search-form-box"
                    ref={dbsFormRef}
                    model={props.searchData}
                    size={props.formConfig.size}
                    inline={props.formConfig.inline}
                    label-width={props.formConfig.labelWidth}
                    rules={props.formConfig.rules || []}
                    disabled={props.allDisabled}
                >
                    {
                        searchFormList.value.map((item: any, index) => {
                            {
                                return (!item.isShow ||
                                    props.searchData[item.isShow.prop] == item.isShow.value ||
                                    item.isShow.value === true ||
                                    item.isShow.value.find((itemchild: any) => props.searchData[item.isShow.prop].includes(itemchild))
                                ) && <el-form-item
                                    class={[item.className, !open.value && index > 4 ? 'hide-item' : '']}
                                    label={item.label}
                                    key={item.prop}
                                    style={{ 'width': props.formConfig.formItemWidth }}
                                    prop={props.searchData.hasOwnProperty(item.prop) ? item.prop : ''}
                                    rules={item.rules}
                                >

                                        {/*  输入框  */}
                                        {item.type === 'Input' && <el-input
                                            clearable
                                            disabled={item.disable}
                                            type={item.inputType || 'text'}
                                            v-model_trim={props.searchData[item.prop]}
                                            placeholder={item.placeholder}
                                            maxlength={item.maxlength}
                                            minlength={item.minlength}
                                            prefix-Icon={item.prefixIcon || ''}
                                            style={{ width: item.width || '180px' }}
                                            onKeyup={item.keyup && item.keyup(props.searchData[item.prop])}
                                        />}

                                        {/* 数字 */}
                                        {item.type === 'InputNumber' && <el-input-number
                                            v-model={props.searchData[item.prop]}
                                            placeholder={item.placeholder}
                                            disabled={item.disable}
                                            // controls-position="right"
                                            precision={item.precision}
                                            style={{ textAlign: item.textAlign, width: item.width || '180px' }}
                                            onKeyup={item.keyup && item.keyup(props.searchData[item.prop])}
                                            min={item.min}
                                            max={item.max}
                                        />}

                                        {/* 密码输入框  */}
                                        {item.type === 'InputPwd' && <el-input
                                            clearable
                                            disabled={item.disable}
                                            show-password
                                            type={item.inputType || 'text'}
                                            v-model_trim={props.searchData[item.prop]}
                                            placeholder={item.placeholder}
                                            prefix-Icon={item.prefixIcon || ''}
                                            style={{ width: item.width || '180px' }}
                                            onKeyup={item.keyup && item.keyup(props.searchData[item.prop])}
                                        />}


                                        {/*  文本域  */}
                                        {item.type === 'Textarea' && <el-input
                                            clearable
                                            type="textarea"
                                            disabled={item.disable}

                                            v-model={props.searchData[item.prop]}
                                            placeholder={item.placeholder}
                                            style={{ width: item.width || '180px' }}
                                            rows={item.rows || 1}
                                            show-word-limit={item.showWordLimit}
                                            maxlength={item.maxlength}
                                        />}

                                        {/* <!-- 下拉框 --> */}
                                        {item.type === 'Select' && <el-select
                                            disabled={item.disable}
                                            clearable={item.clearable === false ? false : true}
                                            filterable={item.filterable}
                                            multiple={item.multiple}
                                            placeholder={item.placeholder}
                                            v-model={props.searchData[item.prop]}
                                            style={{ width: item.width || '180px' }}
                                            onChange={item.change && item.change(props.searchData[item.prop])}
                                        >
                                            {
                                                item.options.map((op: any) => {
                                                    return <el-option
                                                        label={op[item.itemName || 'value']}
                                                        value={op[item.itemValue || 'key']}
                                                        key={op[item.itemValue || 'key']}
                                                    ></el-option>
                                                })
                                            }
                                        </el-select>}


                                        {/* 开关  */}
                                        {item.type === 'Switch' && <el-switch
                                            v-model={props.searchData[item.prop]}
                                        ></el-switch>
                                        }

                                        {/* 级联选择器  */}
                                        {item.type === 'Cascader' && <el-cascader
                                            clearable
                                            v-model={props.searchData[item.prop]}
                                            options={item.options}
                                            props={item.props}
                                            style={{ width: item.width || '180px' }}
                                            onChange={item.change && item.change(props.searchData[item.prop])}
                                            placeholder={item.placeholder}
                                        />}


                                        {/* 单选 */}
                                        {item.type === 'Radio' && <el-radio-group
                                            v-model={props.searchData[item.prop]}
                                        >
                                            {
                                                item.radios.map((ra: any) => {
                                                    return <el-radio label={ra.value} key={ra.value}>{
                                                        ra.label
                                                    }</el-radio>
                                                })
                                            }
                                        </el-radio-group>}


                                        {/* 复选框 */}
                                        {item.type === 'Checkbox' && <el-checkbox-group
                                            class={item.className}
                                            style={{ width: item.width || '180px' }}
                                            v-model={props.searchData[item.prop]}
                                        >
                                            {
                                                item.checkboxs.map((ch: any) => {
                                                    return <el-checkbox
                                                        label={ch.value}
                                                        key={ch.value}
                                                    >{ch.label}</el-checkbox>
                                                })
                                            }
                                        </el-checkbox-group>}
                                    </el-form-item>
                            }
                        })
                    }
                    {/* 操作按钮模块 */}
                    {
                        // style={{ width: props.formConfig.formItemWidth }}
                        props.formConfig.isHandle && <div class="btn-box">
                            {props.searchHandle.map((item: any) => {
                                return (!item.isShow ||
                                    props.searchData[item.isShow.prop] == item.isShow.value ||
                                    item.isShow.value === true ||
                                    (typeof item.isShow.value === 'function' &&
                                        !!item.isShow.value())) && <el-form-item
                                            key={item.label}
                                            //   label=" "
                                            style={{ 'width': props.formConfig.formItemWidth }}

                                        >
                                        {
                                            !item.slot ? <el-button
                                                style={{ width: item.width }}
                                                disabled={item.controlClick || false}
                                                type={item.type}
                                                onClick={() => item.handle(dbsFormRef)}
                                            >{item.label}</el-button> : <slot name={item.slot}> </slot>
                                        }
                                    </el-form-item>
                            })}
                            {/* 是否显示收起 */}
                            {/*  && props.formConfig.isShowFilter */}
                            {props.formConfig.isShowFilter && searchFormList.value.length > 4 && <span
                                onClick={() => open.value = !open.value}
                                class="form-move-search"
                            >
                                <i class={open.value ? 'el-icon-top' : 'el-icon-bottom'}></i>
                                {open.value ? "收起筛选" : "展开筛选"}
                            </span>
                            }
                        </div>
                    }
                </el-form>
            </Fragment>
        )
    }
})