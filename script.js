let scene, camera, renderer, cube;

function startExperience() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("bgMusic").play();
  document.getElementById("note").style.display = "block";
  init();
  animate();
}

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 0.2, 3);
  const material = new THREE.MeshStandardMaterial({ color: 0xffe4c4 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  cube.rotation.x += 0.005;

  renderer.render(scene, camera);
}
