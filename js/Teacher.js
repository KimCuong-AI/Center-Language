function Teacher() {
    this.layDSND = function () {
        //GET:lấy dữ liệu từ data
        var promise = axios({
            method: 'get',
            url: 'https://6065c022b8fbbd0017567387.mockapi.io/quanLyTrungTam',
        });
        return promise;
    }
}

