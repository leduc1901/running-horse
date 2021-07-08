import React, { Suspense, useRef, useState, useEffect, useMemo } from "react"
import { Canvas, extend, useThree, useLoader, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Plane,
  useResource,
  PerspectiveCamera,
  Environment,
  useGLTF,
  OrbitControls,
  useAnimations,
  Stage,
  Sky,
} from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useProxy, useSnapshot } from "valtio"
import * as THREE from "three"
import grass from "./grasslight-big.jpg"
import { Water } from "three-stdlib"

extend({ Water })

const state = proxy({
  current: null,
  items: {
    horse: "#ffffff",
  },
})

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg")
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals],
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

function Model(props) {
  const group = useRef()
  const [hovered, set] = useState(null)

  const { nodes, materials, animations } = useGLTF("/Horse.glb")
  const { actions } = useAnimations(animations, group)
  const snap = useSnapshot(state)
  useEffect(() => {
    actions?.horse_A_.play()
    group.current.position.y = 0
    console.log(group)
  }, [])

  return (
    <group
      ref={group}
      castShadow
      receiveShadow
      {...props}
      dispose={null}>
      <mesh
        name="mesh_0"
        material-color={snap.items.horse}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload("/Horse.glb")

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div style={{ display: "block"}}>
      <HexColorPicker className="picker" color={snap.items['horse']} onChange={(color) => (state.items['horse'] = color)} />
    </div>
  )
}

export default function App() {
  const myCamera = useRef()

  return (
    <>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean />
          <Model />
        </Suspense>
        <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
        <OrbitControls minDistance={500} maxDistance={650} />
      </Canvas>
      <Picker /> 
    </>
  )
}
