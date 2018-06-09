var myHeading = document.querySelector('h1');
var changeUserNameButton = document.querySelector('button');

changeUserNameButton.onclick = setUser;

if (!localStorage.getItem('user_name'))
{
    setUser();
}
else
{
    myHeading.innerHTML = "This is " + localStorage.getItem('user_name') + " head";
}

function setUser()
{
    var setUserName = prompt('please set user name');
    localStorage.setItem("user_name", setUserName);
    myHeading.innerHTML = "This is " + setUserName + " head";
}
