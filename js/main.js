var teacher = new Teacher();
getListTeachers();

function getListTeachers() {
    var promise = teacher.layDSND();
    promise.then(function (result) {
        //nếu lấy data thành công
        console.log(result.data);
        renderTeachers(result.data);
    })
        .catch(function (error) {
            //nếu thất bại
            console.log(error);
        });
}
function renderTeachers(mangSP) {
    var content = "";
    mangSP.map(function (nd, index) {
        content += `
        <div class="col-6 col-sm-6 col-lg-3 p-3 mg-0 teacher__item">
                    <div class="teacher__content bg-white">
                        <a href="">
                            <img src="./img/${nd.hinhAnh}" alt="">
                        </a>
                        <div class="text-center p-4">
                            <p>${nd.ngonNgu}</p>
                            <h3>${nd.hoTen}</h3>
                            <p>${nd.moTa}</p>
                        </div>
                    </div>
                </div>
        `;
    });
    document.getElementById("listTeachers").innerHTML = content;
}