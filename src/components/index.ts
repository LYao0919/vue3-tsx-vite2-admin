/*
 * @Author: luyao
 * @Date: 2021-10-06 15:57:22
 * @LastEditTime: 2021-10-06 15:57:22
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/components/index.ts
 */
import dbsTable from './dbsTable'
// import dbsForm from './dbsForm/dbsForm.vue'
// import ItemEdit from './ItemEdit.vue'
// import CardBox from  './cardBox.vue'

export default (app: any) => {
    app.component('dbsTable', dbsTable)
    // app.component('dbsForm', dbsForm)
    // app.component('ItemEdit', ItemEdit)
    // app.component('CardBox', CardBox)
}