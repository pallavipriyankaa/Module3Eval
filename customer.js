const user=JSON.parse(localStorage.getItem("loggedUser"));
if(!user || user.role !== "customer"){
    window.location.href="../index.html";

}
function render(){
    const data=JSON.parse(localStorage.getItem("evalData"))|| [];
    const searchText= search.value.toLowerCase();
    cards.innerHTML =data.filter(r => r.name.toLowerCase().includes(searchText))
    .map(
        r =>
            <div class="card">
                <h3>${r.name}</h3>
                <p>${r.address}</p>
                <p>${r.type}</p>
                <p>parking: ${r.parking}</p>
            </div>
    )
    .join("");
}
render();