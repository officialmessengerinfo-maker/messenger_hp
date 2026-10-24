const GAS_URL = 'https://script.google.com/macros/s/AKfycbzOOX5YxkRIptg_ZFH9vgLP6sEXj5Ksp0P42FdAHEECky54XDqHnr1V3quSIue1hVnU/exec';

$('#songList').on('click', function () {
  $.getJSON(GAS_URL)
    .done(function (songList) {
      console.log('取得した曲データ:', songList);
      // 画面にカードを生成する処理などをここに記述
    })
    .fail(function (jqxhr, textStatus, error) {
      console.error('データ取得エラー:', textStatus, error);
    });
});

