export function timKiem() {
    return { type: 'TIM_KIEM' };
}

export function timKiemThatBai() {
    return { type: 'TIM_KIEM_THAT_BAI' };
}

export function timKiemThanhCong(cityName, temp) {
    return { type: 'TIM_KIEM_THANH_CONG', cityName, temp };
}
