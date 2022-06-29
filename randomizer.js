

function getImageURL(name) {
  return "https://render.albiononline.com/v1/item/" + name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function select(slot) {
  var count = 0;
  for (var i = 0; i < itemdb.length; i++) {
    if (itemdb[i].slot == slot) {
      count++;
    }
  }
  if (count == 0) {
    return null;
  }
  var sel = getRandomInt(count);
  if (sel < 0) {
    return null;
  }
  var index = 0;
  for (var i = 0; i < itemdb.length; i++) {
    if (itemdb[i].slot == slot) {
      if (index == sel) {
        return itemdb[i];
      }
      index++;
    }
  }
  return null;
}

function setItem(slot, item) {
  console.log("set slot " + slot + " item " + (item != null ? item.name : "-"));
  var img = document.getElementById("img-" + slot);

  if (slot.includes("detail")) {
    console.log('DETAIL', item)
  }

  if (img == null) {
    console.log("slot img tag not found: " + slot);
    return;
  }
  if (item == null) {
    img.src = "";
  } else {
    if (item.exactname == true) {
      img.src = getImageURL(item.name);
    } else {
      img.src = getImageURL("T8_" + item.name);
    }
  }
}

function roll() {

  var twohand = true;
  // for (var slot of slots) {
  //     var item = select(slot);
  // if (slot != "offhand") {
  //   if (item != null && item.twohand == false) {
  //     twohand = false;
  //     }
  //   setItem(slot, item);
  // }
  const build = new Object();
  build.bag = select("bag");
  build.helmet = select("helmet");
  build.cape = select("cape");
  build.weapon = select("weapon");
  build.armor = select("armor");
  build.offhand = select("offhand");
  build.food = select("food");
  build.shoes = select("shoes");
  build.potion = select("potion");
  build.mount = select("mount");

  console.log(build)

  for (var slot of slots) {
    if (slot != "offhand") {
      if (build['weapon'] != null && build['weapon'].twohand == false) {
        twohand = false;
      }
      // console.log(slot)
      // console.log(build[slot])
      setItem(slot, build[slot]);
    }
    // slot.currentTarget.className += " img-offhand";
    if (slot.includes('detail')) {
      setItem(slot, build[slot.split('-')[0]])
    }
  }

  if (twohand) {
    setItem("offhand", null);
  } else {
    var item = select("offhand");
  }
}

function isValidSlot(name) {
  for (var slot of slots) {
    if (slot == name) {
      return true;
    }
  }
  return false;
}

function rerollSlot(elem) {
  if (elem == null) {
    console.log("parameter elem is missing");
    return;
  }
  var slot = elem.id;
  if (slot != null && slot.startsWith("slot-")) {
    slot = slot.substr(5);
  }
  if (!isValidSlot(slot)) {
    console.log("not a valid slot: " + slot);
    return;
  }

  if (slot != "offhand") {
    var item = select(slot);
    if (item != null && item.twohand == false) {
      //twohand = false;
    }
    setItem(slot, item);
  }
}


function openBuild(evt, buildName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("build-container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(buildName).style.display = "flex";
  document.getElementById(buildName).style.flexDirection = "row";
  evt.currentTarget.className += " active";
} 