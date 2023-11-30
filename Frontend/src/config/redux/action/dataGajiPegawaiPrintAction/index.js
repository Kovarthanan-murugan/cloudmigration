import axios from "axios";
import {
    GET_DATA_GAJI_SINGLE_PEGAWAI_SUCCESS,
    GET_DATA_GAJI_SINGLE_PEGAWAI_FAILURE,
} from "./dataGajiPegawaiPrintActionTypes";
let api ="https://4vaoduobal.execute-api.us-east-1.amazonaws.com"
export const viewDataGajiSinglePegawaiSuccess = (data) => ({
    type: GET_DATA_GAJI_SINGLE_PEGAWAI_SUCCESS,
    payload: data,
});

export const viewDataGajiSinglePegawaiFailure = (error) => ({
    type: GET_DATA_GAJI_SINGLE_PEGAWAI_FAILURE,
    payload: error,
});

export const viewGajiSinglePegawaiByYear = (dataYear) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${api}/${dataYear}`
        );
        const data = response.data;
        dispatch(viewDataGajiSinglePegawaiSuccess(data));
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch(viewDataGajiSinglePegawaiFailure("Terjadi kesalahan saat memuat data."));
        }
    }
};

export const viewGajiSinglePegawaiByMonth = (dataMonth) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${api}/${dataMonth}`
        );
        const data = response.data;
        dispatch(viewDataGajiSinglePegawaiSuccess(data));
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch(viewDataGajiSinglePegawaiFailure("Terjadi kesalahan saat memuat data."));
        }
    }
};

export const viewGajiSinglePegawaiByName = (nama_pegawai) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${api}/data_gaji/name/${nama_pegawai}`
        );
        const data = response.data;
        dispatch(viewDataGajiSinglePegawaiSuccess(data));
    } catch (error) {
        console.log(error);
        if (nama_pegawai) {
            dispatch(viewDataGajiSinglePegawaiFailure("Terjadi kesalahan saat memuat data."));
        }
    }
};
