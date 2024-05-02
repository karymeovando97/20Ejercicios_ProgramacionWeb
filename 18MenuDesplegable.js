function toggleSuboptions(element) {
    var suboptions = element.nextElementSibling;
    if (suboptions.style.display === "none") {
        suboptions.style.display = "block";
    } else {
        suboptions.style.display = "none";
    }
}
