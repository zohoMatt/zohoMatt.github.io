/**
 * Created by hao.zuo on 2017/8/16.
 */
/**======================================================**/
/**                    Deployment                        **/
/**======================================================**/
export const APIHOST = (process.env.NODE_ENV == 'production') ?
    'http://mattzo.life/' : 'http://localhost:3000/';
