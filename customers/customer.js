var customers = []

$(document).ready(function () {
  console.log("ready!");
  // load data
$.ajax({
    url: "data.json",
}).done(function (data) {
    //$(this).addClass("done");
    console.log("DONE", data);
    for (let d in data) {
      // save the data record into our local variable
      customers.push(data[d]);
      let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`;
      $("#data-table tr:last").after(dataStr);
    }

    console.log(customers);
  });
});

function addToCustomer() {
  let customerObj = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  };

  $("#productBody").html("");

  customers.push(customerObj);
  loadData();
}

function deleteCustomer(index) {
  console.log("DELETE", index);
  delete customers[index]; // delete the element from array
  $("#customerBody").html("");
  loadData();
}

function loadData() {
  let allRows = "";
  for (let p in customers) {
    let cellName = `<td><img class='icon' src='/delete-icon.jpg' onclick='deleteCustomer("${p}")'> ` + customers[p].name + "</td>"
    let cellEmail = `<td class="text_center">` + customers[p].email + "</td>";
    let cellPhone = `<td class="text_center">` + customers[p].phone + "</td>";
    let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`;
    allRows += row;
  }
  $("#customerBody").html(allRows);
}
