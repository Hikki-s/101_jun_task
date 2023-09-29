import axios from 'axios';

const API_URL = 'http://localhost:3100';
const STREETS_URL = `${API_URL}/streets`;
const PTH_URL = `${API_URL}/pth`;
const DISTRICTS_URL = `${API_URL}/districts`;
const PROVIDERS_URL = `${API_URL}/providers`;

const fetchData = async (dispatch, url, successType, errorType, errorMessage) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        dispatch({type: successType, payload: data});
    } catch (error) {
        console.error(error);
        dispatch({type: errorType, error: errorMessage});
    }
};

export const fetchStreets = () => {
    return async (dispatch) => {
        const successType = 'FETCH_STREETS_SUCCESS';
        const errorType = 'FETCH_STREETS_ERROR';
        const errorMessage = 'Failed to fetch streets';
        await fetchData(dispatch, STREETS_URL, successType, errorType, errorMessage);
    };
};

export const fetchP2H = () => {
    return async (dispatch) => {
        const successType = 'FETCH_P2H_SUCCESS';
        const errorType = 'FETCH_P2H_ERROR';
        const errorMessage = 'Failed to fetch providers to providers to houses';
        await fetchData(dispatch, PTH_URL, successType, errorType, errorMessage);
    };
};

export const fetchDistricts = () => {
    return async (dispatch) => {
        const successType = 'FETCH_DISTRICTS_SUCCESS';
        const errorType = 'FETCH_DISTRICTS_ERROR';
        const errorMessage = 'Failed to fetch districts';
        await fetchData(dispatch, DISTRICTS_URL, successType, errorType, errorMessage);
    };
};

export const fetchProviders = () => {
    return async (dispatch) => {
        const successType = 'FETCH_PROVIDERS_SUCCESS';
        const errorType = 'FETCH_PROVIDERS_ERROR';
        const errorMessage = 'Failed to fetch providers';
        await fetchData(dispatch, PROVIDERS_URL, successType, errorType, errorMessage);
    };
};
