// ======================= Toogle bar ======================
$(document).ready(function(){
    $("#toogleSidebar").click(function(){
        $(".left-menu").toggleClass("hide");
        $(".content-wrapper").toggleClass("hide");
     });
 });

// ================ tooltips ===================
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

new DataTable('#example');

// ============================== Data Table ========================
$(function() {
 $('#table').DataTable();
 $('#table-one').DataTable();
 $('#table-two').DataTable();
 $('#table-three').DataTable();
 $('#table-four').DataTable();
 });

 
