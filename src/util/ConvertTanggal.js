function convertTanggal(intTanggal) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let tanggal = new Date(intTanggal);
    const strTanggal = tanggal.getDate() + ' ' + (monthNames[tanggal.getMonth()]) + ' ' + tanggal.getFullYear();
    return strTanggal;
}

export default convertTanggal;