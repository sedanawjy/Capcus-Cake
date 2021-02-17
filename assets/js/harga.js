const item = {
   pcsori: 0,
   pcsgt: 0,
   pcsgh: 0,
   pcss: 0,
   pcst: 0,
   totalori: 0,
   totalgt: 0,
   totalgh: 0,
   totals: 0,
   totalt: 0,
   hasil: 0
};
 
function input(nama){
	if(nama === 'Original'){
		item.pcsori += 1;
		item.totalori = item.pcsori*3000;
		item.hasil += item.totalori;
		return;
	}else if (nama === 'Green Tea'){
		item.pcsgt += 1;
		item.totalgt = item.pcsgt*4000;
		item.hasil += item.totalgt;
		return;
	}else if (nama === 'Gula Halus'){
		item.pcsgh += 1;
		item.totalgh = item.pcsgh*3500;
		item.hasil += item.totalgh;
		return;
	}else if (nama === 'Strawberry'){
		item.pcss += 1;
		item.totals = item.pcss*4000;
		item.hasil += item.totals;
		return;
	}else if (nama === 'Tiramisu'){
		item.pcss += 1;
		item.totals = item.pcst*4000;
		item.hasil += item.totalt;
		return;
	}else{
		item.pcsori = 0;
	    item.pcsgt = 0;
	    item.pcsgh = 0;
	    item.pcss = 0;
	    item.pcst = 0;
	    item.totalori = 0;
	    item.totalgt = 0;
	    item.totalgh = 0;
	    item.totals = 0;
	    item.totalt = 0;
	    item.hasil = 0;
		return;
	}
}

function updateDisplay(){
	document.querySelector("#pcsori").innerText = item.pcsori;
	document.querySelector("#pcsgt").innerText = item.pcsgt;
	document.querySelector("#pcsgh").innerText = item.pcsgh;
	document.querySelector("#pcss").innerText = item.pcss;
	document.querySelector("#pcst").innerText = item.pcst;
	document.querySelector("#totalori").innerText = item.totalori;
	document.querySelector("#totalgt").innerText = item.totalgt;
	document.querySelector("#totalgh").innerText = item.totalgh;
	document.querySelector("#totals").innerText = item.totals;
	document.querySelector("#totalt").innerText = item.totalt;
	document.querySelector("#hasil").innerText = item.hasil;
}


const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       const history = {
		   pcsori: item.pcsori,
		   pcsgt: item.pcsgt,
		   pcsgh: item.pcsgh,
		   pcss: item.pcss,
		   pcst: item.pcst,
		   totalori: item.totalori,
		   totalgt: item.totalgt,
		   totalgh: item.totalgh,
		   totals: item.totals,
		   totalt: item.totalt,
		   hasil: item.hasil
   	   }
       putHistory(history);
       // renderHistory();
       input(target.innerText);
       updateDisplay();
   });
}