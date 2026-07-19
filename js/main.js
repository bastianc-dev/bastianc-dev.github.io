import { projects } from "./projects.js";

const projectsGrid = document.querySelector("#projectsGrid");
const menuButton = document.querySelector("#menuButton");
const mainNavigation = document.querySelector("#mainNavigation");
const currentYear = document.querySelector("#currentYear");

function createTechnologyList(technologies) {
    return technologies
        .map((technology) => `<li>${technology}</li>`)
        .join("");
}

function createProjectAction(action) {
    const externalAttributes = action.url.startsWith("http")
        ? 'target="_blank" rel="noopener noreferrer"'
        : "";

    const buttonClass = action.primary
        ? "button button--primary"
        : "button button--secondary";

    return `
        <a class="${buttonClass}" href="${action.url}" ${externalAttributes}>
            ${action.label}
        </a>
    `;
}

function createProjectCard(project) {
    const completedClass =
        project.statusType === "completed"
            ? "project-status--completed"
            : "";

    return `
        <article class="project-card">
            <div class="project-visual ${project.visualClass}">
                <span class="project-visual-label">
                    ${project.visualLabel}
                </span>
            </div>

            <div class="project-content">
                <div class="project-meta">
                    <span class="project-status ${completedClass}">
                        ${project.status}
                    </span>

                    <span class="project-type">
                        ${project.type}
                    </span>
                </div>

                <h3 class="project-title">${project.title}</h3>

                <p class="project-summary">
                    ${project.summary}
                </p>

                <p class="project-proof">
                    ${project.proof}
                </p>

                <ul
                    class="project-technologies"
                    aria-label="Tecnologías utilizadas"
                >
                    ${createTechnologyList(project.technologies)}
                </ul>

                <div class="project-actions">
                    ${project.actions.map(createProjectAction).join("")}
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = projects
        .map(createProjectCard)
        .join("");
}

function closeMenu() {
    if (!menuButton || !mainNavigation) {
        return;
    }

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
        "aria-label",
        "Abrir menú de navegación"
    );
    mainNavigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
}

function toggleMenu() {
    if (!menuButton || !mainNavigation) {
        return;
    }

    const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );
    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Abrir menú de navegación"
            : "Cerrar menú de navegación"
    );
    mainNavigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
}

function initializeNavigation() {
    if (!menuButton || !mainNavigation) {
        return;
    }

    menuButton.addEventListener("click", toggleMenu);

    mainNavigation
        .querySelectorAll("a")
        .forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
            closeMenu();
        }
    });
}

function initializeYear() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

renderProjects();
initializeNavigation();
initializeYear();
