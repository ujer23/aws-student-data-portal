// Your deployed API Gateway URL (no trailing slash)
var API_ENDPOINT = "https://75rhpylcug.execute-api.us-east-1.amazonaws.com/prod";

// Save student data
document.getElementById("savestudent").onclick = function(){
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "✅ Student Data Saved!";
        },
        error: function (xhr, status, error) {
            console.error("POST error:", error);
            alert("❌ Error saving student data.");
        }
    });
};

// Retrieve student data
document.getElementById("getstudents").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // Clear old rows
            $('#studentTable tbody').empty();

            // Parse response if it's a string (sometimes API returns JSON string)
            if (typeof response === "string") {
                response = JSON.parse(response);
            }

            jQuery.each(response, function(i, data) {          
                $("#studentTable tbody").append("<tr> \
                    <td>" + data['studentid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                </tr>");
            });
        },
        error: function (xhr, status, error) {
            console.error("GET error:", error);
            alert("❌ Error retrieving student data.");
        }
    });
};
