import axios from 'axios'
import shortid from 'shortid';
import APP from '../modules/index';

const requestId = shortid.generate();

export const fetch = {
    get({ url, requestParams = {}, callbackHandler}) {
        const ins = axios.get(url, {
            params: requestParams,
            requestId
        });
        outputHandler({ ins, callbackHandler });
    },
    getExcel({ url, requestParams = {}, callbackHandler}) {
        const ins = axios.get(url, {
            params: requestParams,
            requestId,
            responseType: 'arraybuffer'
        });
        outputHandler({ ins, callbackHandler });
    },
    
    post({ url, requestBody = {}, callbackHandler }) {
        const ins = axios.post(url, {...requestBody, requestId });
        outputHandler({ ins, callbackHandler });
    },
    delete({ url, requestBody = {}, callbackHandler }) {
        const ins = axios.delete(url, {...requestBody, requestId });
        outputHandler({ ins, callbackHandler });
    },
    put({ url, requestBody = {}, callbackHandler }) {
        const ins = axios.put(url, {...requestBody, requestId });
        outputHandler({ ins, callbackHandler });
    }
    
};

const outputHandler = ({ ins, callbackHandler }) => {
    ins.then((response) => {

        callbackHandler({
            status: APP.Constants.SUCCESS,
            message: '',
            payload: response.data
        });

    }).catch( () => {
        callbackHandler({
            status: APP.Constants.FAILURE,
            message: 'Something went worng...',
            payload: {}
        });
    });

};