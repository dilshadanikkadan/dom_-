const camera_el = document.querySelector("#cameraObj");
const click_btn = document.querySelector(".clickBtn");
const capture_img_container = document.querySelector(".afterCapture");
const filter_group = document.querySelector(".filter");

const canvas = document.createElement("canvas");

let capturedPhoto;
window.onload = function (e) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    camera_el.srcObject = stream;
  });

  click_btn.addEventListener("click", () => {
    setTimeout(() => {
      canvas.width = camera_el.videoWidth;
      canvas.height = camera_el.videoHeight;

      const context = canvas.getContext("2d");
      context.drawImage(camera_el, 0, 0);

      const photoDataUrl = canvas.toDataURL("image/jpeg");

      capturedPhoto = document.createElement("img");
      capture_img_container.classList.remove("container-hidden");
      capturedPhoto.classList.add("imgContainer");
      capturedPhoto.src = photoDataUrl;
      capture_img_container.prepend(capturedPhoto);
    }, 0);
  });
};

filter_group.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "blur":
      capturedPhoto.style.filter = "blur(4px)";
      break;
    case "black-white":
      capturedPhoto.style.filter = "grayscale(100%)";
      break;
    case "vivid":
      capturedPhoto.style.filter = " saturate(3)";
      break;
    case "sepia":
      capturedPhoto.style.filter = "sepia(100%)";
      break;
    case "invert":
      capturedPhoto.style.filter = "invert(100%)";
      break;
    default:
      break;
  }
});
