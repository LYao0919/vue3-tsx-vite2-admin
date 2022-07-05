import { computed, defineComponent, Fragment, inject, ref } from "vue-demi";
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from "vue-router";
import './menuList.less'
import { Fold } from '@element-plus/icons'
import { useStore } from "vuex";

/*
 * @Author: luyao
 * @Date: 2021-10-02 20:42:08
 * @LastEditTime: 2021-10-20 21:44:10
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/home/components/menuList.tsx
 */
export default defineComponent({
    name: 'MenuList',
    setup() {
        const route = useRoute();
        const store = useStore();

        let actRouter = ref('');
        let isCollapse = computed(() => store.getters.getCollapse)
        function setTags(to: any) {
            actRouter.value = to.meta.act;
        }
        setTags(route);
        onBeforeRouteUpdate((to) => {
            setTags(to);
        });
        return () => (
            <Fragment>
                <el-aside class='menu' width='200' >
                    <div>
                        {/* {
                            isCollapse.value ? 'DXXX' : <img class='logo-bg' src="@/assets/logo.png" alt="" srcset="" />
                        } */}

                    </div>
                    <el-menu
                        class="el-menu-vertical-demo"
                        background-color="#212221"
                        text-color="#fff"
                        active-text-color="#ff9000"
                        default-active={actRouter.value}
                        router={true}
                        collapse-transition={false}
                        collapse={isCollapse.value}

                    >
                        {/*   default-openeds={actOpenMenu.value} */}
                        <el-sub-menu index='/opt' v-slots={{
                            title: () => <div><i class="el-icon-message" /> <span class='title'>基础组件</span></div>
                        }}>
                            <el-menu-item index="/opt/table" >table</el-menu-item>
                            <el-menu-item index="/opt/form">form</el-menu-item>
                            <el-menu-item index="/opt/test">Option 3</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside >
            </Fragment>
        )
    },
})