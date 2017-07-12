import getTempAPI from '../api/getTemp';

function timKiem() {
    return { type: 'TIM_KIEM' };
}

function timKiemThatBai() {
    return { type: 'TIM_KIEM_THAT_BAI' };
}

function timKiemThanhCong(cityName, temp) {
    return { type: 'TIM_KIEM_THANH_CONG', cityName, temp };
}

export function getTempByCity(cityName) {
    return dispatch => {
        dispatch(timKiem());
        getTempAPI(cityName)
        .then(temp => dispatch(timKiemThanhCong(cityName, temp)))
        .catch(() => dispatch(timKiemThatBai()));
    };
}
