"use client"

import { useEffect, useRef, useState } from "react"
import Globe from "react-globe.gl"


const locations = [
  { lat: 40.7128, lng: -74.006, name: "New York", altitude: 0.1 },
  { lat: 51.5074, lng: -0.1278, name: "London", altitude: 0.1 },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo", altitude: 0.1 },
  { lat: 52.52, lng: 13.405, name: "Berlin", altitude: 0.1 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", altitude: 0.1 },
  { lat: 37.7749, lng: -122.4194, name: "San Francisco", altitude: 0.1 },
  { lat: 25.2048, lng: 55.2708, name: "Dubai", altitude: 0.1 },
  { lat: -33.8688, lng: 151.2093, name: "Sydney", altitude: 0.1 },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", altitude: 0.1 },
  { lat: 55.7558, lng: 37.6173, name: "Moscow", altitude: 0.1 },
  { lat: 28.6139, lng: 77.209, name: "New Delhi", altitude: 0.1 },
  { lat: 39.9042, lng: 116.4074, name: "Beijing", altitude: 0.1 },
]


const generateArcs = () => {
  const arcs: Array<{
    startLat: number
    startLng: number
    endLat: number
    endLng: number
    color: string[]
  }> = []


  const hubs = [
    { lat: 40.7128, lng: -74.006, name: "New York" },
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
    { lat: 52.52, lng: 13.405, name: "Berlin" },
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
  ]


  const hubColors = [
    ["rgba(59, 130, 246, 0.95)", "rgba(147, 51, 234, 0.95)"], // blue to purple
    ["rgba(147, 51, 234, 0.95)", "rgba(236, 72, 153, 0.95)"], // purple to pink
    ["rgba(59, 130, 246, 0.9)", "rgba(34, 197, 94, 0.9)"], // blue to green
    ["rgba(236, 72, 153, 0.9)", "rgba(59, 130, 246, 0.9)"], // pink to blue
  ]
  
  let colorIndex = 0
  for (let i = 0; i < hubs.length; i++) {
    for (let j = i + 1; j < hubs.length; j++) {
      arcs.push({
        startLat: hubs[i].lat,
        startLng: hubs[i].lng,
        endLat: hubs[j].lat,
        endLng: hubs[j].lng,
        color: hubColors[colorIndex % hubColors.length],
      })
      colorIndex++
    }
  }


  const connectionColors = [
    ["rgba(236, 72, 153, 0.7)", "rgba(59, 130, 246, 0.7)"], // pink to blue
    ["rgba(59, 130, 246, 0.7)", "rgba(147, 51, 234, 0.7)"], // blue to purple
    ["rgba(147, 51, 234, 0.7)", "rgba(236, 72, 153, 0.7)"], // purple to pink
  ]
  
  let connColorIndex = 0
  locations.forEach((loc) => {
    if (!hubs.some((h) => h.name === loc.name)) {
      const nearestHub = hubs.reduce((prev, curr) => {
        const prevDist = Math.sqrt(
          Math.pow(prev.lat - loc.lat, 2) + Math.pow(prev.lng - loc.lng, 2)
        )
        const currDist = Math.sqrt(
          Math.pow(curr.lat - loc.lat, 2) + Math.pow(curr.lng - loc.lng, 2)
        )
        return prevDist < currDist ? prev : curr
      })

      arcs.push({
        startLat: loc.lat,
        startLng: loc.lng,
        endLat: nearestHub.lat,
        endLng: nearestHub.lng,
        color: connectionColors[connColorIndex % connectionColors.length],
      })
      connColorIndex++
    }
  })

  return arcs
}

export default function GlobeAnimation() {
  const globeEl = useRef<any>(null)
  const [arcs] = useState(() => generateArcs()) 
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

   
    const checkMobile = () => {
      const mobile = typeof window !== 'undefined' && window.innerWidth < 768
      setIsMobile(mobile)
      

      if (globeEl.current) {
        const controls = globeEl.current.controls()
        if (controls) {
          controls.enableZoom = false
          controls.autoRotate = true
          controls.autoRotateSpeed = 0.5
        }

  
        const altitude = mobile ? 1.6 : 1.8
        globeEl.current.pointOfView({ lat: 20, lng: 0, altitude }, 0)
      }
    }
    

    if (typeof window !== 'undefined') {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile)
      }
    }
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white/50">Loading globe...</div>
      </div>
    )
  }

  // Mobil için responsive ayarlar
  const pointRadius = isMobile ? 0.9 : 1.1
  const arcStroke = isMobile ? 2.5 : 3.5
  const pointResolution = isMobile ? 10 : 14

  return (
    <div className="absolute inset-0 w-full h-full">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        arcsData={arcs}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcColor={(d: any) => d.color}
        arcDashLength={0.6}
        arcDashGap={0.1}
        arcDashAnimateTime={2500}
        arcStroke={arcStroke}
        arcsTransitionDuration={0}
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="altitude"
        pointRadius={pointRadius}
        pointColor={() => "#60a5fa"}
        pointResolution={pointResolution}
        pointLabel="name"
        showAtmosphere={true}
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.15}
        enablePointerInteraction={false}
      />
    </div>
  )
}

