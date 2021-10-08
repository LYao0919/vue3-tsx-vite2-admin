/*
 * @Author: luyao
 * @Date: 2021-10-03 22:02:51
 * @LastEditTime: 2021-10-06 14:02:09
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/components/marquee/index.tsx
 */
import { defineComponent, onMounted, reactive, nextTick } from "vue-demi";
import './index.less'
export default defineComponent({
    name: 'marquee',
    props: {
        content: {
            type: String,
            default: '有版本更新啦'
        }
    },
    setup(props, ctx) {
        const state = reactive({
            num: 0,
            direction: "ltr",
            domWidth: 0,
        })

        step();
        function step() {
            if (state.direction == "ltr") {
                if (state.num + state.domWidth > 100) {
                    state.direction = "rtl";
                } else {
                    state.num += 0.1;
                }
            }
            if (state.direction == "rtl") {
                if (state.num < 0) {
                    state.direction = "ltr";
                } else {
                    state.num -= 0.1;
                }
            }
            window.requestAnimationFrame(step);
        }


        onMounted(() => {
            nextTick(() => {
                let textWidth: number = (document as any).querySelector(".text").offsetWidth;
                let marqueeWidth: number = (document as any).querySelector(".marquee-com").offsetWidth;
                state.domWidth = textWidth / marqueeWidth * 100;
            });
        })

        return () => (
            <div class="marquee-com">
                <span class="text" style={{ 'left': state.num + '%' }}
                >
                    {ctx?.slots?.content && ctx?.slots?.content() || '有版本更新啦'}
                </span>
            </div >
        )
    }
})