/*
 * @Author: luyao
 * @Date: 2021-10-03 00:25:31
 * @LastEditTime: 2022-05-31 14:26:49
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/test/index.tsx
 */


import { defineComponent,Fragment,reactive,h } from "vue-demi";
import ImgList from './../../components/imgList'
export default defineComponent({
    name: 'test',
    components:{
        ImgList
    },
    setup() {
        // let infodata =ref({
        //     imgList:[]
        // }) ;

        let state:any = reactive({
        data: [
            {
              type: "card",
              style: "width: 100%",
              fn: ["big", "close"],
              ajaxUrl: "接口地址",
              data: {
                title: "图片header",
                dir: "从上到下排列",
                children: [
                  {
                    dir: "从左到右排列",
                    data: ["1.jpg","1.jpg","1.jpg"],
                    // data: infodata.value.imgList|| ["1.jpg","1.jpg","1.jpg"],
                    type: "ImgList",
                    key: "url",
                  },
                ],
                footer: null,
              },
            }
          ]
        })

        
        return () => (
            <Fragment>
            {state.data.map((outItem: { data: { children: any[]; }; }) => {
                    // return JSON.stringify(outItem.data.children)
                    return outItem.data.children.map((item: { type: string; data: any; }) => {
                        return item.type == 'ImgList'&& <ImgList data={item.data}></ImgList>  
                    } )
                })}
            </Fragment>
        )
    },
})