console.log('hallo')

//function menambah kecamatan
function addselectkecamatan(sisipan) {
    $(`${sisipan}`).append(`
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pilih Kecamatan</label>
    <select class="form-select form-select-sm data-kecamatan" aria-label=".form-select-sm example">
      <option value="">--Pilih Kecamatan--</option>
      <option value="7172011">Matuari</option>
      <option value="7172040">Ranowulu</option>
      <option value="7172012">Girian</option>
      <option value="7172010">Madidir</option>
      <option value="7172031">Maesa</option>
      <option value="7172030">Aertembaga</option>
      <option value="7172022">Lembeh Utara</option>
      <option value="7172021">Lembeh Selatan</option>
    </select>
  </div>
    `);
} //end function menambah opsi kecamatan

//fungsi menambah kelurahan
function addselectkelurahan (kecamatan, sisipan) {
    $.ajax({
        type: "get",
        url: `http://localhost/bepanjar/radius/kelurahan/`,
        dataType: "json",
        data : {
            'idkecamatan' : kecamatan
        },
        success: function (response) {  
            $(`${sisipan}`).append(`
            <label for="exampleInputEmail1" class="form-label">Pilih Kelurahan</label>
                <select class="form-select form-select-sm" id="pilihlurah" aria-label=".form-select-sm example">
                    <option value="">--Pilih Kelurahan--</option>
                /select>`);

    
            $.each(response, function (i, data) { 
                 $('#pilihlurah').append(`
                 <option value="${data.biaya}">${data.name}</option>
                 `);
            });

         }
    });
}//end function addselectkelurahan

//fungsi menambah data radius luar
function addRadiusLuar(sisipan){
    $(`${sisipan}`).append(`
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Nilai Radius (Termasuk Ongkos Kirim) <br> (Silahkan Tanya Petugas Informasi)</label>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Rp.</span>
        <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
</div>
     </div>
    `);
}//end function addRadiusLuar

//======================================================================

//ecourt talak
// menampilkan data berdasarkan option alamat tinggal lawan
$('#ecourttalak').on('change', function () {
    $('#sisipan').html('');
    let wilayahhukum = $('#ecourttalak').val();
    if (wilayahhukum == 1) {
        addselectkecamatan('#sisipan');
    } else if (wilayahhukum == 2){
        addRadiusLuar('#sisipan');
    } 
    else {
        $('#sisipan').html('');

    }
}); //end

// Menampilkan data kelurahan berdasarkan kecamatan
$('#sisipan').on('change','.data-kecamatan', function () {
    $('#kelurahan').html('');
    let kecamatan = $('.data-kecamatan').val();
    addselectkelurahan(kecamatan, '#kelurahan');
    
});//end

//tombol hitung di klik
$('#hitungEcourtTalak').on('click', function () {
    let radiusbiaya = $('#pilihlurah').val();
});

//======================================================================

//ecourt gugat
// menampilkan data berdasarkan option alamat tinggal lawan
$('#ecourtGugat').on('change', function () {
    $('#sisipanEcourtGugat').html('');
    let wilayahhukum = $('#ecourtGugat').val();
    if (wilayahhukum == 1) {
        addselectkecamatan('#sisipanEcourtGugat');
    } else if (wilayahhukum == 2){
        addRadiusLuar('#sisipanEcourtGugat');
    } 
    else {
        $('#sisipanEcourtGugat').html('');

    }
}); //end

// Menampilkan data kelurahan berdasarkan kecamatan
$('#sisipanEcourtGugat').on('change','.data-kecamatan', function () {
    $('#kelurahanEcourtGugat').html('');
    let kecamatan = $('.data-kecamatan').val();
    addselectkelurahan(kecamatan, '#kelurahanEcourtGugat');
    
});

//end ecourt gugat
