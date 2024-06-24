$(document).ready(function() {
    // Function to get URL parameter by name
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Get employeeNumber from URL parameter
    var employeeNumber = getUrlParameter('id');

    // AJAX request to fetch staff details by employeeNumber
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaffbyid.php?id=' + employeeNumber,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Check if status is 1 (success) and parse JSON data
            if (data[0] === '{"status":1}') {
                var staff = JSON.parse(data[1]);
                // Construct HTML to display staff details
                var html = '<div class="panel-body">';
                html += '<p><strong>Employee Number:</strong> ' + staff.employeeNumber + '</p>';
                html += '<p><strong>Name:</strong> ' + staff.firstName + ' ' + staff.lastName + '</p>';
                html += '<p><strong>Email:</strong> ' + staff.email + '</p>';
                html += '<p><strong>Extension:</strong> ' + staff.extension + '</p>';
                html += '<p><strong>Office Code:</strong> ' + staff.officeCode + '</p>';
                html += '<p><strong>Job Title:</strong> ' + staff.jobTitle + '</p>';
                html += '<p><strong>Reports To:</strong> ' + (staff.reportsTo ? staff.reportsTo : 'N/A') + '</p>';
                html += '</div>';
                $('#staffDetails').html(html);
            } else {
                // Handle error case where status is not 1 (optional)
                $('#staffDetails').html('<div class="panel-body"><p>No data found for employeeNumber ' + employeeNumber + '</p></div>');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching staff details:', error);
            $('#staffDetails').html('<div class="panel-body"><p>Error fetching data</p></div>');
        }
    });
});