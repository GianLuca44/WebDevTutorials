import _ from 'lodash'

const REDUCERS = {
    'READ_QUESTIONNAIRES': (state, action) => ({ ...state, qs: action.data }),
    'CREATE_QUESTIONNAIRES': (state, action) => ({ ...state, qs: [...state.qs, action.data ] }),
    'UPDATE_QUESTIONNAIRES': (state, action) => ({ ...state, qs: _.map(state.qs, q => q.id === action.data.id ? action.data : q) }),
    'DELETE_QUESTIONNAIRES': (state, action) => ({ ...state, qs: _.reject(state.qs, { id: action.data }) }),
    'LOADING': (state, action) => ({ ...state, loading: action.data }),
    'MESSAGE': (state, action) => ({ ...state, message: action.data }),
    'ERROR': (state, action) => ({ ...state, error: action.data }),
    'CONFIG': (state, action) => ({ ...state, config: action.data })
}

const reducer = (state, action) => _.get(REDUCERS, action.type, _.identity)(state, action)

export default reducer