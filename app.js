function openPage(page){
window.location.href = page;
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js');
}