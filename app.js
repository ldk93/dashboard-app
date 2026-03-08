function openPage(page){
window.location.href = page;
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js');
}

async function enablePush(){

const permission = await Notification.requestPermission()

if(permission !== "granted"){
alert("Permission denied")
return
}

const token = await messaging.getToken()

console.log("Push token:",token)

}

