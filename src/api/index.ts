/*
 * @Author: your name
 * @Date: 2021-08-03 16:39:39
 * @LastEditTime: 2021-08-08 16:32:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/api/index.ts
 */
import { loginUrl } from "./LOGIN_URL";
import { inventoryUrl } from "./INVENRTOYRY_URL";



export const API = {
  ...loginUrl,
  ...inventoryUrl
}