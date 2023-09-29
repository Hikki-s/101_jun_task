const initialState = {
    districts: [],
    p2h: [],
    providers: [],
    streets: [],
    error: null,
};

export const createFetchSuccessReducer = (fieldName) => {
    return (state, action) => {
        return { ...state, [fieldName]: action.payload, error: null };
    };
};

export const createFetchErrorReducer = (fieldName) => {
    return (state, action) => {
        return { ...state, [fieldName]: [], error: action.payload };
    };
};

export const districtsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DISTRICTS_SUCCESS':
            return createFetchSuccessReducer('districts')(state, action);
        case 'FETCH_DISTRICTS_ERROR':
            return createFetchErrorReducer('districts')(state, action);
        default:
            return state;
    }
};

export const p2hReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_P2H_SUCCESS':
            return createFetchSuccessReducer('p2h')(state, action);
        case 'FETCH_P2H_ERROR':
            return createFetchErrorReducer('p2h')(state, action);
        default:
            return state;
    }
};

export const providersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROVIDERS_SUCCESS':
            return createFetchSuccessReducer('providers')(state, action);
        case 'FETCH_PROVIDERS_ERROR':
            return createFetchErrorReducer('providers')(state, action);
        default:
            return state;
    }
};

export const streetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STREETS_SUCCESS':
            return createFetchSuccessReducer('streets')(state, action);
        case 'FETCH_STREETS_ERROR':
            return createFetchErrorReducer('streets')(state, action);
        default:
            return state;
    }
};