function numberCheck(input) {

    var regex = /[^0-9]/gi;
    input.value = input.value.replace(regex, "");

}

$(document).ready(function () {

    $(document).ajaxStart(function () {
        $("#ajaxLoader").show();
    }).ajaxStop(function () {
        $("#ajaxLoader").hide();
    });

    $("#registrationForm").validate({
        rules: {
            FirstName: {
                required: true,
                minlength: 2
            },
            LastName: {
                required: true,
                minlength: 2
            },
            Birthdate: {
                required: true
            },
            Contact: {
                required: true,
                digits: true,
                minlength: 10
            },
            EmailAddress: {
                required: true,
                email: true,
                minlength: 10
            },
            AddressLines: {
                required: true,
                minlength: 2
            },
            Username: {
                required: true,
                minlength: 8,
                //remote: "../Models/Checking/check.cs/checkUserName"
            },
            Password: {
                required: true,
                minlength: 8
            },
            ConfirmPassword: {
                required: true,
                minlength: 8,
                equalTo: "#Password"
            }
        },
        messages: {
            FirstName: {
                required: "Please provide your First Name",
                minlength: "Name is too Short"
            },
            LastName: {
                required: "Please provide your Last Name",
                minlength: "LastName is too Short"
            },
            Contact: {
                required: "Please provide your Cellphone Number",
                digits: "Please provide numbers only!",
                minlength: "Contact Number is too Short"
            },
            Birthdate: {
                required: true,
                required: "PLease Enter your Date of Birth"
            },
            EmailAddress: {
                required: "Please provide your Email Address",
                email: "Please provide a valid Email Address",
                minlength: "Make sure to have a good Email"
            },
            AddressLines: {
                required: "Please provide your Home Address",
                minlength: "Address is too Short"
            },
            Username: {
                required: "Please provide your UserName",
                minlength: "Username is too Short"
            },
            Password: {
                required: "Please provide password",
                minlength: "Password must be minimum of 8 digits!"
            },
            ConfirmPassword: {
                required: "Please Confirm password",
                minlength: "Password must be minimum of 8 digits!",
                equalTo: "cofirmed password is not equal to your password"
            }

        },
        submitHandler: function (form) {
            var url = $(form).attr("action");
            var data = $(form).serialize();
            $.ajax({
                url: url,
                type: "POST",
                data: data,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (res) {

                    if (res == "true") {
                        

                    }

                    else {
                        swal("Nice!", "Information Successfuly Added", "success")
                        window.Location.href = "..DataTable/DataTables";
                    }

                },
                error: function (res) {

                }
            });

        }


    });
    

    //$("#registerBtn").validate({
    //    rules: {
    //        Firstname: {
    //            required: true
    //        },
    //        Lastname: {
    //            required: true
    //        },
    //        Birthdate: {
    //            required: true,
    //            date: true
    //        },
    //        StudentId: {
    //            required: true,
    //            remote: "../Home/checkUserName"
    //        },
    //        Password: {
    //            required: true,
    //            minlength: 8,
    //            passwordRegex: true
    //        },
    //        Confirmpassword: {
    //            required: true,
    //            minlength: 8,
    //            equalTo: "#Password"
    //        }
    //    },
    //    messages: {
    //        FirstName: "Please provide your First Name",
    //        LastName: "Please provide your Last Name",
    //        Birthdate: {
    //            required: "Please provide your Birthdate",
    //        },
    //        StudentId: {
    //            required: "Please provide Student ID",
    //            remote: "Student ID is already taken"
    //        },
    //        Password: {
    //            required: "Please provide password",
    //            minlength: "Password must be minimum of 8 characters!",
    //            passwordRegex: "Password must include uppercase, number and special character"
    //        },
    //        Confirmpassword: {
    //            required: "Please Confirm password",
    //            equalTo: "Password didn't match! Please Try Again"
    //        }

    //    },

    //    submitHandler: function (form) {
    //        var url = $(form).attr("action");
    //        var data = $(form).serialize();
    //        $.ajax({
    //            url: url,
    //            type: "POST",
    //            data: data,
    //            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //            success: function (res) {
    //                if (res == "True")
    //                    window.Location.href = "..DataTable/DataTables";
    //                else
    //                    alert("Something went wrong!");

    //            },
    //            error: function (res) {

    //            }
    //        });

    //    }


    //});
    //$("#registerBtn").click(function () {

    //    var date = new Date($('#Birthdate').val());
    //    day = date.getDate();
    //    month = date.getMonth() + 1;
    //    year = date.getFullYear();
    //    let bday = ([day, month, year].join('/'));


    //    var FirstName = $("#FirstName").val();
    //    var MiddleName = $("#MiddleName").val();
    //    var LastName = $("#LastName").val();
    //    var EmailAddress = $("#EmailAddress").val();
    //    var AddressLines = $("#AddressLines").val();
    //    var Username = $("#Username").val();
    //    var Password = $("#Password").val();
    //    var ConfirmPassword = $("#ConfirmPassword").val();
    //    var Contact = $("#Contact").val();


    //    var dataObject = new Object();

    //    dataObject = {
    //        FirstName: FirstName,
    //        MiddleName: MiddleName,
    //        LastName: LastName,
    //        EmailAddress: EmailAddress,
    //        AddressLines: AddressLines,
    //        Contact: Contact,
    //        Birthdate: Birthdate,
    //        Username: Username,
    //        Password: Password,
    //        ConfirmPassword: ConfirmPassword
    //    }

    //    var dataToPass = JSON.stringify(dataObject);
    //    var url = "../Home/dataTransfer?data=" + dataToPass;

    //    $.ajax({
    //        url: url
    //        , type: "POST"
    //        , data: {}
    //        , success: function (res) {

    //            swal("Nice!", "Information Successfuly Added", "success")

    //        }, error: function (res) {

    //            alert("something went wrong");
    //        }
    //    });


    //});

    jQuery.validator.addMethod("passwordRegex", function (value, element) {
        var regex = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]))");
        var key = value;

        if (!regex.test(key)) {
            return false;
        }
        return true;
    });


});
