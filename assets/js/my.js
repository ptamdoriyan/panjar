console.log ("hallo ini myjs");


function addSelectLokasi(id) {
    $(id).append(`
    
    <select class="form-select form-select-sm alamat-tinggal" aria-label=".form-select-sm example">
    <option selected>--Pilih Jenis Gugatan--</option>
    <option value="dalam">Daerah Kota Bitung</option>
    <option value="luar">Luar Daerah Kota Bitung</option>
    `);
}


$('#jenisgugatan').on('change', function () {
    $('#pemohon').html('');
    $('#termohon').html('');
    
    let jns_gugatan = $('#jenisgugatan').val();
    if (jns_gugatan ==1) {
        $('#pemohon').append(`<h6>Pilih Lokasi Tinggal Termohon (Istri)</h6>`);
        addSelectLokasi('#pemohon');
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
});