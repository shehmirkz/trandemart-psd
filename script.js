<script>
  AOS.init();
</script>


let womanButton = document.getElementById('nav-profile-tab');
womanButton.onclick = () => {
  document.getElementById('man-image').innerHTML('girl-image');
};