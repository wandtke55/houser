const initialState = {
            name: '',
            address: '',
            city: '',
            st: '',
            zip: 0,
            houses: []
}

const UPDATE_STEPONE = 'UPDATE_STEPONE'


export default function reducer(state = initialState, action){
    switch(action.type){

        case UPDATE_STEPONE: {
            return Object.assign({}, state, )
        }


        default: {
            return state;
        }
    }
}

export function updateStepOne(name, address, city, st, zip){
    return{
        type: UPDATE_STEPONE,
        payload: name, address, city, st, zip
    }
}