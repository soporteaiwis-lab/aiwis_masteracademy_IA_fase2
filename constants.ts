
import { Student, Class } from './types';

// Archivo para constantes globales
// Defina sus constantes de configuración aquí.

export const APP_NAME = "IA_ACADEMY_AWIS_FASE2";
export const COMPANY_URL = "https://www.aiwis.cl";
export const PARTNER_URL = "https://www.simpledata.cl";

export const NAVIGATION_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'courses', label: 'Cursos IA', icon: 'BookOpen' },
    { id: 'resources', label: 'Recursos', icon: 'Library' },
    { id: 'settings', label: 'Configuración', icon: 'Settings' },
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 's1',
    username: 'armin',
    name: 'Armin Salazar',
    email: 'armin@aiwis.cl',
    companyId: 'aiwis',
    completedClasses: ['c1'],
    role: 'admin',
    progress: 85,
    lastActive: 'Hace 2 horas',
    avatar: 'https://ui-avatars.com/api/?name=Armin+Salazar&background=0D8ABC&color=fff'
  },
  {
    id: 's2',
    username: 'juan',
    name: 'Juan Pérez',
    email: 'juan@simpledata.cl',
    companyId: 'simpledata',
    completedClasses: [],
    role: 'student',
    progress: 30,
    lastActive: 'Hace 1 día',
    avatar: 'https://ui-avatars.com/api/?name=Juan+Perez&background=random'
  },
  {
    id: 's3',
    username: 'maria',
    name: 'María García',
    email: 'maria@simpledata.cl',
    companyId: 'simpledata',
    completedClasses: ['c1', 'c2'],
    role: 'student',
    progress: 60,
    lastActive: 'Hace 5 horas',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=random'
  }
];

export const INITIAL_CLASSES: Class[] = [
  {
    id: 'c1',
    moduleId: 'm1',
    title: 'Introducción a la IA Generativa',
    description: 'Fundamentos de la Inteligencia Artificial Generativa y su impacto en el mundo empresarial moderno. Conceptos clave sobre LLMs.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    instructor: 'Armin Salazar',
    date: '15 Mayo 2024',
    duration: '45 min',
    transcription: 'Bienvenidos a la introducción a la IA Generativa. Hoy hablaremos sobre cómo los modelos de lenguaje grandes están transformando la industria...',
    tags: ['Fundamentos', 'Estrategia'],
    isCompleted: true
  },
  {
    id: 'c2',
    moduleId: 'm1',
    title: 'Ingeniería de Prompts para Negocios',
    description: 'Técnicas avanzadas para escribir prompts efectivos que generen resultados de alta calidad en contextos empresariales.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    instructor: 'Armin Salazar',
    date: '18 Mayo 2024',
    duration: '60 min',
    transcription: 'En esta clase profundizaremos en la estructura de un buen prompt. El contexto es clave para obtener buenas respuestas...',
    tags: ['Prompts', 'Práctica'],
    isCompleted: false
  },
  {
    id: 'c3',
    moduleId: 'm2',
    title: 'Automatización de Flujos de Trabajo',
    description: 'Cómo integrar herramientas de IA en tus procesos diarios para aumentar la productividad y reducir errores.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    instructor: 'Armin Salazar',
    date: '20 Mayo 2024',
    duration: '55 min',
    transcription: 'La automatización no se trata solo de velocidad, sino de consistencia. Veremos cómo conectar APIs de IA...',
    tags: ['Automatización', 'Productividad'],
    isCompleted: false
  }
];
