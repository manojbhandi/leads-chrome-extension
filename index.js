
let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn =  document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

// check if leadsFromLocalStorage is truthy
//if so, set myLeads to its value and call renderLeads();

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

const tabs = [
    {url : "https://www.linkedin.com/in/manoj-bhandi-44467b143/"},
]

tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
    
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    // console.log(myLeads);
    render(myLeads);
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value = "";
// Save the myLeads array into localstorage ---> JSON.stringify
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) );
    render(myLeads);

    // console.log(localStorage.getItem("myLeads"))

});

function render(leads){
    let listItems = "";
    
    for (let i = 0; i < leads.length; i++){
        // listItems += "<li><a  target= '_blank' href =  ' " + myLeads[i] +" '>" + myLeads[i]+"</a></li>";
        listItems += 
                `
                    <li>
                        <a  target= '_blank' href =  ${leads[i]} > 
                           ${leads[i]}
                        </a>
                    </li>
                `;
    }
    ulEl.innerHTML = listItems;
}
