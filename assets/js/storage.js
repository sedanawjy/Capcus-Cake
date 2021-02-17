const CACHE_KEY = "item_history";

function checkForStorage() {
 return typeof(Storage) !== "undefined"
}

function putHistory(data) {
   if (checkForStorage()) {
       let historyData = null;
       if (localStorage.getItem(CACHE_KEY) === null) {
           historyData = [];
       } else {
           historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
       }
 
       historyData.unshift(data);
 
       if (historyData.length > 5) {
           historyData.pop();
       }
 
       localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
   }
}

// function showHistory() {
//    if (checkForStorage()) {
//        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
//    } else {
//        return [];
//    }
// }

// function renderHistory() {
//    const historyData = showHistory();
//    let historyList = document.querySelector("#historyList");
 
 
//    // selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
//    historyList.innerHTML = "";
 
 
//    for (let history of historyData) {

 
 
//        historyList.appendChild(row);
//    }
// }

// renderHistory();