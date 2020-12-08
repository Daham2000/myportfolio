var makeO=document.getElementById('makeOrdera');
var manageCus=document.getElementById('dashb');
var ManageItem=document.getElementById('ManageCus1');
var dashbtn=document.getElementById('ManageI');

var x=document.getElementById("MRO1");
var y=document.getElementById("dash");
var ManaCustomers=document.getElementById("ManageCUs");
var ManageItems=document.getElementById("ManaItems");

makeO.addEventListener('click',function () {
    x.style.display='inline-block';
    x.style.visibility='visible';
    x.style.width='100vw';
    x.style.position='relative';
    x.style.bottom='750px';
    y.style.display='none';
    y.style.visibility='hidden';
    ManaCustomers.style.display='none';
    ManaCustomers.style.visibility='hidden';
    ManageItems.style.display='none';
    ManageItems.style.visibility='hidden';
})

manageCus.addEventListener('click',function () {
    x.style.display='none';
    x.style.visibility='hidden';
    y.style.display='inline-block';
    y.style.visibility='visible';
    ManaCustomers.style.display='none';
    ManaCustomers.style.visibility='hidden';
    ManageItems.style.display='none';
    ManageItems.style.visibility='hidden';
})

ManageItem.addEventListener('click',function () {
    x.style.display='none';
    x.style.visibility='hidden';
    y.style.display='none';
    y.style.visibility='hidden';
    ManaCustomers.style.display='inline-block';
    ManaCustomers.style.visibility='visible';
    ManaCustomers.style.width='99vw';
    ManaCustomers.style.position='relative';
    ManaCustomers.style.bottom='750px';
    ManageItems.style.display='none';
    ManageItems.style.visibility='hidden';
})

dashbtn.addEventListener('click',function () {
    x.style.display='none';
    x.style.visibility='hidden';
    y.style.display='none';
    y.style.visibility='hidden';
    ManaCustomers.style.display='none';
    ManaCustomers.style.visibility='hidden';
    ManageItems.style.display='inline-block';
    ManageItems.style.visibility='visible';
    ManageItems.style.width='99vw';
    ManageItems.style.position='relative';
    ManageItems.style.bottom='720px';
})

// given a id for save btn and select it in JS
var customerIDF=document.getElementById('validationCustom01');
var customerNameF=document.getElementById('validationCustom02');
var customerAddressF=document.getElementById('validationCustom03');
var customerSalaryF=document.getElementById('validationCustom04');
var savebtn=document.getElementById('savebtn');

savebtn.addEventListener('click',function () {
    var cID=customerIDF.value;
    var CName=customerNameF.value;
    var CAddress=customerAddressF.value;
    var CSalary=customerSalaryF.value;

});
