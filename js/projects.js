export const projects = [
    {
        title: "CRM de gestión de leads",
        type: "Backend API",
        status: "Publicado",
        statusType: "completed",
        summary:
            "API REST para gestión de usuarios y leads, con autenticación JWT, roles, permisos por propiedad, búsqueda, filtros, paginación y PostgreSQL.",
        proof:
            "31 pruebas automatizadas · Docker · Swagger · Desplegado en Render",
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Alembic",
            "JWT",
            "Pytest"
        ],
        visualLabel: "CRM · FastAPI",
        visualClass: "project-visual--crm",
        actions: [
            {
                label: "Swagger",
                url: "https://crm-backend-kpcb.onrender.com/docs",
                primary: true
            },
            {
                label: "Repositorio",
                url: "https://github.com/bastianc-dev/crm-backend"
            },
            {
                label: "Detalles",
                url: "./projects/crm.html"
            }
        ]
    },
    {
        title: "Quick Math",
        type: "Aplicación web",
        status: "Publicado",
        statusType: "completed",
        summary:
            "Aplicación responsive para practicar cálculo mental con distintas operaciones, dificultades, modos infinito y contrarreloj, y récords guardados localmente.",
        proof:
            "Responsive · localStorage · Publicado con GitHub Pages",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "DOM",
            "localStorage"
        ],
        visualLabel: "Quick Math",
        visualClass: "project-visual--math",
        actions: [
            {
                label: "Abrir aplicación",
                url: "https://bastianc-dev.github.io/quickmath/",
                primary: true
            },
            {
                label: "Repositorio",
                url: "https://github.com/bastianc-dev/quickmath"
            },
            {
                label: "Detalles",
                url: "./projects/quick-math.html"
            }
        ]
    }
];
