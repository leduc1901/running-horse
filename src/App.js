import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { ContactShadows, Plane, PerspectiveCamera, Environment, useGLTF, OrbitControls, useAnimations } from "drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useProxy } from "valtio"
import { useResource } from "react-three-fiber"

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
})

function House(props) {
  const groupRef = useRef()
  const actionRef = useRef()
  const { nodes, materials, animations, scene } = useGLTF("LittlestTokyo.glb")
  const { actions, mixer, clips, ref } = useAnimations(animations, groupRef)

  useEffect(() => {
    // console.log(clips)
    // console.log(actions)
    // console.log(groupRef)
    // console.log(mixer)
    // mixer.clipAction(clips[0], animations[0]).play()
    // console.log(clips)
    // actions['Take 001'].play()
  }, [])

  scene.position.set(1, 1, 0)
  scene.scale.set(0.0001, 0.0001, 0.0001)
  // mixer.clipAction(animations[0], scene).setDuration(10).play()
  // console.log(mixer.clipAction(animations[0], scene))

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // groupRef.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    
    // groupRef.current.rotation.x = Math.cos(t / 4) / 8
    // groupRef.current.position.y = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    groupRef.current.position.y = Math.cos(t / 4) / 8
  })
  return (
    <>
      <group receiveShadow castShadow scene={scene} ref={groupRef} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[76.07, 163.94, 118.6]} rotation={[-Math.PI / 3, 0, 0]} scale={3.1}>
                <group position={[-97.41, -7.13, -96.27]}>
                  <mesh geometry={nodes.Object078_Plastic_Soft_0.geometry} material={nodes.Object078_Plastic_Soft_0.material} />
                </group>
              </group>
              <group position={[41.05, -198.36, 208.68]} rotation={[-Math.PI / 2, 0, 0.95]}>
                <group position={[-0.02, 1.31, 8.04]} rotation={[0, 0, 0]}>
                  <group position={[0.02, -1.56, -6.22]}>
                    <mesh geometry={nodes.leaf_normal_0.geometry} material={nodes.leaf_normal_0.material} />
                  </group>
                </group>
                <group position={[2.13, -0.73, 5.06]} rotation={[0, Math.PI / 3, 0]}>
                  <group position={[-2.13, 0.48, -3.25]}>
                    <mesh geometry={nodes.hand2_normal_0.geometry} material={nodes.hand2_normal_0.material} />
                  </group>
                </group>
                <group position={[-2.17, -0.73, 5.08]} rotation={[0, -Math.PI / 3, 0]}>
                  <group position={[2.17, 0.48, -3.27]}>
                    <mesh geometry={nodes.hand1_normal_0.geometry} material={nodes.hand1_normal_0.material} />
                  </group>
                </group>
                <group position={[2.43, -0.92, 2.02]} rotation={[0, 0, 0]}>
                  <group position={[-2.43, 0.67, -0.2]}>
                    <mesh geometry={nodes.foot2_normal_0.geometry} material={nodes.foot2_normal_0.material} />
                  </group>
                </group>
                <group position={[-2.49, -0.92, 1.98]} rotation={[0, 0, 0]}>
                  <group position={[2.49, 0.67, -0.16]}>
                    <mesh geometry={nodes.foot1_normal_0.geometry} material={nodes.foot1_normal_0.material} />
                  </group>
                </group>
                <group position={[0, -0.25, 1.82]}>
                  <mesh geometry={nodes.body_normal_0.geometry} material={nodes.body_normal_0.material} />
                </group>
              </group>
              <group position={[-54.38, 114.48, -87.57]} rotation={[-Math.PI / 2, 0, 0]} scale={3.1}>
                <group position={[-55.32, -73.65, -80.31]}>
                  <mesh geometry={nodes.Object608_metalmat_0.geometry} material={nodes.Object608_metalmat_0.material} />
                  <mesh geometry={nodes.Object608_paintmat_0.geometry} material={nodes.Object608_paintmat_0.material} />
                </group>
              </group>
              <group position={[53.44, -91.07, 179.83]} rotation={[-1.53, 0, 0]}>
                <group position={[-138.49, 205.27, 96.47]}>
                  <mesh geometry={nodes.wire7_normal_0.geometry} material={nodes.wire7_normal_0.material} />
                </group>
              </group>
              <group position={[85.46, -196.52, -246.39]} rotation={[-Math.PI / 2, 0, 3.11]}>
                <group position={[-12.89, 0, 8.35]} rotation={[0, 0, 0]}>
                  <group position={[12.89, 0, 68.08]}>
                    <mesh geometry={nodes.Object680_metalmat_0.geometry} material={nodes.Object680_metalmat_0.material} />
                  </group>
                </group>
                <group position={[14.29, 0, 8.35]} rotation={[0, 0, 0]}>
                  <group position={[12.89, 0, 68.08]}>
                    <mesh geometry={nodes.Object681_metalmat_0.geometry} material={nodes.Object681_metalmat_0.material} />
                  </group>
                </group>
                <group position={[0, 0, 76.43]}>
                  <mesh geometry={nodes.Object675_metalmat_0.geometry} material={nodes.Object675_metalmat_0.material} />
                  <mesh geometry={nodes.Object675_paintmat_0.geometry} material={nodes.Object675_paintmat_0.material} />
                  <mesh geometry={nodes.Object675_glassmat_0.geometry} material={nodes.Object675_glassmat_0.material} />
                  <mesh geometry={nodes.Object675_outline_0.geometry} material={nodes.Object675_outline_0.material} />
                </group>
              </group>
              <group position={[-29.26, -38.73, -7.81]} rotation={[-Math.PI / 2, 0, -0.7]} scale={3.1}>
                <group position={[-17.71, -77.45, -30.88]} rotation={[0, 0, 0.7]}>
                  <mesh geometry={nodes.Object532_normal_0.geometry} material={nodes.Object532_normal_0.material} />
                </group>
              </group>
              <group position={[-245.52, -161.78, -259.31]} rotation={[-1.63, -0.07, -0.7]}>
                <group rotation={[0, 0, 0.7]} scale={[1, 1, 1]}>
                  <mesh geometry={nodes.Object689_metalmat_0.geometry} material={nodes.Object689_metalmat_0.material} />
                </group>
              </group>
              <group position={[-101.44, 184.59, -141.83]} rotation={[-Math.PI / 2, 0, -0.14]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane001_normal_0.geometry} material={nodes.Plane001_normal_0.material} />
                </group>
              </group>
              <group position={[-95.31, 184.59, -140.96]} rotation={[Math.PI / 2, 0, 0.14]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane003_normal_0.geometry} material={nodes.Plane003_normal_0.material} />
                </group>
              </group>
              <group position={[-83.17, 184.6, -140.38]} rotation={[-Math.PI / 2, 0, 0.3]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane104_normal_0.geometry} material={nodes.Plane104_normal_0.material} />
                </group>
              </group>
              <group position={[-77.26, 184.6, -142.21]} rotation={[Math.PI / 2, 0, -0.3]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane103_normal_0.geometry} material={nodes.Plane103_normal_0.material} />
                </group>
              </group>
              <group position={[133.48, 48.27, -68.28]} rotation={[-Math.PI / 2, 0, -1.89]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane105_normal_0.geometry} material={nodes.Plane105_normal_0.material} />
                </group>
              </group>
              <group position={[131.53, 48.27, -62.4]} rotation={[Math.PI / 2, 0, 1.89]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane106_normal_0.geometry} material={nodes.Plane106_normal_0.material} />
                </group>
              </group>
              <group position={[148.08, 111.71, 190.16]} rotation={[-Math.PI / 2, 0, 2.97]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane108_normal_0.geometry} material={nodes.Plane108_normal_0.material} />
                </group>
              </group>
              <group position={[141.99, 111.71, 189.1]} rotation={[Math.PI / 2, 0, -2.97]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane107_normal_0.geometry} material={nodes.Plane107_normal_0.material} />
                </group>
              </group>
              <group position={[172.1, 108.4, 188.55]} rotation={[-Math.PI / 2, 0, 2.07]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane109_normal_0.geometry} material={nodes.Plane109_normal_0.material} />
                </group>
              </group>
              <group position={[169.15, 108.4, 183.11]} rotation={[Math.PI / 2, 0, -2.07]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane110_normal_0.geometry} material={nodes.Plane110_normal_0.material} />
                </group>
              </group>
              <group position={[38.83, 198.6, 68.56]} rotation={[1.57, 0, -0.13]} scale={-1}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane111_normal_0.geometry} material={nodes.Plane111_normal_0.material} />
                </group>
              </group>
              <group position={[32.69, 198.6, 69.39]} rotation={[-Math.PI / 2, 0, 0.13]}>
                <group position={[-0.96, -3.61, -2.09]}>
                  <mesh geometry={nodes.Plane112_normal_0.geometry} material={nodes.Plane112_normal_0.material} />
                </group>
              </group>
              <group position={[-134.88, -36.7, -123.58]} rotation={[-1.58, 0.01, -0.02]}>
                <group position={[49.84, -98.15, 42.1]}>
                  <mesh geometry={nodes.Object704_Plastic_Soft_0.geometry} material={nodes.Object704_Plastic_Soft_0.material} />
                  <mesh geometry={nodes.Object704_metalmat_0.geometry} material={nodes.Object704_metalmat_0.material} />
                </group>
              </group>
              <group position={[11.35, -53.56, -65.67]} rotation={[-1.75, -0.09, 0.14]}>
                <group position={[-101.14, -36.73, 53.01]} rotation={[0.19, 0, -0.14]}>
                  <mesh geometry={nodes.wire1_Plastic_Soft_0.geometry} material={nodes.wire1_Plastic_Soft_0.material} />
                </group>
              </group>
              <group position={[51.83, -43.97, -45.54]} rotation={[-1.61, -0.04, -0.8]}>
                <group position={[3.65, -65.2, -24.49]} rotation={[0.04, 0.01, -2.87]} scale={[3.1, 3.1, 3.1]}>
                  <group position={[-91.86, 2.87, -19.12]} rotation={[0, 0, -0.52]}>
                    <mesh geometry={nodes.Object081_normal_0.geometry} material={nodes.Object081_normal_0.material} />
                  </group>
                </group>
                <group position={[3.8, -102.16, -21.43]} rotation={[0.05, -0.08, -2.35]} scale={[3.1, 3.1, 3.1]}>
                  <group position={[-78.67, -54.74, -19.12]}>
                    <mesh geometry={nodes.Object332_normal_0.geometry} material={nodes.Object332_normal_0.material} />
                  </group>
                </group>
                <group position={[0.54, -22.7, -18.8]} rotation={[0.08, -0.03, -1.64]} scale={[3.1, 3.1, 3.1]}>
                  <group position={[-78.67, -54.74, -19.12]}>
                    <mesh geometry={nodes.Object682_normal_0.geometry} material={nodes.Object682_normal_0.material} />
                  </group>
                </group>
                <group position={[-80.71, -112.36, 49.38]} rotation={[0, 0, 0.8]} scale={[1, 1, 1]}>
                  <mesh geometry={nodes.wire2_Plastic_Soft_0.geometry} material={nodes.wire2_Plastic_Soft_0.material} />
                </group>
              </group>
              <group position={[-3.77, -84.44, -56.37]} rotation={[-Math.PI / 2, 0, 0.07]}>
                <group position={[-83.21, -25.29, 89.85]} rotation={[0, 0, -0.07]} scale={[1, 1, 1]}>
                  <mesh geometry={nodes.wire3_normal_0.geometry} material={nodes.wire3_normal_0.material} />
                </group>
              </group>
              <group position={[50.92, -99.01, -52.27]} rotation={[-1.56, 0.07, -0.17]}>
                <group position={[-129.69, -48.86, 104.42]} rotation={[0, 0, 0.17]}>
                  <mesh geometry={nodes.wire4_normal_0.geometry} material={nodes.wire4_normal_0.material} />
                </group>
              </group>
              <group position={[77.67, -109.81, -59.7]} rotation={[-1.56, -0.05, 0.28]}>
                <group position={[-165.8, 12.78, 115.22]} rotation={[0, 0, -0.28]} scale={[1, 1, 1]}>
                  <mesh geometry={nodes.wire5_normal_0.geometry} material={nodes.wire5_normal_0.material} />
                </group>
              </group>
              <group position={[26.37, -164.47, 185.11]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-111.42, 210.54, 169.88]}>
                  <mesh geometry={nodes["Object706_Material_#5518_0"].geometry} material={nodes["Object706_Material_#5518_0"].material} />
                </group>
              </group>
              <group position={[26.37, -163.14, 185.11]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-111.42, 210.54, 168.54]}>
                  <mesh geometry={nodes["Object707_Material_#5518_0"].geometry} material={nodes["Object707_Material_#5518_0"].material} />
                </group>
              </group>
              <group position={[-121.51, 153.74, 54.21]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-111.42, 210.54, 169.88]}>
                  <mesh geometry={nodes["Object708_Material_#5518_0"].geometry} material={nodes["Object708_Material_#5518_0"].material} />
                </group>
              </group>
              <group name="Object709" position={[-121.51, 155.07, 54.21]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-111.42, 210.54, 168.54]}>
                  <mesh geometry={nodes["Object709_Material_#5518_0"].geometry} material={nodes["Object709_Material_#5518_0"].material} />
                </group>
              </group>
              <primitive object={nodes._rootJoint} />
              <group position={[-85.05, 5.4, -25.43]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object649_normal_0.geometry} material={nodes.Object649_normal_0.material} />
                <mesh geometry={nodes.Object649_paintmat_0.geometry} material={nodes.Object649_paintmat_0.material} />
                <mesh geometry={nodes.Object649_metalmat_0.geometry} material={nodes.Object649_metalmat_0.material} />
                <mesh geometry={nodes.Object649_Plastic_Soft_0.geometry} material={nodes.Object649_Plastic_Soft_0.material} />
                <mesh geometry={nodes.Object649_alpha_glass_0.geometry} material={materials.alpha_glass} />
                <mesh geometry={nodes.Object649_glassmat_0.geometry} material={nodes.Object649_glassmat_0.material} />
                <mesh geometry={nodes["Object649_Material_#5511_0"].geometry} material={materials.Material_5511} />
                <mesh geometry={nodes["Object649_Material_#5512_0"].geometry} material={materials.Material_5512} />
                <mesh geometry={nodes.Object649_glass_transp_0.geometry} material={materials.glass_transp} />
                <mesh geometry={nodes.Object649_interiors_0.geometry} material={materials.interiors} />
                <mesh geometry={nodes.Object649_alpha_0.geometry} material={materials.alpha} />
              </group>
              <group position={[-85.05, 5.4, -25.43]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object674_outline_0.geometry} material={nodes.Object674_outline_0.material} />
                <mesh geometry={nodes.Object674_outline_0_1.geometry} material={nodes.Object674_outline_0_1.material} />
              </group>
              <group position={[-29.7, -38.73, -8.18]} rotation={[-Math.PI / 2, 0, 0]} scale={3.1}>
                <group position={[-63.35, -47.95, -30.88]}>
                  <mesh geometry={nodes.Object531_normal_0.geometry} material={nodes.Object531_normal_0.material} />
                </group>
              </group>
              <group position={[-85.05, 5.4, -25.43]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes["Object705_Material_#5516_0"].geometry} material={materials.Material_5516} />
              </group>
              <group position={[-173.39, -142.47, 79.93]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[80.21, -105.99, -2.99]} rotation={[-0.32, 0.86, -1.37]} scale={[0.79, 0.79, 0.79]}>
                  <group position={[0.67, 3.97, 17.99]}>
                    <mesh geometry={nodes.Object619_alpha_0.geometry} material={nodes.Object619_alpha_0.material} />
                  </group>
                </group>
                <group position={[-62.03, -105.95, -1.43]} rotation={[-0.32, 0.86, -1.37]} scale={[0.79, 0.79, 0.79]}>
                  <group position={[0.67, 3.97, 17.99]}>
                    <mesh geometry={nodes.Object620_alpha_0.geometry} material={nodes.Object620_alpha_0.material} />
                  </group>
                </group>
                <group position={[-81.05, 105.39, -0.66]} rotation={[-0.32, 0.86, -1.37]} scale={[0.79, 0.79, 0.79]}>
                  <group position={[0.67, 3.97, 17.99]}>
                    <mesh geometry={nodes.Object621_alpha_0.geometry} material={nodes.Object621_alpha_0.material} />
                  </group>
                </group>
              </group>
              <group position={[-85.05, 5.4, -25.43]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object622_alpha_0.geometry} material={nodes.Object622_alpha_0.material} />
              </group>
              <skinnedMesh
                geometry={nodes.Object224_normal_0.geometry}
                material={nodes.Object224_normal_0.material}
                skeleton={nodes.Object224_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object224_metalmat_0.geometry}
                material={nodes.Object224_metalmat_0.material}
                skeleton={nodes.Object224_metalmat_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object688_normal_0.geometry}
                material={nodes.Object688_normal_0.material}
                skeleton={nodes.Object688_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object687_normal_0.geometry}
                material={nodes.Object687_normal_0.material}
                skeleton={nodes.Object687_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object697_normal_0.geometry}
                material={nodes.Object697_normal_0.material}
                skeleton={nodes.Object697_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object698_normal_0.geometry}
                material={nodes.Object698_normal_0.material}
                skeleton={nodes.Object698_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object699_normal_0.geometry}
                material={nodes.Object699_normal_0.material}
                skeleton={nodes.Object699_normal_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object700_normal_0.geometry}
                material={nodes.Object700_normal_0.material}
                skeleton={nodes.Object700_normal_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
      {/* <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -300, 0]} args={[3000, 3000]}>
        <meshStandardMaterial attach="material" color="white" />
      </Plane> */}
    </>
  )
}



function Picker() {
  const snap = useProxy(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  const cameraRef = useRef()

  console.log(cameraRef)

  return (
    <>
      <Canvas colorManagement shadowMap concurrent pixelRatio={window.devicePixelRatio} size={(window.innerWidth, window.innerHeight)}>
        <ambientLight intensity={0.5} />

        {/* <Shoe /> */}
        <Suspense fallback={null}>
          <House />

          <directionalLight intensity={0.5} castShadow shadow-mapSize-height={2000} shadow-mapSize-width={2000} />
          {/* <Shoe /> */}
          <Environment files="royal_esplanade_1k.hdr" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            resolution={256}
            opacity={1}
            width={999}
            height={999}
            blur={1}
            far={1}
          />
        </Suspense>
        <OrbitControls ref={cameraRef} minDistance={550} maxDistance={900} enableZoom={true} enablePan={true} />
      </Canvas>
      <Picker />
    </>
  )
}
