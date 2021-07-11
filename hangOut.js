function addName()
{
    hang_name = document.getElementById("hangOut_name").value;
    localStorage.setItem("hangOut_name" , hang_name);
    window.location = "hangOut-room.html";
}