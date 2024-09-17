import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-neutral-900 min-h-16 flex items-center justify-center gap-14">
        <h1 className="text-white text-3xl font-extrabold">Review App</h1>
        <button
        onClick={toggleTheme}
         className="text-white bg-blue-400 p-2 rounded-lg">change mode</button>
         <Link className="text-white shadow-xl shadow-yellow-200 p-3 rounded-2xl hover:shadow-2xl hover:shadow-yellow-400 " to="/about">About</Link>
    </div>
  )
}
