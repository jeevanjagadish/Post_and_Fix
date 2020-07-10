// -----------poster registration validation------
function registration(){
    function check_orgName()
    {
        var name=$("#name").val();
        var patern=/^[A-z]*$/;
        if(patern.test(name)&& name!=="")
        {
            $("#err_name").hide();
            $("#name").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_name").html("Please enter Name.").show();
            $("#name").focus();
            $("#name").css("border","2px solid red");
            return false;
        }
    }
    function check_orgType()
    {
        var name=$("#orgType").val();
        var patern=/^[A-z]*$/;
        if(patern.test(name)&& name!=="")
        {
            $("#err_orgType").hide();
            $("#orgType").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_orgType").html("Please enter Name.").show();
            $("#orgType").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_email()
    {
        var email=$("#email").val();
        var patern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(patern.test(email) && email!=="")
        {
            $("#err_email").hide();
            $("#email").css("border","2px solid #13b1cd");
            return true;
        }
        else
        {
            $("#err_email").html("Enter a valid Email!!").show();
            $("#email").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_country()
    {
        var country=$("#country").val();
        if(country!=="")
        {
            $("#err_country").hide();
            $("#country").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_country").html("Please enter Country.").show();
            $("#country").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_address()
    {
        var address=$("#address").val();
        if(address!=="")
        {
            $("#err_address").hide();
            $("#address").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_address").html("Please enter address.").show();
            $("#address").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_phone()
    {
        var phone=$("#phone").val();
        var patern=/^\d+$/;
        if(patern.test(phone) && phone!=="")
        {
            $("#err_phone").hide();
            $("#phone").css("border","2px solid green");
            return true;
        }
        else
        {
            $("#err_phone").html("Enter Phone Number").show();
            $("#phone").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_password()
    {
        var password=$("#password").val();
        if(password!=="")
        {
            $("#err_password").hide();
            $("#password").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_password").html("Please enter password.").show();
            $("#password").css("border","2px solid red").focus();
            return false;
        }
    }
    function check_cpassword()
    {
        var cpassword=$("#cpassword").val();
        var password=$("#password").val();
        console.log(password);
        console.log(cpassword);
        if(cpassword!=="" && cpassword==password)
        {
            $("#err_cpassword").hide();
            $("#cpassword").css("border","2px solid green");
            return true;
        }
        else{
            $("#err_cpassword").html("Password does not match").show();
            $("#cpassword").css("border","2px solid red").focus();
            return false;
        }
    }
    if(check_orgName()==true && check_orgType()==true && check_email()==true && check_country()==true && check_address()==true && check_phone()==true && check_password()==true && check_cpassword()==true)
    {
        alert("succes");
    }
    else{
        return false;
    }
}
$( document ).ready(function() {
    $("a").removeClass("active");
    $("#aProfile").addClass("active");
    $("#profile").addClass("active");
    $("#p_posts").hide();
    $("#p_awarded").hide();
    $("#p_message").hide();
    $("#f_projects").hide();
    $("#f_bids").hide();
    $("#f_awarded").hide();
    $("#f_reviews").hide();
    $("#f_message").hide();
    
});
    function p_profile(){
        $("a").removeClass("active");
        $("#aProfile").addClass("active");
        $("#p_profile").show();
        $("#p_posts").hide();
        $("#p_awarded").hide();
        $("#p_message").hide();
    }
    function p_posts(){
        $("a").removeClass("active");
        $("#aPosts").addClass("active");
        $("#p_profile").hide();
        $("#p_posts").show();
        $("#p_awarded").hide();
        $("#p_message").hide();
    }
    function p_awards(){
        $("a").removeClass("active");
        $("#aAwards").addClass("active");
        $("#p_profile").hide();
        $("#p_posts").hide();
        $("#p_awarded").show();
        $("#p_message").hide();
    }
    function p_message(){
        $("a").removeClass("active");
        $("#aMessage").addClass("active");
        $("#p_profile").hide();
        $("#p_posts").hide();
        $("#p_awarded").hide();
        $("#p_message").show();
    }
    function f_profile(){
        $("a").removeClass("active");
        $("#profile").addClass("active");
        $("#f_profile").show();
        $("#f_projects").hide();
        $("#f_bids").hide();
        $("#f_awarded").hide();
        $("#f_reviews").hide();
        $("#f_message").hide();
    }
    function f_projects(){
        $("a").removeClass("active");
        $("#project").addClass("active");
        $("#f_profile").hide();
        $("#f_projects").show();
        $("#f_bids").hide();
        $("#f_awarded").hide();
        $("#f_reviews").hide();
        $("#f_message").hide();
    }
    function f_bids(){
        $("a").removeClass("active");
        $("#bids").addClass("active");
        $("#f_profile").hide();
        $("#f_projects").hide();
        $("#f_bids").show();
        $("#f_awarded").hide();
        $("#f_reviews").hide();
        $("#f_message").hide();
    }
    function f_awarded(){
        $("a").removeClass("active");
        $("#awarded").addClass("active");
        $("#f_profile").hide();
        $("#f_projects").hide();
        $("#f_bids").hide();
        $("#f_awarded").show();
        $("#f_reviews").hide();
        $("#f_message").hide();
    }
    function f_reviews(){
        $("a").removeClass("active");
        $("#review").addClass("active");
        $("#f_profile").hide();
        $("#f_projects").hide();
        $("#f_bids").hide();
        $("#f_awarded").hide();
        $("#f_reviews").show();
        $("#f_message").hide();
    }
    function f_message(){
        $("a").removeClass("active");
        $("#fMessage").addClass("active");
        $("#f_profile").hide();
        $("#f_projects").hide();
        $("#f_bids").hide();
        $("#f_awarded").hide();
        $("#f_reviews").hide();
        $("#f_message").show();
    }






    $(document).ready(function(){
    	var height = $(window).height();
    	$('.left-chat').css('height', (height - 92) + 'px');
    	$('.right-header-contentChat').css('height', (height - 163) + 'px');
    });