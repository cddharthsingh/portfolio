import SidebarMenu from './SidebarMenu';

export default function Sidebar({ width }) {
    return (
        <div style={{ width: `${width}px` }} className="bg-zinc-950 text-cyan-700 pt-10">
            <SidebarMenu />
        </div>
    );
}
