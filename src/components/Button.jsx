import "../index.css";

export default function Button( {content, link, color} ) {
    return <a href={link} className={`py-2 px-6 text-white ${color || "bg-slate-700"}`}> {content} </a>;
}