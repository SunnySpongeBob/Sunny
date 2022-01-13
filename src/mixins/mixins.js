/*
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-10 11:39:57
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-10 14:27:06
 */
export const myMixin = {
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        hello() {
            console.log('hello from mixins');
        },
        func_one() {
            console.log('func_one from mixins');
        },
        func_two() {
            console.log('func_two from mixins');
        }
    },
    created() {
        console.log('啦啦啦啦_mixins');
        this.hello()
    }
}
