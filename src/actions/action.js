export const DATA_REQUEST='DATA_REQUEST';
export const DATA_SUCCESS='DATA_SUCCESS';
export const DATA_ERROR='DATA_ERROR';

export const dataRequest=()=>({
    type:DATA_REQUEST
})

export const dataSuccess=(data)=>({
    type:DATA_SUCCESS,
    payload:data
})

export const dataError=()=>({
    type:DATA_ERROR
})
