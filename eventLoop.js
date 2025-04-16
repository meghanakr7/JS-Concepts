function loginUser(username, callBack) {
    console.log("Welcome ",username);
    setTimeout(()=> {
        console.log("Loggin in");
        callBack()
        
    }, 2000);
    console.log("Still logging in ");
}

function showDashboard() {
    console.log("Hi from Dashboard");
}

loginUser("Meghana",showDashboard);