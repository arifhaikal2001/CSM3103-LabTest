$(document).ready(function() {
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaff.php',
        method: 'GET',
        success: function(response) {
            const data = JSON.parse(response);
            data.forEach(item => {
                const staff = JSON.parse(item);
                if (staff.email) {
                    $('#staff-list').append(`<li class="list-group-item">
                        <a href="secondpage.html?id=${staff.employeeNumber}">${staff.email}</a>
                    </li>`);
                }
            });
        }
    });
});