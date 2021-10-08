/*
 * @Author: luyao
 * @Date: 2021-10-06 21:09:26
 * @LastEditTime: 2021-10-06 21:26:29
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/utils/index.ts
 */


import axios from "axios";
import { ElMessage } from 'element-plus'


//  下载图片等
export let downLoadFile = (url: RequestInfo, fileName = (Math.random() * 100000).toFixed(0)) => {
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.blob();
            }
        })
        .then((blob) => {
            let href = URL.createObjectURL(blob);
            let a = (document as any).createElement("a");
            a.setAttribute('href', href)
            a.setAttribute('download', fileName)
                (document as any).body.appendChild(a);
            a.click();
            (document as any).body.removeChild(a);
        });
}

/**
 * base64转图片
 * @param {图片地址} dataurl 
 * @param {名称} filename 
 */

export let base64ImgtoFile = (dataurl: string, filename = 'file') => {
    let arr: any = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
    })
}


export let downLoapZIP = (url: any, _data: any) => {
    axios({
        // 用axios发送post请求
        method: "post",
        url: url, // 请求地址
        data: _data, // 参数
        responseType: "blob", // 表明返回服务器返回的数据类型
        withCredentials: true,
        headers: { 'system-source': 'WEB' },
    }).then((res) => {
        var blob = new Blob([res.data], {
            type: "aplication/zip",
        }); //application/vnd.openxmlformats-office(document as any).wordprocessingml.(document as any)这里表示doc类型
        var contentDisposition = res.headers["content-disposition"]; //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
        var filename = contentDisposition.slice(contentDisposition.indexOf('"') + 1, contentDisposition.lastIndexOf('"'));
        // var filename = `download${(Math.random() * 10000).toFixed(0)}.zip`;
        var downloadElement = (document as any).createElement("a");
        var href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.style.display = "none";
        downloadElement.href = href;
        downloadElement.download = filename; //下载后文件名
        (document as any).body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        (document as any).body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
    });
}

/**
 * 延时函数
 * @param {时间 ： 毫秒秒} time 
 * @param {要执行的函数 } fn 
 */
export let sleepFun = (time: number | undefined, fn: () => any) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            fn && fn()
            return resolve()
        }, time);
    })
}


/**
 * 延时函数
 * @param {需要复制的文字} text 
 * @param {时间 ： 毫秒秒 } time
 */
let timer: NodeJS.Timeout | null = null;
export let copyText = (text: any, time = 400) => {
    if (timer) clearInterval(timer)
    timer = setTimeout(async () => {
        let oInput: any = (document as any).createElement("input"); //创建input节点
        oInput.value = JSON.stringify(text); //给input的value赋值
        (document as any).body.appendChild(oInput); //向页面插入input节点
        oInput.select(); // 选中input
        try {
            await (document as any).execCommand("Copy"); // 执行浏览器复制命令
            ElMessage.success("复制成功");
        } catch {
            ElMessage.error("复制失败");
        } finally {
            (document as any).body.removeChild(oInput);
            oInput = null
        }
        timer = null
    }, time);
}



const menuToTree = (roots: string | any[], childrenMap: Map<any, any>) => {
    for (let i = 0; i < roots.length; i++) {
        const children = childrenMap.get(roots[i].id);
        if (children) {
            for (const child of children) {
                child.parent = roots[i];
            }
            roots[i].children = children;
            getChildren(children, childrenMap);
        } else {
            roots[i].children = [];
        }
    }
};

export const getMenuTree = (menuList: string | any[]) => {
    const roots = [];
    const childrenMap = new Map();
    for (let i = 0; i < menuList.length; i++) {
        if (menuList[i].type === 2) continue;
        const menu = Object.assign({}, menuList[i]);
        const parentId = menu.parentId;
        if (!parentId) {
            roots.push(menu);
        } else {
            if (!childrenMap.get(parentId)) {
                childrenMap.set(parentId, []);
            }
            childrenMap.get(parentId).push(menu);
        }
    }
    menuToTree(roots, childrenMap);
    return roots;
};

const getChildren = (roots: string | any[], childrenMap: { get: (arg0: any) => any; }) => {
    for (let i = 0; i < roots.length; i++) {
        const children = childrenMap.get(roots[i].id);
        if (children) {
            roots[i].children = children;
            getChildren(children, childrenMap);
        } else {
            roots[i].children = [];
        }
    }
};

// 回车事件
export const handleEnter = (cb: () => void, ev: any) => {
    let dom = ev ? (document as any).querySelector(ev) : (document as any);
    dom.onkeydown = (e: { keyCode: number; which: number; }) => {
        if (e.keyCode == 13 || e.which == 13) {
            cb()
        }
    }
}

export const checkDuplicate = (arr: any) => {
    if (arr.constructor != Array) return false
    if (arr.length < 1) return false
    let obj: any = {}, max = 0, maxEle = null;
    arr.forEach(item => {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
        if (obj[item] > max) {
            max = obj[item];
            maxEle = item
        }
    });

    return {
        maxEle: maxEle,
        max: max,
    }
}


export const checkFull = () => {
    //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
    //火狐浏览器
    var isFull = ((document as any) as any).mozFullScreen ||
        (document as any).fullScreen ||
        //谷歌浏览器及Webkit内核浏览器
        (document as any).webkitIsFullScreen ||
        (document as any).webkitRequestFullScreen ||
        (document as any).mozRequestFullScreen ||
        (document as any).msFullscreenEnabled
    if (isFull === undefined) {
        isFull = false
    }
    return isFull;

}

// 检查版本是否更新
export const versionUpdated = async () => {
    return new Promise((resolve, reject) => {
        let cur_hash = (document as any)
            .getElementsByTagName("body")[0]
            .getElementsByTagName("script")[1]
            .src.split("-")[1]
            .split(".")[0];
        axios
            .get(`${window.location.protocol}//${window.location.host}`, {
                withCredentials: true,
                mode: "no-cors",
                headers: {
                    "system-source": "WEB",
                    currency: "USD",
                    lang: "zh-CN",
                    "app-id": "0",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                },
            })
            .then(async (res) => {
                let el = (document as any).createElement("html");
                el.innerHTML = res.data;
                let new_hash = el
                    .getElementsByTagName("body")[0]
                    .getElementsByTagName("script")[1]
                    .src.split("-")[1]
                    .split(".")[0];
                console.info(`最新版本:${new_hash} ,  当前版本:${cur_hash}`);
                if (new_hash != cur_hash) {
                    console.info("有版本更新了");
                    el = null;
                    return resolve(true)
                } else {
                    console.info("无版本更新");
                    el = null;
                    return resolve(false)

                }
            });
    })
}



export let downExcel = ({ url, data, filename } = {}) => {
    axios({
        // 用axios发送post请求
        method: "post",
        url: url, // 请求地址
        data: data || '', // 参数
        responseType: "blob", // 表明返回服务器返回的数据类型
        withCredentials: true,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'system-source': 'WEB',
            'currency': 'USD',
            'lang': navigator.language,
            'app-id': '0'
        }
    }).then((res) => {
        var blob = new Blob([res.data], {
            type: 'application/octet-stream',
        });

        let filenamer = `${filename}.xlsx` || '企划模板.xlsx'; // 判断是否使用默认文件名
        var downloadElement = (document as any).createElement("a");
        var href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.style.display = "none";
        downloadElement.href = href;
        downloadElement.download = filenamer; //下载后文件名
        (document as any).body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        (document as any).body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
    });
}

