import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    // Setup camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(100.0, 100.0, 100.0);
    camera.lookAt(0.0, 0.0, 0.0);

    // Setup scene
    scene = new THREE.Scene();
    
    var gridXZ = new THREE.GridHelper(100, 20);
    scene.add(gridXZ);

    geometry = new THREE.BoxGeometry(5, 5, 5);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Add renderer to dom
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}
