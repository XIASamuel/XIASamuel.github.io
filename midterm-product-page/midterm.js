var products = [
  {
    qty: "3",
    item: "iPad Pro",
    ppu: "25000",
    discount: "1500"
  },
  {
    qty: "1",
    item: "HUAWEI mate40",
    ppu: "30000",
    discount: "1000"
  },
  {
    qty: "2",
    item: "Apple TV",
    ppu: "90000",
    discount: "2000"
  },
]

// add new items to table
function addItem() {
  let productObj = {
      item: $('#Item').val(),
      qty: $('#qty').val(),
      ppu: $('#ppu').val(),
      discount: $('#discount').val(), 
  }
  
  $('#productBody').html("")

  products.push(productObj)
  loadData()
}

// delete item by index
function deleteProduct(index) {
  console.log("DELETE",index)
  delete products[index]  // delete the element from array
  $('#productBody').html("")
  loadData()
}

// delete all datas from list
function clearData() {
  products  = []
  loadData()
}

function loadData() {
  let allRows = ""
  let tAmount = 0
  let tDiscount = 0
  for (let p in products) {
    let cellpic = `<td style="background-color: white"><img class='icon' src='delete-icon.jpg' onclick='deleteProduct("${p}")'>`+"</td>"
    let cellqty = '<td>' + products[p].qty + "</td>"
    let cellitem = '<td class="text-right">' + products[p].item + "</td>"
    let cellppu = '<td class="text-right">' + products[p].ppu + "</td>"
    let amount = products[p].qty * products[p].ppu
    let cellamount = '<td class="text-right">' + amount + "</td>"
    tAmount += amount
    let celldiscount = '<td class="text-right">' + products[p].discount + "</td>"
    let discount = products[p].discount * 1
    tDiscount += discount
    let row = `<tr>${cellpic}${cellqty}${cellitem}${cellppu}${cellamount}${celldiscount}</tr>`
    allRows += row
  }
  $('#productBody').html(allRows)

  $("#tAmount").html(tAmount.toFixed(2))
  $("#tDiscount").html(tDiscount.toFixed(2))
  let total = tAmount - tDiscount
  $("#total").html(total.toFixed(2))
  let vat = total * 0.07
  let net = total + vat
  $("#vat").html(vat.toFixed(2))
  $("#net").html(net.toFixed(2))


}