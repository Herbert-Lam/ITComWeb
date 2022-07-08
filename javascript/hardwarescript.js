// Get input elements from order form
let ordercpuinput = document.getElementById("ordercpuinput");
let ordergpuinput = document.getElementById("ordergpuinput");
let orderkeyboardinput = document.getElementById("orderkeyboardinput");
let ordermouseinput = document.getElementById("ordermouseinput");

// Prepare variables for order summary display
let ordersummary = document.getElementById("ordersummary");
let orderedcpuqty = document.getElementById("orderedcpuqty");
let orderedgpuqty = document.getElementById("orderedgpuqty");
let orderedkeyboardqty = document.getElementById("orderedkeyboardqty");
let orderedmouseqty = document.getElementById("orderedmouseqty");
let outputQtyArr = [orderedcpuqty,orderedgpuqty, orderedkeyboardqty, orderedmouseqty];
let cpusubtotal = document.getElementById("cpusubtotal");
let gpusubtotal = document.getElementById("gpusubtotal");
let keyboardsubtotal = document.getElementById("keyboardsubtotal");
let mousesubtotal = document.getElementById("mousesubtotal");
let outputSubtotalArr = [cpusubtotal,gpusubtotal,keyboardsubtotal,mousesubtotal];
let totalamount = document.getElementById("totalamount");

// Prepare calculation figures and variables
let unitpriceArr = [299.99,259.99,199.99,139.99];
let cpuqty = gpuqty = keyboardqty = mouseqty = cpust = gpust = keyboardst = mousest = totalamountcalc = 0
let qtyArr = [cpuqty, gpuqty, keyboardqty, mouseqty];
let subtotalArr = [cpust, gpust, keyboardst, mousest];

function addCart(btn){
    ordersummary.style.display="block";
    totalamountcalc = 0;
    switch(btn.id){
        case "ordercpuaddcart":
            qtyArr[0] += parseInt(ordercpuinput.value);
        break;
        case "ordergpuaddcart":
            qtyArr[1] += parseInt(ordergpuinput.value);
        break;
        case "orderkeyboardaddcart":
            qtyArr[2] += parseInt(orderkeyboardinput.value);
        break;
        case "ordermouseaddcart":
            qtyArr[3] += parseInt(ordermouseinput.value);
        break;
    }
    for(let i = 0; i < subtotalArr.length; i++){
        outputQtyArr[i].innerHTML = `${qtyArr[i]}`;
        subtotalArr[i] = qtyArr[i]*unitpriceArr[i];
        outputSubtotalArr[i].innerHTML = `$${subtotalArr[i].toFixed(2)}`;
    }
    subtotalArr.forEach(function(subtotal){
        totalamountcalc += subtotal;
    })
    totalamount.innerHTML = `$${totalamountcalc.toFixed(2)}`;
}

function cancel(btn){
    totalamountcalc = 0;
    switch(btn.id){
        case "ordercpucancel":
            qtyArr[0] = 0;
            ordercpuinput.value = 1;
        break;
        case "ordergpucancel":
            qtyArr[1] = 0;
            ordergpuinput.value = 1;
        break;
        case "orderkeyboardcancel":
            qtyArr[2] = 0;
            orderkeyboardinput.value = 1;
        break;
        case "ordermousecancel":
            qtyArr[3] = 0;
            ordermouseinput.value = 1;
        break;
    }
    let qtySum = 0;
    qtyArr.forEach(function(qty){
        qtySum += qty;
    })
    console.log(qtySum);
    if(qtySum == 0){
        ordersummary.style.display="none";
    } else {
        for(let i = 0; i < subtotalArr.length; i++){
            outputQtyArr[i].innerHTML = `$${qtyArr[i].toFixed(2)}`;
            subtotalArr[i] = qtyArr[i]*unitpriceArr[i];
            outputSubtotalArr[i].innerHTML = `$${subtotalArr[i].toFixed(2)}`;
        }
        subtotalArr.forEach(function(subtotal){
            totalamountcalc += subtotal;
        })
        totalamount.innerHTML = `$${totalamountcalc.toFixed(2)}`;
    }
}