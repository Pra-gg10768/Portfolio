import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import robotScene1 from "../assets/3d/robot1.glb";

const Robot = ({ scale, position, rotationX, rotationY }) => {
    const robotRef = useRef();
    const { scene, animations } = useGLTF(robotScene1);
    const { actions, names } = useAnimations(animations, robotRef);

    useEffect(() => {
        if (actions && names.length > 0) {
            actions[names[0]]?.play();
        }
    }, [actions, names]);

    useEffect(() => {
        if (robotRef.current) {
            robotRef.current.rotation.x = rotationX;
            robotRef.current.rotation.y = rotationY;
        }
    }, [rotationX, rotationY]);

    return (
        <primitive
            ref={robotRef}
            object={scene}
            position={position}
            scale={scale}
        />
    );
};

const RobotCanvas1 = ({ scrollContainer }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([20, 20, 20]); // Further increased scale
    const [position, setPosition] = useState([0, -4, 0]); // Adjusted position
    const [isDragging, setDragging] = useState(false);

    const canvasRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!isDragging) return;
            const { movementX, movementY } = event;
            setRotationX((prev) => prev + movementY * 0.01);
            setRotationY((prev) => prev + movementX * 0.01);
        };

        const handleMouseDown = (event) => {
            if (canvasRef.current && canvasRef.current.contains(event.target)) {
                setDragging(true);
            }
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        const handleScroll = () => {
            if (scrollContainer?.current) {
                const scrollTop = scrollContainer.current.scrollTop;
                const rotationXValue = scrollTop * -0.0096;
                const rotationYValue = scrollTop * 0.00075;
                setRotationX(rotationXValue);
                setRotationY(rotationYValue);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([10, 10, 10]); // Adjusted scale for smaller screens
                setPosition([0, -2, 0]);
            } else if (window.innerWidth < 1024) {
                setScale([14, 14, 14]); // Increased scale for medium screens
                setPosition([0, -3, 0]);
            } else if (window.innerWidth < 1280) {
                setScale([18, 18, 18]); // Further increase for larger screens
                setPosition([0, -3, 0]);
            } else if (window.innerWidth < 1536) {
                setScale([20, 20, 20]); // Further increase for very large screens
                setPosition([0, -4, 0]);
            } else {
                setScale([22, 22, 22]); // Largest scale
                setPosition([0, -5, 0]);
            }
        };

        handleResize();
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        if (scrollContainer?.current) {
            scrollContainer.current.addEventListener("scroll", handleScroll);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            if (scrollContainer?.current) {
                scrollContainer.current.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [isDragging, scrollContainer]);

    return (
        <Canvas
            className="about-canvas"
            camera={{ position: [0, 0, 25], near: 0.1, far: 1000, fov: 50 }} // Adjusted camera position and fov
            ref={canvasRef}
        >
            <Suspense fallback={null}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                <Robot
                    rotationX={rotationX}
                    rotationY={rotationY}
                    scale={scale}
                    position={position}
                />
            </Suspense>
        </Canvas>
    );
};

export default RobotCanvas1;
