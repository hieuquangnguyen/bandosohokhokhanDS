// Add this inside the bandoso.js file
function showPopup(title, latitude, longitude, websiteLink) {
  var popup = document.getElementById("popup");
  var popupTitle = document.getElementById("popup-title");
  var popupItems = document.getElementById("popup-items");

  popupTitle.textContent = title;

  // Xóa các mục cũ trong cửa sổ popup (nếu có)
  popupItems.innerHTML = "";

  // Thêm các mục mới vào cửa sổ popup
  var listItem1 = document.createElement("li");
  var mapAnchor = document.createElement("a");
  mapAnchor.href = "#";
  mapAnchor.textContent = "Click vào đây để zoom đến Google Map";
  mapAnchor.onclick = function () {
    goToLocation(latitude, longitude);
  };
  listItem1.appendChild(mapAnchor);
  popupItems.appendChild(listItem1);

  var listItem2 = document.createElement("li");
  var websiteAnchor = document.createElement("a");
  websiteAnchor.href = websiteLink;
  websiteAnchor.textContent = "Chọn vào đây để xem chi tiết";
  listItem2.appendChild(websiteAnchor);
  popupItems.appendChild(listItem2);

  // Hiển thị cửa sổ popup
  popup.classList.add("active");

  // Trigger the animation for the last legend item when clicked
  var lastLegendItem = document.querySelector(".legend-item:last-child");
  lastLegendItem.classList.add("animate-pulse");
  setTimeout(function () {
    lastLegendItem.classList.remove("animate-pulse");
  }, 1000); // Remove the 'animate-pulse' class after 1 second to stop the animation
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("active");
}

function goToLocation(latitude, longitude) {
  var mapFrame = document.getElementById("map");
  var mapURL =
    "https://www.google.com/maps/d/u/0/embed?mid=1g4HuD5hx8rZBF467U7-_UXp3RgFqTtI&ehbc=2E312F";
  mapFrame.src = mapURL + "&ll=" + latitude + "," + longitude;
}
