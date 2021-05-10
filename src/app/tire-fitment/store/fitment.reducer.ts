import { Action, select } from '@ngrx/store'
import { Fitment } from '../fitment.model'
import * as FitmentActions from './fitment.action'

// Section 1
const initialState: Fitment = {
    year: [],
    selected:{
        year:'',
        make:'',
        model:'',
        trim:''
    },
    allSelected:false,
}

// Section 2
export function FitmentReducer(state: Fitment = initialState, action: FitmentActions.Actions) {

    // Section 3
    switch(action.type) {
        case FitmentActions.LOAD_YEAR:
            return {...state,year:[...action.payload]}
        case FitmentActions.RESET_YEAR:
            return {...state,year:[],allSelected:false,selected:{year:'',make:'',model:'',trim:''}}
        case FitmentActions.SET_YEAR:
            return {...state,selected:{...state.selected,year:action.payload}};
        case FitmentActions.SET_MAKE:
            return {...state,selected:{...state.selected,make:action.payload}};
        case FitmentActions.SET_MODEL:
            return {...state,selected:{...state.selected,model:action.payload}};
        case FitmentActions.SET_TRIM:
            return {...state,selected:{...state.selected,trim:action.payload},allSelected:true};
        default:
            return state;
    }
}