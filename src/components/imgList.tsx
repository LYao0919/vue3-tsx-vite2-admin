/*
 * @Author: luyao
 * @Date: 2021-10-03 00:25:31
 * @LastEditTime: 2022-05-31 13:09:01
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/components/imgList.tsx
 */


import { defineComponent,Fragment, } from "vue-demi";
export default defineComponent({
    name: 'test',
    props:['data'],
    setup(props) {
        console.log(props.data,234567);
        return () => (
            props.data.map(item =>{
                return (<img src={item}  style="width: 100px; height: 100px" fit='fit'></img>)
            })
         )
    },
})