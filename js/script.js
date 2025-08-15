// script code from wk 5 shop template
function addToCart(itemId) {
      alert("Added " + itemId + " to cart (functionality to come)");
      // Future: Push to cart array
    }

    function openModal(imgElement) {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      modalImage.src = imgElement.src;
      modalImage.alt = imgElement.alt;
      modal.style.display = "block";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }

    // Optional: Close modal on outside click
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
        closeModal();
      }
    }
// end code from wk5 shop template