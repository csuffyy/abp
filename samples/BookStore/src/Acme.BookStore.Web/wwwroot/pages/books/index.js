﻿$(function () {
    var dataTable = $('#BooksTable').DataTable({
        ajax: abp.libs.datatables.createAjax(acme.bookStore.book.getList),
        columnDefs: [
            {
                targets: 0,
                data: "name"
            },
            {
                targets: 1,
                data: "type"
            },
            {
                targets: 2,
                data: "price"
            },
            {
                targets: 3,
                data: "publishDate"
            }
        ]
    });

    var createModal = new abp.ModalManager(abp.appPath + 'Books/CreateModal');

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewBookButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});