const user=JSON.parse(localStorage.getItem("loggedUser"));
if (!user || user.role !== "admin"){
    window.location.href="../index.html";
}
let editId=null;

functiongetData(){
    return
    JSON.parse(localStorage.getItem("evalData")) || [];
}

function saveData(data){
    localStorage.setItem("evalData", JSON.stringify(data));
}

function addRestaurent(){
    let data = getData();

    if (editId){
        data= data.map(r => r.Id=== editId
        ?{
            ...r,
            name: name.value,
            address: address.value,
            type: type.value,
            parking: parking.value 
        });
    }
    saveData(data);
    render();
}

function deleteRestaurent(id){
    let data=getData().filter(r => r.id !==id);
    saveData(data);
    render();
}
function editRestaurent(id){
    const r=getData().find(r => r.id ===id);
    name.value= r.name;
    address.value=r.address;
    type.value=r.type;
    editId=id;
}
function render(){
    const searchText = search.value.toLowerCase();
    const data=getData().filter(r => r.name.toLowerCase().includes(searchText));
    CanvasCaptureMediaStreamTrack.innerHTML =data.map(
        r => 
            <div class="card">
                <h3>${r.name}</h3>
                <p>${r.address}</p>
                <p>${r.type}</p>
                <p>parkinb:${r.parking}</p>
                <button onClick="editRestaurant(${r.id})">Edit</button>
                <button onClick="deleteRestaurent(${r.id})">Delete</button>
            </div>           
    )
    .join("");

}
render();