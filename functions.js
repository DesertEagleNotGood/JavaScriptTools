/**
 * Created by Ramb on 2016/11/1 0001.
 */

/**
 * 获取元素的行内样式和外部样式的通用方式
 * @param obj
 * @param property
 */
function getStyle(obj, property) {
    if(document.all) {
        return obj.currentStyle[property];
    }else {
        return getComputedStyle(obj, null)[property];
    }
}

/**
 * 设置元素的样式
 * @param obj
 * @param property
 */
function setStyle (obj, property, value) {
    obj.style[property] = value;
}
