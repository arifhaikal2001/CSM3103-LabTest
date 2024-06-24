$(document).ready(function() {
    $('#staff-form').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Serialize the form data
        var formData = $(this).serialize();

        // Submit the form data using AJAX
        $.ajax({
            url: 'addstaff.php', // URL where you handle the form submission
            method: 'POST',
            data: formData,
            success: function(response) {
                // Log the server response to the console
                console.log(response);
                // Optionally alert the user or do other DOM manipulation here
                alert('Staff member added successfully!');
                // Clear the form
                $('#staff-form')[0].reset();
            },
            error: function(xhr, status, error) {
                // Log an error message if there's an issue with the AJAX request
                console.error('Error:', error);
                alert('An error occurred while adding the staff member.');
            }
        });
    });
});