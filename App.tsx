import React, { useState } from 'react';
import { APP_NAME, COMPANY_URL, PARTNER_URL, NAVIGATION_ITEMS } from './constants';
import { 
    LayoutDashboard, 
    BookOpen, 
    Library, 
    Settings, 
    Menu, 
    X, 
    ChevronRight,
    UploadCloud
} from 'lucide-react';

// Main Layout Component
const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'LayoutDashboard': return <LayoutDashboard size={20} />;
            case 'BookOpen': return <BookOpen size={20} />;
            case 'Library': return <Library size={20} />;
            case 'Settings': return <Settings size={20} />;
            default: return <div />;
        }
    };

    return (
        <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside 
                className={`${
                    isSidebarOpen ? 'w-64' : 'w-20'
                } bg-slate-950 border-r border-slate-800 transition-all duration-300 flex flex-col z-20 hidden md:flex`}
            >
                <div className="p-4 flex items-center justify-between border-b border-slate-800 h-16">
                    {isSidebarOpen && (
                        <h1 className="font-bold text-lg text-blue-400 tracking-wider truncate">
                            {APP_NAME}
                        </h1>
                    )}
                    <button 
                        onClick={toggleSidebar}
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors"
                    >
                        {isSidebarOpen ? <Menu size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>

                <nav className="flex-1 py-6 px-3 space-y-1">
                    {NAVIGATION_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                                activeTab === item.id 
                                    ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                            }`}
                            title={!isSidebarOpen ? item.label : ''}
                        >
                            <span className={`${activeTab === item.id ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                {renderIcon(item.icon)}
                            </span>
                            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
                    {isSidebarOpen && (
                        <div className="flex flex-col space-y-1">
                            <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">AWIS</a>
                            <span>&</span>
                            <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">SimpleData</a>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen relative overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 z-20">
                    <span className="font-bold text-blue-400">{APP_NAME}</span>
                    <button className="p-2 text-slate-400">
                        <Menu size={24} />
                    </button>
                </header>

                {/* Content Container */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10 relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
                        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600 blur-[100px]"></div>
                        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-600 blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-xl">
                            <div className="inline-flex items-center justify-center p-4 bg-slate-800 rounded-full mb-6 border border-slate-700 animate-pulse">
                                <UploadCloud size={48} className="text-blue-400" />
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Proyecto Iniciado Exitosamente
                            </h2>
                            
                            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                El entorno de desarrollo para <strong>{APP_NAME}</strong> está listo.
                                <br/>
                                La estructura de carpetas está configurada para recibir tus fuentes.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                                    <h3 className="font-semibold text-lg mb-2 text-slate-200 group-hover:text-blue-400 transition-colors">Estructura Limpia</h3>
                                    <p className="text-sm text-slate-500">
                                        Componentes base y configuraciones de TypeScript listas. Utiliza <code>App.tsx</code> como punto de entrada.
                                    </p>
                                </div>
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                                    <h3 className="font-semibold text-lg mb-2 text-slate-200 group-hover:text-purple-400 transition-colors">Integración UI</h3>
                                    <p className="text-sm text-slate-500">
                                        Tailwind CSS preconfigurado en el modo JIT. Listo para integrar tus componentes visuales.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800/50">
                                <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
                                    Esperando migración de código fuente
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;