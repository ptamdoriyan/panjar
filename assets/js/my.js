console.log ("hallo ini myjs");

//fungsi menambah data radius luar
function addRadiusLuar(id){
    $(id).append(`
    <div class="mb-3">
       <h6>Nilai Radius (Termasuk Ongkos Kirim) <br> (Silahkan Tanya Petugas Informasi)</h6>
            <div class="input-group mb-3">
                <span class="input-group-text">Rp.</span>
                    <input type="number" class="form-control" aria-label="nilaiRadius" aria-describedby="basic-addon1">
            </div>
    </div>
    `);
}//end function addRadiusLuar

//function menambah lokasi
function addSelectLokasi(id) {
    $(id).append(`
    <select class="form-select form-select-sm alamat-tinggal mb-3" aria-label=".form-select-sm example">
    <option selected>--Pilih Jenis Gugatan--</option>
    <option value="dalam">Daerah Kota Bitung</option>
    <option value="luar">Luar Daerah Kota Bitung</option>
    `);
}//end menambah lokasi

//function menambah kecamatan
function addselectkecamatan(id) {
    $(id).append(`
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pilih Kecamatan</label>
    <select class="form-select form-select-sm datakecamatan" aria-label=".form-select-sm example">
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
function addselectkelurahan (kecamatan, id) {
    $.ajax({
        type: "get",
        url: `https://bepanjar.pa-bitung.go.id/radius/kelurahan/`,
        dataType: "json",
        data : {
            'idkecamatan' : kecamatan
        },
        success: function (response) {  
            $(id).append(`
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


function omdbapi () {
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data:{
            'apikey' : 'dca61bcc',
            's' : 'harry'
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}


//||||||||||||||||||||||||

// pilih jenis gugatan
$('#jenisgugatan').on('change', function () {
    $('#pemohon').html('');
    $('#termohon').html('');
    
    let jns_gugatan = $('#jenisgugatan').val();
    if (jns_gugatan ==1) {
        $('#pemohon').append(`<h6>Pilih Lokasi Tinggal Termohon (Istri)</h6>`);
        addSelectLokasi('#pemohon');
        $('#pemohon').append(`<div class='kecamatan'></div>`);
    }else if (jns_gugatan == 2) {
        $('#termohon').append(`<h6>Pilih Lokasi Tinggal Tergugat (Suami)</h6>`);
        addSelectLokasi('#termohon');
    }else if (jns_gugatan == 3) {
        $('#pemohon').append(`<h6>Pilih Lokasi Tinggal Pemohon (Suami)</h6>`);
        addSelectLokasi('#pemohon');
        $('#termohon').append(`<h6>Pilih Lokasi Tinggal Termohon (Istri)</h6>`);
        addSelectLokasi('#termohon');
    }else if (jns_gugatan == 4) {
        $('#pemohon').append(`<h6>Pilih Lokasi Tinggal Penggugat (Istri)</h6>`);
        addSelectLokasi('#pemohon');
        $('#termohon').append(`<h6>Pilih Lokasi Tinggal Tergugat (Suami)</h6>`);
        addSelectLokasi('#termohon');
    }else {
        $('#pemohon').html('');
        $('#termohon').html('');

    }
});// end pilih jenis gugatan


//pilihan untuk div Pemohon
//|||||||||||||||||||||||||

//start alamat tinggal
$('#pemohon').on('change','.alamat-tinggal', function () {
    $('.kecamatan').html('');
    let alamatTinggal = $('.alamat-tinggal').val();
    console.log(`alamat-tinggal = ${alamatTinggal}`);
    if (alamatTinggal == 'dalam') {
        addselectkecamatan('.kecamatan');
        $('.kecamatan').append(`<div class='kelurahan'></div>`);
    }else if (alamatTinggal == 'luar') {
       addRadiusLuar('.kecamatan')  
    }
});//end alamat tinggal

//start pilih kecamatan
$('#pemohon').on('change','.datakecamatan', function () {
    $('.kelurahan').html('');
    let alamatkecamatan = $('.datakecamatan').val();
    console.log(`alamat-kecamatan = ${alamatkecamatan}`);
    // addselectkelurahan(alamatkecamatan, '.,kelurahan');
    omdbapi();
});//end pilih kecamatan

//end pilihan untuk div pemohon



